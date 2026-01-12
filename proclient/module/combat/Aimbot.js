import { Dragon } from '../../Dragon.js';
import { Setting } from '../../settings/Setting.js';
import { Category } from '../Category.js';
import { Module } from '../Module.js';

export class Aimbot extends Module {
    constructor() {
        super("Aimbot", 0, Category.COMBAT);
        
        Dragon.setmgr.rSetting(this.range = new Setting("Range", this, 4.5, 3.0, 6.0, false));
        Dragon.setmgr.rSetting(this.speed = new Setting("Speed", this, 5.0, 1.0, 10.0, false));
        Dragon.setmgr.rSetting(this.clickOnly = new Setting("Click Only", this, false));
    }

    onUpdate() {
        if (!this.isToggled()) return;
        
        if (this.clickOnly.isEnabled() && (!this.mc.gameSettings || !this.mc.gameSettings.keyBindAttack.isKeyDown())) {
            return;
        }

        const target = this.getClosestEntity();
        if (target) {
            this.faceEntity(target);
        }
    }

    getClosestEntity() {
        if (!this.mc.theWorld) return null;
        
        let closestEntity = null;
        let closestDistance = this.range.getValDouble();

        const entities = this.mc.theWorld.loadedEntityList || [];
        for (let entity of entities) {
            if (entity === this.mc.thePlayer) continue;
            if (!entity.isEntityAlive || !entity.isEntityAlive()) continue;
            
            const distance = this.mc.thePlayer.getDistanceToEntity(entity);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEntity = entity;
            }
        }
        
        return closestEntity;
    }

    faceEntity(entity) {
        const player = this.mc.thePlayer;
        if (!player || !entity) return;

        const dx = entity.posX - player.posX;
        const dy = entity.posY + entity.getEyeHeight() - (player.posY + player.getEyeHeight());
        const dz = entity.posZ - player.posZ;

        const dist = Math.sqrt(dx * dx + dz * dz);
        const yaw = Math.atan2(dz, dx) * 180 / Math.PI - 90;
        const pitch = -(Math.atan2(dy, dist) * 180 / Math.PI);

        const speedFactor = this.speed.getValDouble() / 10.0;
        player.rotationYaw += this.wrapAngleTo180(yaw - player.rotationYaw) * speedFactor;
        player.rotationPitch += (pitch - player.rotationPitch) * speedFactor;
    }

    wrapAngleTo180(angle) {
        angle = angle % 360;
        if (angle >= 180) angle -= 360;
        if (angle < -180) angle += 360;
        return angle;
    }
}
