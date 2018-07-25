module.exports = class Room {
    constructor(id, name) {
        if (!id) {
            throw ('room id required');
        }
        if (id.match(/^[a-z]+$/)) {
            this.id = id
            this.name = name || captalize(id)
        } else {
            throw ('room id must contain only lowercase letters')
        }
        this.messages = []
        
    }
    messageCount() {
        return this.messages.length;
    }
    sendMessage(message) {
        this.messages.push(message)
    }
    messagesSince(noon) {
        return this
        .messages
        .filter(
            message => message.when>noon
        )
    }
}
function captalize(s) {
    
    let firstChar = (s.charAt(0).toUpperCase() + s.substring(1));

    return firstChar

}

