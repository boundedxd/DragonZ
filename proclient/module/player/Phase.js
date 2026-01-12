import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class Phase extends Module {
    constructor() {
        super("Blink", 0, Category.MOVEMENT);
        this.deltaTime = 0;
        this.startTime = 0;
        this.player = null;
        this.packets = [];
    }

    onEnable() {
        this.startTime = Date.now();
        this.packets = [];
    }

    onEvent(e) {
        if (this.isToggled() && e.constructor.name === 'EventSendPacket') {
            this.packets.push(e.getPacket());
            e.setCancelled(true);
        }
    }

    onDisable() {
        if (this.mc && this.mc.thePlayer && this.mc.thePlayer.sendQueue) {
            for (let packet of this.packets) {
                this.mc.thePlayer.sendQueue.addToSendQueue(packet);
            }
        }
        this.packets = [];
    }
}
