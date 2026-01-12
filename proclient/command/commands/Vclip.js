import { Dragon } from '../../Dragon.js';
import { Command } from '../Command.js';

export class Vclip extends Command {
    constructor() {
        super("Vclip", "Virtual clips you through shit", "Vclip <distance>", "vclip");
    }

    onCommand(args, command) {
        if (args.length === 0) {
            if (Dragon.moduleManager && Dragon.moduleManager.addChatMessage) {
                Dragon.moduleManager.addChatMessage(".vclip <value> ");
            }
            return;
        }
        const distance = parseFloat(args[0]);
        if (typeof Minecraft !== 'undefined' && Minecraft.getMinecraft && Minecraft.getMinecraft().thePlayer) {
            Minecraft.getMinecraft().thePlayer.getEntityBoundingBox().offsetAndUpdate(0, distance, 0);
            if (Dragon.moduleManager && Dragon.moduleManager.addChatMessage) {
                Dragon.moduleManager.addChatMessage("Vcliped " + args[0] + "!");
            }
        }
    }
}
