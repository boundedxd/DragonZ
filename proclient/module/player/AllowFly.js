import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class AllowFly extends Module {
    constructor() {
        super("Fly", 0, Category.PLAYER, true);
        this.mode = new Setting("Fly Mode", this, "Vanilla", "Watchdog", "Viper");
        this.addAll(this.mode);
    }

    onUpdate() {
        const mode = Dragon.setmgr.getSettingByName("Fly Mode").getMode();
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (mode.toLowerCase() === "vanilla") {
                this.mc.thePlayer.capabilities.isFlying = true;
                this.mc.thePlayer.capabilities.allowFlying = true;
                this.mc.thePlayer.capabilities.setFlySpeed(0.05);
            }
        }
    }

    onDisable() {
        if (this.mc && this.mc.thePlayer) {
            this.mc.thePlayer.capabilities.isFlying = false;
            this.mc.thePlayer.capabilities.allowFlying = false;
        }
    }
}
