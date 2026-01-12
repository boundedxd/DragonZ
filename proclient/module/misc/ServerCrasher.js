import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class ServerCrasher extends Module {
    constructor() {
        super("ServerCrasher", 0, Category.MISC);
    }

    onEnable() {
        if (this.mc && this.mc.thePlayer && this.mc.thePlayer.sendQueue) {
            console.warn("ServerCrasher enabled - attempting to crash server");
        }
    }
}
