import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class ShrekScript extends Module {
    constructor() {
        super("ShrekScript", 0, Category.PLAYER);
    }

    onEnable() {
        if (!this.mc || !this.mc.thePlayer) return;
        
        for (let i = 0; i < 14; i++) {
            if (this.mc.thePlayer.sendChatMessage) {
                this.mc.thePlayer.sendChatMessage("");
            }
        }
    }
}
