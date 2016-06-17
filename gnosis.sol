contract AbstractResolverContract {
    function isValidEvent(bytes32 descriptionHash, bytes32[] data, bytes32[] validationData) returns (bool);
    function isWinningOutcomeSet(bytes32 descriptionHash, bytes32[] data) constant returns (bool);
    function getFee(bytes32 descriptionHash, bytes32[] data, bytes32[] validationData) returns (uint);
    function getWinningOutcome(bytes32 descriptionHash, bytes32[] data) constant returns (int);
    function setWinningOutcome(bytes32 descriptionHash, bytes32[] data) returns (bool);
}