import { Event } from '../Event.js';

export class EventMotion extends Event {
    constructor(x, y, z, yaw, pitch, onGround) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
        this.yaw = yaw;
        this.pitch = pitch;
        this.onGround = onGround;
    }

    getPitch() {
        return this.pitch;
    }

    setPitch(pitch) {
        this.pitch = pitch;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    getYaw() {
        return this.yaw;
    }

    setYaw(yaw) {
        this.yaw = yaw;
    }

    getZ() {
        return this.z;
    }

    setZ(z) {
        this.z = z;
    }

    isOnGround() {
        return this.onGround;
    }

    setOnGround(onGround) {
        this.onGround = onGround;
    }
}
