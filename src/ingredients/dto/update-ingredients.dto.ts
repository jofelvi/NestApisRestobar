import { PartialType } from '@nestjs/swagger';
import { IngredientsDto } from './create-ingredient.dto';

export class UpdateIngredientDto extends PartialType(IngredientsDto) {}
