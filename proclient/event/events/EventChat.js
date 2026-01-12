import { Event } from '../Event.js';

export class EventChat extends Event {
    constructor(message) {
        super();
        this.message = message;
    }
    
    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
    }
}
