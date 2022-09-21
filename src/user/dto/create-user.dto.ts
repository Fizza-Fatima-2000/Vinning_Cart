import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {  IsDate, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  // @ApiProperty()
  // @IsString()
  // firstName: string;

  // @ApiProperty()
  // @IsString()
  // lastName: string;

  // @ApiProperty()
  // @IsEmail()
  // email: string;

  // @ApiProperty()
  // @IsString()
  // password: string;

  @ApiProperty()
  @IsString()
  Username: string;

  @ApiProperty()
  @IsEmail()
  Email: string;

  @ApiProperty()
  @IsString()
  Phone_Number: string;

  @ApiProperty()
  @IsString()
  Password: string;

  @ApiProperty()
  @IsString()
  Gender: string;

  @ApiProperty()

  @Type(() => Date)
  @IsDate()
  Date_Of_Birth: Date;
}
