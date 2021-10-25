import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: string[];

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly storeId: number;
}
