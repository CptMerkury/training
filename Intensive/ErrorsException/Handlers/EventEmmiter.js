class EventEmitter {
    #handlers = new Map();

    on(event, cb) {
        if (!this.#handlers.has(event)) {
            this.#handlers.set(event, new Set())
        }

        this.#handlers.get(event).add(cb)
        return this;
    }
    off(event, cb) {
        if (event === null) {
            this.#handlers.clear();
        } else if (this.#handlers.has(event)) {
            if (cb != null) {
                this.#handlers.get(event).delete(cb)
            } else {
                this.#handlers.get(event).clear();
            }
        }
        return this;
    }

    emit(event, data) {
        if (!this.#handlers.has(event)) {
            return this;
        }

        for (const cb of this.#handlers.get(event)) {
            try {
                cb(data);
            } catch (e) {
                console.log(`\nEvent: ${event} throw errors: ${data}\n`)
            }
        }
    }
}

const ev = new EventEmitter();

ev.on('click_1', (e) => {
    console.log('Clicked 1', e)
})

ev.on('click_2', (e) => {
    console.log('Clicked 2', e)
})

ev.on('click_3', (e) => {
    console.log('Clicked 3', e)
})

ev.on('click_3', (e) => {
    console.log('Clicked 3', e)
})

ev.on('click_3', (e) => {
    console.log('Clicked 3', e)
})

ev.on('BadClick', (e) => {
    throw new Error(e)
})

ev.emit('click_2', { 'Click': [1, 2] })
ev.emit('click_1', { 'Click': [1] })
ev.emit('click_3', { 'Click': [1, 2, 3] })
ev.emit('BadClick', 'Errors Click')