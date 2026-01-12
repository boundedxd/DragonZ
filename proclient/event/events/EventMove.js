import { Event } from '../Event.js';

export class EventMove extends Event {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
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

    getZ() {
        return this.z;
    }

    setZ(z) {
        this.z = z;
    }
}
