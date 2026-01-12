import { Module} from '../Module.js';
import { Category } from '../Category.js';

export class FastEat extends Module {
    constructor() {
        super("FastEat", 0, Category.MISC);
    }

    onUpdate() {
        if (this.isToggled() && this.mc && this.mc.thePlayer) {
            if (this.mc.thePlayer.getItemInUse && this.mc.thePlayer.getItemInUse() != null) {
                if (this.mc.thePlayer.getItemInUseDuration() >= 1) {
                    if (this.mc.playerController && this.mc.playerController.onStoppedUsingItem) {
                        this.mc.playerController.onStoppedUsingItem(this.mc.thePlayer);
                    }
                }
            }
        }
    }
}
