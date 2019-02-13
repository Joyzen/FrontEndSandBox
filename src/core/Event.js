class Event {
    constructor() {
        this._listeners = [];
        this._scopes = [];
    }

    raise (...args) {
        this._listeners.forEach((listener, idx) => {
            if (typeof listener == 'function') {
                const scope = this._scopes[idx] ? this._scopes[idx] : this;
                listener.apply(scope, args);
            }
        });
    }

    on (listener, scope) {
        this._listeners.push(listener);
        this._scopes.push(scope);
    }
}

export { Event };