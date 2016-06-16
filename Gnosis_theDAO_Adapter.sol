import "theDAO.sol";

contract Gnosis_theDAO_Adapter {
    DAOInterface public dao;

    struct ProposalStatus {
        bool open;
        bool passed;
    }

    uint public numProposals;
    uint[] public openProposalIDs;

    event SendToGnosis(uint proposalID, bool proposalPassed);

    function Gnosis_theDAO_Adapter(DAOInterface theDAO) {
        dao = theDAO;
    }

    function sync() {
        processPrevious();
        processNew();
    }

    // process any previously known open proposals
    function processPrevious() internal {
        for (uint i = 0; i < openProposalIDs.length; i++) {
            ProposalStatus memory ps = proposalStatus(openProposalIDs[i]);
            if (!ps.open) {
                SendToGnosis(openProposalIDs[i], ps.passed);
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
            ProposalStatus memory ps = proposalStatus(proposalID);
            if (ps.open) {
                openProposalIDs.push(proposalID);
            } else {
                SendToGnosis(proposalID, ps.passed);
            }
        }
        numProposals = latestNumProposals;  
    }
  
    function proposalStatus(uint proposalID) internal returns (ProposalStatus) {
        var (recipient, amount, description, votingDeadline, open, proposalPassed, proposalHash, proposalDeposit, newCurator, yea, nay, creator) = dao.proposals(proposalID);
        return ProposalStatus(open, proposalPassed);
    }
}
