import { Controller, Get, Param } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { Weapon } from './weapon.interface';

@Controller('weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  /*
   * Get all weapons
   */
  @Get()
  async get(): Promise<Weapon[]> {
    return this.weaponService.get();
  }

  /*
   * Get weapon by name
   */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<Weapon[]> {
    return this.weaponService.getByName(name);
  }

  /*
   * Get weapon by id
   */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Weapon> {
    return this.weaponService.getById(id);
  }

  /*
  * Get weapons by category
  */
 @Get('/category/:category([A-Za-z_]+)')
 async getByCategory(@Param('category') category: string): Promise<Weapon[]> {
   return this.weaponService.getByCategory(category);
 }

 /*
 * Get weapons by weight category
 */
@Get('weightCategory/:category([A-Za-z]+)')
async getByWeightCategory(@Param('category') category: string): Promise<Weapon[]> {
  return this.weaponService.getByWeightCategory(category);
}
}
