import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class SpeedMine extends Module {
    constructor() {
        super("SpeedMine", 0, Category.MISC);
        Dragon.setmgr.rSetting(this.speed = new Setting("Speed", this, 1.5, 0.5, 5.0, false));
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.playerController) {
            const speedValue = this.speed.getValDouble();
            this.mc.playerController.blockHitDelay = 0;
            if (this.mc.playerController.curBlockDamageMP) {
                this.mc.playerController.curBlockDamageMP *= speedValue;
            }
        }
    }
}
