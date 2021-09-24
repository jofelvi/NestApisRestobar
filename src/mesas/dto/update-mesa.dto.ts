import { PartialType } from '@nestjs/swagger';
import { MesaDto } from './create-mesa.dto';

export class UpdateMesaDto extends PartialType(MesaDto) {}
