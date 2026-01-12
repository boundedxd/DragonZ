import { Dragon } from '../Dragon.js';

export class Module {
    constructor(nm, k, c, blatant = false) {
        this.mc = typeof Minecraft !== 'undefined' ? Minecraft.getMinecraft() : null;
        if (blatant) {
            this.blatant = true;
            this.name = "⚠ " + nm;
        } else {
            this.name = nm;
        }
        this.key = k;
        this.category = c;
        this.toggled = false;
    }

    toggle() {
        this.toggled = !this.toggled;
        if (this.toggled) {
            this.onEnable();
        } else {
            this.onDisable();
        }
    }

    onEnable() { }
    onDisable() { }
    onUpdate() { }
    onRender() { }

    addAll(...settings) {
        for (let s of settings) {
            Dragon.setmgr.rSetting(s);
        }
    }

    onEvent(e) {
        
    }

    getMc() {
        return this.mc;
    }

    setMc(mc) {
        this.mc = mc;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getKey() {
        return this.key;
    }

    setKey(key) {
        this.key = key;
    }

    isToggled() {
        return this.toggled;
    }

    setToggled(toggled) {
        this.toggled = toggled;
    }

    player() {
        return this.mc ? this.mc.thePlayer : null;
    }

    playerController() {
        return this.mc ? this.mc.playerController : null;
    }

    world() {
        return this.mc ? this.mc.theWorld : null;
    }

    sendPacket(p) {
        if (this.player()) {
            this.player().sendQueue.addToSendQueue(p);
        }
    }
}
