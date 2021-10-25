import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AlergenosDto } from './create-alegenos.dto';

export class IngredientsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  storesId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  categoryId?: string;

  @ApiProperty()
  @IsNotEmpty()
  supplierId: string;

  @ApiProperty()
  @IsNotEmpty()
  formatoId?: string;

  @ApiProperty()
  presentation?: string;

  @ApiProperty()
  quantity?: number;

  @ApiProperty()
  stockMin?: number;

  @ApiProperty()
  stockMax?: number;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  alergenos?: AlergenosDto;

  @ApiProperty()
  priceUnit?: string;
}
