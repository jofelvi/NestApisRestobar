import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AlergenosDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  gluten: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  crustáceos: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  huevos: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  pescado: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  cacahuete: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  soja: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  leche: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  fCascara: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  apio: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  mostaza: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  sesamo: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  altramuces: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  sulfitos: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  moluscos: boolean;
}
