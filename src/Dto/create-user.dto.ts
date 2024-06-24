import { IsString, IsInt, IsEmail, Min, Max, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name?: string;

  @IsInt()
  @Min(1)
  @Max(120)
  @IsOptional()
  readonly age?: number;

  @IsEmail()
  @IsOptional()
  readonly email?: string;
}