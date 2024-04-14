pragma solidity ^0.8.0;

contract MessageBoard {
    // Define structure for message
    struct Message {
        address sender;
        string content;
    }
    
    // Mapping to store messages
    mapping(uint256 => Message) public messages;
    uint256 public messageCount;

    // Event to log message creation
    event MessageCreated(address indexed sender, string content);

    // Function to add a new message
    function addMessage(string memory _content) public {
        messages[messageCount] = Message(msg.sender, _content);
        messageCount++;
        emit MessageCreated(msg.sender, _content);
    }

    // Function to retrieve a specific message content
    function getMessage(uint256 _index) public view returns (address, string memory) {
        require(_index < messageCount, "Message index out of bounds");
        return (messages[_index].sender, messages[_index].content);
    }
}