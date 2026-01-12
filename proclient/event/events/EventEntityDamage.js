import { Event } from '../Event.js';

export class EventEntityDamage extends Event {
    constructor(entity) {
        super();
        this.entity = entity;
    }

    getEntity() {
        return this.entity;
    }
}
