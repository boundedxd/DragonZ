import { Dragon } from '../Dragon.js';
import { Help } from './commands/Help.js';
import { Vclip } from './commands/Vclip.js';

export class CommandManager {
    static commands = [];
    static prefix = ".";

    constructor() {
        this.setup();
    }

    setup() {
        CommandManager.commands.push(new Vclip());
        CommandManager.commands.push(new Help());
    }

    static getCommands() {
        return CommandManager.commands;
    }

    static handleChat(event) {
        let message = event.getMessage();

        if (!message.startsWith(CommandManager.prefix))
            return;

        event.setCancelled(true);

        message = message.substring(CommandManager.prefix.length);

        let foundCommand = false;

        if (message.split(" ").length > 0) {
            let commandName = message.split(" ")[0];

            for (let c of CommandManager.commands) {
                if (c.aliases.includes(commandName) || c.name.toLowerCase() === commandName.toLowerCase()) {
                    let args = message.split(" ").slice(1);
                    c.onCommand(args, message);
                    foundCommand = true;
                    break;
                }
            }
        }
        if (!foundCommand) {
            if (Dragon.moduleManager && Dragon.moduleManager.addChatMessage) {
                Dragon.moduleManager.addChatMessage("command not found!");
            }
        }
    }
}
