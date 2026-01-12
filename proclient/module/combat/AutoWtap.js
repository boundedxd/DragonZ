import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class AutoWtap extends Module {
    constructor() {
        super("AutoWtap", 0, Category.COMBAT);
        this.coolDown = 0;
    }
    
    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            this.coolDown -= 1;
            this.mc.thePlayer.setSprinting(true);
            
            if (this.mc.thePlayer.isSwingInProgress && this.coolDown < 0) {
                this.mc.thePlayer.setSprinting(false);
                this.coolDown = 3;
            }
        }
    }
}
