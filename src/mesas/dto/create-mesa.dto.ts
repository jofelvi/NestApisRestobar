import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MesaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sector: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  comenzales: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  storesID: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  numberTable: number;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  timeFrom?: string;

  @ApiProperty()
  reserved?: boolean;

  @ApiProperty()
  invoiceAmount?: number;

  @ApiProperty()
  invoiceId?: string;
}
