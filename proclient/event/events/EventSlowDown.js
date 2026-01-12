import { Event } from '../Event.js';

export class EventSlowDown extends Event {
    constructor(slowDownMultiplier) {
        super();
        this.slowDownMultiplier = slowDownMultiplier;
    }

    getSlowDownMultiplier() {
        return this.slowDownMultiplier;
    }

    setSlowDownMultiplier(slowDownMultiplier) {
        this.slowDownMultiplier = slowDownMultiplier;
    }
}
