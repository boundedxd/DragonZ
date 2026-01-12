import { Criticals } from './combat/Criticals.js';
import { AutoClicker } from './combat/AutoClicker.js';
import { ZenticAura } from './combat/ZenticAura.js';
import { KillAura } from './combat/KillAura.js';
import { FastBow } from './combat/FastBow.js';
import { AntiCobweb } from './combat/AntiCobweb.js';
import { AutoWtap } from './combat/AutoWtap.js';
import { NoHurtCam } from './combat/NoHurtCam.js';
import { Aimbot } from './combat/Aimbot.js';

import { AutoSprint } from './movement/AutoSprint.js';
import { NoFall } from './movement/NoFall.js';
import { Speed } from './movement/Speed.js';
import { Glide } from './movement/Glide.js';
import { StepHight } from './movement/StepHight.js';
import { JetPack } from './movement/JetPack.js';
import { Parkour } from './movement/Parkour.js';
import { Spider } from './movement/Spider.js';
import { Dolphin } from './movement/Dolphin.js';
import { AutoWalk } from './movement/AutoWalk.js';
import { Bhop } from './movement/Bhop.js';
import { InvWalk } from './movement/InvWalk.js';
import { Scaffold } from './movement/Scaffold.js';
import { SafeWalk } from './movement/SafeWalk.js';

import { AllowFly } from './player/AllowFly.js';
import { GodMode } from './player/GodMode.js';
import { Phase } from './player/Phase.js';
import { FastPlace } from './player/FastPlace.js';
import { FreeCam } from './player/FreeCam.js';
import { ShrekScript } from './player/ShrekScript.js';

import { Fullbright } from './render/Fullbright.js';
import { Xray } from './render/Xray.js';
import { StorageEsp } from './render/StorageEsp.js';
import { PlayerEsp } from './render/PlayerEsp.js';
import { MobEsp } from './render/MobEsp.js';
import { ClickGui } from './render/ClickGui.js';
import { ItemEsp } from './render/ItemEsp.js';
import { Nametags } from './render/Nametags.js';
import { Trails } from './render/Trails.js';
import { NoWeather } from './render/NoWeather.js';
import { Radar } from './render/Radar.js';

import { ArmorStats } from './hud/ArmorStats.js';
import { Keystrokes } from './hud/Keystrokes.js';
import { Fps } from './hud/Fps.js';
import { TargetHud } from './hud/TargetHud.js';
import { VapeOverlay } from './hud/VapeOverlay.js';
import { Drag } from './hud/Drag.js';
import { CPS } from './hud/CPS.js';
import { PotionHUD } from './hud/PotionHUD.js';
import { Info } from './hud/Info.js';
import { ComboCounter } from './hud/ComboCounter.js';

import { SpeedMine } from './misc/SpeedMine.js';
import { AutoRespawn } from './misc/AutoRespawn.js';
import { ServerCrasher } from './misc/ServerCrasher.js';
import { FastEat } from './misc/FastEat.js';
import { Dupe } from './misc/Dupe.js';
import { PingSpoofer } from './misc/PingSpoofer.js';
import { Timer } from './misc/Timer.js';

import { ArrayList } from '../ui/ArrayList.js';

export class ModuleManager {
    static mods = [];

    constructor() {
        ModuleManager.mods = [];
        
        this.newMod(new Criticals());
        this.newMod(new AutoClicker());
        this.newMod(new ZenticAura());
        this.newMod(new KillAura());
        this.newMod(new FastBow());
        this.newMod(new AntiCobweb());
        this.newMod(new AutoWtap());
        this.newMod(new NoHurtCam());
        this.newMod(new Aimbot());

        this.newMod(new AutoSprint());
        this.newMod(new NoFall());
        this.newMod(new Speed());
        this.newMod(new Glide());
        this.newMod(new StepHight());
        this.newMod(new JetPack());
        this.newMod(new Parkour());
        this.newMod(new Spider());
        this.newMod(new Dolphin());
        this.newMod(new AutoWalk());
        this.newMod(new Bhop());
        this.newMod(new InvWalk());
        this.newMod(new Scaffold());
        this.newMod(new SafeWalk());

        this.newMod(new AllowFly());
        this.newMod(new GodMode());
        this.newMod(new Phase());
        this.newMod(new FastPlace());
        this.newMod(new FreeCam());
        this.newMod(new ShrekScript());

        this.newMod(new Fullbright());
        this.newMod(new Xray());
        this.newMod(new StorageEsp());
        this.newMod(new PlayerEsp());
        this.newMod(new MobEsp());
        this.newMod(new ClickGui());
        this.newMod(new ItemEsp());
        this.newMod(new Nametags());
        this.newMod(new ArmorStats());
        this.newMod(new Trails());
        this.newMod(new Keystrokes());
        this.newMod(new Fps());
        this.newMod(new TargetHud());
        this.newMod(new NoWeather());
        this.newMod(new VapeOverlay());
        this.newMod(new Drag());
        this.newMod(new ArrayList());
        this.newMod(new Radar());
        this.newMod(new CPS());
        this.newMod(new PotionHUD());
        this.newMod(new Info());
        this.newMod(new ComboCounter());

        this.newMod(new SpeedMine());
        this.newMod(new AutoRespawn());
        this.newMod(new ServerCrasher());
        this.newMod(new FastEat());
        this.newMod(new Dupe());
        this.newMod(new PingSpoofer());
        this.newMod(new Timer());
    }

    newMod(m) {
        ModuleManager.mods.push(m);
    }

    static getModules() {
        return ModuleManager.mods;
    }

    static onUpdate() {
        for (let m of ModuleManager.mods) {
            m.onUpdate();
        }
    }

    static onRender() {
        for (let m of ModuleManager.mods) {
            m.onRender();
        }
    }

    static onKey(k) {
        for (let m of ModuleManager.mods) {
            if (m.getKey() === k) {
                m.toggle();
            }
        }
    }

    modsInCategory(c) {
        let inCategory = [];
        for (let m of ModuleManager.mods) {
            if (m.category === c) {
                inCategory.push(m);
            }
        }
        return inCategory;
    }

    onEvent(e) {
        for (let m of ModuleManager.mods) {
            if (m.isToggled()) {
                m.onEvent(e);
            }
        }
    }

    addChatMessage(message) {
        console.log("[Dragon] " + message);
        if (typeof Minecraft !== 'undefined' && Minecraft.getMinecraft && Minecraft.getMinecraft().thePlayer) {
            const mc = Minecraft.getMinecraft();
            if (mc.thePlayer.addChatMessage) {
                mc.thePlayer.addChatMessage(message);
            }
        }
    }
}
