import { Event } from '../Event.js';

export class EventCollide extends Event {
    constructor(entity, posX, posY, posZ, boundingBox, block) {
        super();
        this.entity = entity;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
        this.boundingBox = boundingBox;
        this.block = block;
    }

    getEntity() {
        return this.entity;
    }

    setEntity(entity) {
        this.entity = entity;
    }

    getPosX() {
        return this.posX;
    }

    setPosX(posX) {
        this.posX = posX;
    }

    getPosY() {
        return this.posY;
    }

    setPosY(posY) {
        this.posY = posY;
    }

    getPosZ() {
        return this.posZ;
    }

    setPosZ(posZ) {
        this.posZ = posZ;
    }

    getBoundingBox() {
        return this.boundingBox;
    }

    setBoundingBox(boundingBox) {
        this.boundingBox = boundingBox;
    }

    getBlock() {
        return this.block;
    }

    setBlock(block) {
        this.block = block;
    }
}
