import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class StepHight extends Module {
    constructor() {
        super("StepHight", 0, Category.MOVEMENT);
        Dragon.setmgr.rSetting(this.height = new Setting("Height", this, 1.0, 0.5, 10.0, false));
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            this.mc.thePlayer.stepHeight = this.height.getValDouble();
        }
    }

    onDisable() {
        if (this.mc && this.mc.thePlayer) {
            this.mc.thePlayer.stepHeight = 0.5;
        }
    }
}
