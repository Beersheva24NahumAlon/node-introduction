export default class WordSearcher {
    #emitter
    #words
    #messages

    constructor(emitter, words, level) {
        this.#words = words
        this.#messages = [];
        this.#emitter = emitter;
        this.#emitter.on(level, (message) => this.#messageProcessing(message));
    }

    #messageProcessing(message) {
        const match = this.#words.some(w => message.toLowerCase().includes(w.toLowerCase()));
        if (match) {
            this.#messages.push(message);
        }
    }

    printMessages() {
        console.log(this.#messages);
    }
    
}