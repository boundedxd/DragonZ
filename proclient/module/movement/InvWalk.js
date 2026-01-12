import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class InvWalk extends Module {
    constructor() {
        super("invMove", 0, Category.MOVEMENT);
    }

    onEvent(e) {
        if (!this.mc || !this.mc.currentScreen || !this.mc.gameSettings) return;
        
        const GameSettings = this.mc.gameSettings.constructor;
        if (GameSettings && GameSettings.isKeyDown) {
            this.mc.gameSettings.keyBindForward.pressed = GameSettings.isKeyDown(this.mc.gameSettings.keyBindForward);
            this.mc.gameSettings.keyBindBack.pressed = GameSettings.isKeyDown(this.mc.gameSettings.keyBindBack);
            this.mc.gameSettings.keyBindRight.pressed = GameSettings.isKeyDown(this.mc.gameSettings.keyBindRight);
            this.mc.gameSettings.keyBindLeft.pressed = GameSettings.isKeyDown(this.mc.gameSettings.keyBindLeft);
            this.mc.gameSettings.keyBindJump.pressed = GameSettings.isKeyDown(this.mc.gameSettings.keyBindJump);
        }
    }
}
