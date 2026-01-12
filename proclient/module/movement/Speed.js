import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class Speed extends Module {
    constructor() {
        super("Speed", 0, Category.MOVEMENT);
        Dragon.setmgr.rSetting(this.speed = new Setting("Speed", this, 1.5, 0.5, 5.0, false));
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.onGround && this.mc.thePlayer.isMoving && this.mc.thePlayer.isMoving()) {
                const speedValue = this.speed.getValDouble();
                this.mc.thePlayer.motionX *= speedValue;
                this.mc.thePlayer.motionZ *= speedValue;
            }
        }
    }
}
