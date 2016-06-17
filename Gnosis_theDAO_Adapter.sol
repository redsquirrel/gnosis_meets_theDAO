import "theDAO.sol";
import "gnosis.sol";

contract Gnosis_theDAO_Adapter {
    DAOInterface public dao;
    AbstractResolverContract public gnosis;

    struct ProposalStatus {
        bool open;
        bool passed;
        bool split;
    }

    uint public numProposals;
    uint[] public openProposalIDs;

    function Gnosis_theDAO_Adapter(DAOInterface _dao, AbstractResolverContract _gnosis) {
        dao = _dao;
        gnosis = _gnosis;
    }

    function sync() {
        processPrevious();
        processNew();
    }

    // process any previously known open proposals
    function processPrevious() internal {
        for (uint i = 0; i < openProposalIDs.length; i++) {
            ProposalStatus memory ps = getProposalStatus(openProposalIDs[i]);
            if (!ps.open) {
                sendToGnosis(ps, openProposalIDs[i]);
                delete openProposalIDs[i];
            }
        }    
    }

    // process any new proposals
    function processNew() internal {
        uint latestNumProposals = dao.numberOfProposals();
        uint newNumProposals = latestNumProposals - numProposals;
        for (uint i = 0; i < newNumProposals; i++) {
            uint proposalID = latestNumProposals - i;
            ProposalStatus memory ps = getProposalStatus(proposalID);
            if (!ps.split) { // ignore split proposals
                if (ps.open) {
                    openProposalIDs.push(proposalID);
                } else {
                    sendToGnosis(ps, proposalID);
                }
            }
        }
        numProposals = latestNumProposals;  
    }
  
    function getProposalStatus(uint proposalID) internal returns (ProposalStatus) {
        var (recipient, amount, description, votingDeadline, open, proposalPassed, proposalHash, proposalDeposit, newCurator, yea, nay, creator) = dao.proposals(proposalID);
        return ProposalStatus(open, proposalPassed, newCurator);
    }

    function sendToGnosis(ProposalStatus ps, uint proposalID) internal {
        bytes32[] memory data;
        if (ps.passed) {
            data[0] = "passed";
        } else {
            data[0] = "failed";
        }
        gnosis.setWinningOutcome(bytes32(proposalID), data);
    }
}
