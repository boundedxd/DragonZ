import { EventType } from './EventType.js';
import { EventDirection } from './EventDirection.js';

export class Event {
    constructor() {
        this.cancelled = false;
        this.type = null;
        this.direction = null;
    }

    isCancelled() {
        return this.cancelled;
    }

    setCancelled(cancelled) {
        this.cancelled = cancelled;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getDirection() {
        return this.direction;
    }

    setDirection(direction) {
        this.direction = direction;
    }

    isPre() {
        if (this.type == null)
            return false;
        return this.type == EventType.PRE;
    }

    isPost() {
        if (this.type == null)
            return false;
        return this.type == EventType.POST;
    }

    isIncoming() {
        if (this.direction == null)
            return false;
        return this.direction == EventDirection.INCOMING;
    }

    isOutgoing() {
        if (this.direction == null)
            return false;
        return this.direction == EventDirection.OUTGOING;
    }
}
