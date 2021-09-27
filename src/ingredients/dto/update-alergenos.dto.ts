import { PartialType } from '@nestjs/swagger';
import { AlergenosDto } from './create-alegenos.dto';

export class UpdateAlergenostDto extends PartialType(AlergenosDto) {}
