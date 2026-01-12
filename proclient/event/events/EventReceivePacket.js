import { Event } from '../Event.js';

export class EventReceivePacket extends Event {
    constructor(packet) {
        super();
        this.packet = packet;
        this.outgoing = false;
    }

    getPacket() {
        return this.packet;
    }

    setPacket(packet) {
        this.packet = packet;
    }

    isOutgoing() {
        return this.outgoing;
    }

    setOutgoing(outgoing) {
        this.outgoing = outgoing;
    }
}
