import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class KillAura extends Module {
    constructor() {
        super("KillAura", 0, Category.COMBAT);
        
        this.target = null;
        this.lastAttackTime = 0;
        this.nextAttackDelay = 0;
        
        Dragon.setmgr.rSetting(this.attackRange = new Setting("Range", this, 3.1, 3.0, 6.0, false));
        Dragon.setmgr.rSetting(this.rotationRange = new Setting("Look Range", this, 6.0, 3.0, 8.0, false));
        Dragon.setmgr.rSetting(this.minCPS = new Setting("Min CPS", this, 9.0, 1.0, 20.0, false));
        Dragon.setmgr.rSetting(this.maxCPS = new Setting("Max CPS", this, 13.0, 1.0, 20.0, false));
        Dragon.setmgr.rSetting(this.autoBlock = new Setting("AutoBlock", this, true));
    }

    onDisable() {
        super.onDisable();
        this.target = null;
        if (this.mc && this.mc.thePlayer && this.mc.gameSettings && this.mc.gameSettings.keyBindUseItem.isKeyDown()) {
            this.mc.gameSettings.keyBindUseItem.pressed = false;
        }
    }

    onUpdate() {
        if (!this.isToggled()) return;

        this.updateTarget();

        if (this.target != null) {
            this.faceEntity(this.target);

            if (this.mc.thePlayer.getDistanceToEntity(this.target) <= this.attackRange.getValDouble()) {
                this.attackTarget(this.target);
            } else {
                this.stopBlocking();
            }
        } else {
            this.stopBlocking();
        }
    }

    updateTarget() {
        if (!this.mc || !this.mc.theWorld) return;
        
        const entities = this.mc.theWorld.loadedEntityList || [];
        let closestDist = this.rotationRange.getValDouble();
        this.target = null;

        for (let e of entities) {
            if (e === this.mc.thePlayer) continue;
            if (!e.isEntityAlive || !e.isEntityAlive()) continue;
            
            const dist = this.mc.thePlayer.getDistanceToEntity(e);

            if (dist <= closestDist) {
                closestDist = dist;
                this.target = e;
            }
        }
    }

    attackTarget(entity) {
        if (Date.now() - this.lastAttackTime >= this.nextAttackDelay) {
            if (this.mc.thePlayer.swingItem) this.mc.thePlayer.swingItem();
            if (this.mc.playerController && this.mc.playerController.attackEntity) {
                this.mc.playerController.attackEntity(this.mc.thePlayer, entity);
            }

            this.lastAttackTime = Date.now();
            this.calculateNextDelay();

            if (this.autoBlock.isEnabled() && this.mc.thePlayer.getHeldItem && this.mc.thePlayer.getHeldItem() != null) {
                if (this.mc.playerController && this.mc.playerController.sendUseItem) {
                    this.mc.playerController.sendUseItem(this.mc.thePlayer, this.mc.theWorld, this.mc.thePlayer.getHeldItem());
                }
            }
        }
    }

    stopBlocking() {
        if (this.autoBlock.isEnabled() && this.mc && this.mc.gameSettings && this.mc.gameSettings.keyBindUseItem.isKeyDown()) {
            this.mc.gameSettings.keyBindUseItem.pressed = false;
        }
    }

    calculateNextDelay() {
        const minVal = this.minCPS.getValDouble();
        const maxVal = this.maxCPS.getValDouble();

        const min = Math.max(1, minVal);
        const max = Math.max(min, maxVal);

        const randomCPS = min + (Math.random() * (max - min));
        this.nextAttackDelay = Math.floor(1000.0 / randomCPS);
    }

    faceEntity(entity) {
        const rotations = this.getRotationsNeeded(entity);
        if (rotations != null) {
            this.mc.thePlayer.rotationYaw = rotations[0];
            this.mc.thePlayer.rotationPitch = rotations[1] + 1.0;
        }
    }

    getRotationsNeeded(entity) {
        if (entity == null || !this.mc || !this.mc.thePlayer) return null;

        const diffX = entity.posX - this.mc.thePlayer.posX;
        const diffZ = entity.posZ - this.mc.thePlayer.posZ;
        let diffY;

        if (entity.getEyeHeight) {
            diffY = entity.posY + entity.getEyeHeight() - (this.mc.thePlayer.posY + this.mc.thePlayer.getEyeHeight());
        } else {
            diffY = (entity.boundingBox.minY + entity.boundingBox.maxY) / 2.0 - (this.mc.thePlayer.posY + this.mc.thePlayer.getEyeHeight());
        }

        const dist = Math.sqrt(diffX * diffX + diffZ * diffZ);
        const yaw = (Math.atan2(diffZ, diffX) * 180.0 / Math.PI) - 90.0;
        const pitch = -(Math.atan2(diffY, dist) * 180.0 / Math.PI);
        
        return [
            this.mc.thePlayer.rotationYaw + this.wrapAngleTo180(yaw - this.mc.thePlayer.rotationYaw),
            this.mc.thePlayer.rotationPitch + this.wrapAngleTo180(pitch - this.mc.thePlayer.rotationPitch)
        ];
    }

    wrapAngleTo180(angle) {
        angle = angle % 360;
        if (angle >= 180) angle -= 360;
        if (angle < -180) angle += 360;
        return angle;
    }
}
