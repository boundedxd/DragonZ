import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class AutoClicker extends Module {
    constructor() {
        super("AutoClicker", 0, Category.COMBAT);
        
        this.lastClickTime = 0;
        this.nextDelay = 0;
        
        Dragon.setmgr.rSetting(this.minCPS = new Setting("Min CPS", this, 8.0, 1.0, 20.0, false));
        Dragon.setmgr.rSetting(this.maxCPS = new Setting("Max CPS", this, 12.0, 1.0, 20.0, false));
        Dragon.setmgr.rSetting(this.clickOnHold = new Setting("Click on Hold", this, true));
        Dragon.setmgr.rSetting(this.autoSprint = new Setting("AutoSprint", this, false));
    }

    onEnable() {
        super.onEnable();
        this.lastClickTime = Date.now();
        this.updateDelay();
    }

    onUpdate() {
        if (!this.isToggled()) return;

        if (this.clickOnHold.isEnabled() && (!this.mc.gameSettings || !this.mc.gameSettings.keyBindAttack.isKeyDown())) {
            return;
        }

        if (Date.now() - this.lastClickTime >= this.nextDelay) {
            try {
                if (this.autoSprint.isEnabled() && this.mc.thePlayer) {
                    this.mc.thePlayer.setSprinting(true);
                }
                
                if (this.mc.clickMouse) {
                    this.mc.clickMouse();
                }
                
                this.lastClickTime = Date.now();
                this.updateDelay();
                
            } catch (e) {
                console.error(e);
            }
        }
    }

    updateDelay() {
        const minVal = this.minCPS.getValDouble();
        const maxVal = this.maxCPS.getValDouble();

        const min = Math.max(1, minVal);
        const max = Math.max(min, maxVal);

        const randomCPS = min + (Math.random() * (max - min));
        
        this.nextDelay = Math.floor(1000.0 / randomCPS);
    }
}
