import { Dragon } from '../../Dragon.js';
import { Command } from '../Command.js';

export class Help extends Command {
    constructor() {
        super("Help", "Shows all commands", "Help", "help");
    }

    onCommand(args, command) {
        if (args.length === 0) {
            if (Dragon.moduleManager && Dragon.moduleManager.addChatMessage) {
                Dragon.moduleManager.addChatMessage("---DragonX Commands---");
                Dragon.moduleManager.addChatMessage(".help - shows this");
                Dragon.moduleManager.addChatMessage(".vclip <distance> - vclips you through blocks");
                Dragon.moduleManager.addChatMessage("----------------------");
            }
            return;
        }
    }
}
