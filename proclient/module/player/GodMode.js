import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class GodMode extends Module {
    constructor() {
        super("GodMode", 0, Category.PLAYER);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.getHealth && this.mc.thePlayer.getHealth() <= 0) {
                if (this.mc.thePlayer.setHealth && this.mc.thePlayer.getMaxHealth) {
                    this.mc.thePlayer.setHealth(this.mc.thePlayer.getMaxHealth());
                }
                if (this.mc.currentScreen) {
                    this.mc.currentScreen = null;
                }
            }
        }
    }
}
