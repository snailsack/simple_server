module.exports = class Message {
    constructor(options = {}) {
        //following is replaced by "options = {}"
        // if (!options) {
        //     let options = {}
        // }
        this.when = options.when || new Date();
        this.author = options.author || 'anonymous';
        this.body = options.body || '';
    }
    
   
}