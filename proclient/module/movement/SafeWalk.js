import { Module } from '../Module.js';
import { Category } from '../Category.js';

export class SafeWalk extends Module {
    constructor() {
        super("SafeWalk", 0, Category.MOVEMENT);
    }

    onEvent(e) {
        if (this.isToggled() && e.constructor.name === 'EventSafewalk') {
            e.setCancelled(true);
        }
    }
}
