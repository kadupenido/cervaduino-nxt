import { FermenterDto } from './fermenter.dto';
import { TankDto } from './tank.dto';

export class EquipamentDto {
    hlt: TankDto;
    mlt: TankDto;
    bk: TankDto;
    fermenter: FermenterDto
}