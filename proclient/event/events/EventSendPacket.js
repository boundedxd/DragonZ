import { Event } from '../Event.js';

export class EventSendPacket extends Event {
    constructor(packet) {
        super();
        this.packet = packet;
        this.yaw = 0;
        this.pitch = 0;
    }

    getPacket() {
        return this.packet;
    }

    setPacket(packet) {
        this.packet = packet;
    }

    setRotation(yaw, pitch) {
        this.yaw = yaw;
        this.pitch = pitch;
    }

    getYaw() {
        return this.yaw;
    }

    getPitch() {
        return this.pitch;
    }
}
