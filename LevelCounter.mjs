export default class LevelCounter {
    #emitter
    #levels

    constructor(emitter) {
        this.#emitter = emitter;
        this.#levels = {};
        this.#emitter.on("message", ({level}) => this.#messageProcessing(level));
    }

    #messageProcessing(level) {
        this.#levels[level] = this.#levels[level] ?? 0;
        this.#levels[level]++;
    }

    printLevels() {
        console.log(this.#levels);
    }
    
}