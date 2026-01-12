import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class FreeCam extends Module {
    constructor() {
        super("FreeCam", 0, Category.PLAYER);
        this.fakePlayer = null;
        this.oldX = 0;
        this.oldY = 0;
        this.oldZ = 0;
    }

    onEnable() {
        if (!this.mc || !this.mc.thePlayer || !this.mc.theWorld) return;
        
        this.oldX = this.mc.thePlayer.posX;
        this.oldY = this.mc.thePlayer.posY;
        this.oldZ = this.mc.thePlayer.posZ;
        
        this.mc.thePlayer.capabilities.allowFlying = true;
    }

    onDisable() {
        if (!this.mc || !this.mc.thePlayer) return;
        
        this.mc.thePlayer.capabilities.allowFlying = false;
        this.mc.thePlayer.capabilities.isFlying = false;
        
        if (this.fakePlayer && this.mc.theWorld) {
            this.mc.theWorld.removeEntityFromWorld(this.fakePlayer.getEntityId());
        }
        
        this.mc.thePlayer.setPosition(this.oldX, this.oldY, this.oldZ);
    }
}
