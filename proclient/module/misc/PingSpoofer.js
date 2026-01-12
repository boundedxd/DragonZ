import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class PingSpoofer extends Module {
    constructor() {
        super("PingSpoofer", 0, Category.MISC);
    }

    onEvent(e) {
        if (this.isToggled() && e.constructor.name === 'EventSendPacket') {
            const packet = e.getPacket();
            if (packet && packet.constructor && packet.constructor.name) {
                const name = packet.constructor.name;
                if (name.includes('KeepAlive') || name.includes('ConfirmTransaction')) {
                    e.setCancelled(true);
                }
            }
        }
    }
}
