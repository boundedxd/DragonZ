import { ClickGui } from './clickgui/ClickGui.js';
import { CommandManager } from './command/CommandManager.js';
import { ModuleManager } from './module/ModuleManager.js';
import { SettingsManager } from './settings/SettingsManager.js';
import { ArrayList } from './ui/ArrayList.js';
import { DragScreen } from './ui/DragScreen.js';

export class Dragon {
    static name = "Dragon";
    static version = "2.1";
    static creator = "Fatal";
    static instance = new Dragon();
    static arraylist = new ArrayList();
    static moduleManager;
    static cmdManager;
    static clickgui;
    static setmgr;
    static drag;

    static startClient() {
        this.setmgr = new SettingsManager();
        this.moduleManager = new ModuleManager();
        this.cmdManager = new CommandManager();
        this.clickgui = new ClickGui();
        this.drag = new DragScreen();

        if (typeof Display !== 'undefined') {
            Display.setTitle(this.name + " " + this.version + "by " + this.creator);
        }
    }

    static getClickgui() { 
        return this.clickgui; 
    }
    
    static getDragscreen() { 
        return this.drag; 
    }
}
