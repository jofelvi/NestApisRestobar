import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Response } from 'express';
import { IngredientsDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredients.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createIngrentDto: IngredientsDto): Promise<any> {
    return await this.ingredientsService.create(createIngrentDto);
  }

  @Get()
  async findAll(@Res() res: Response): Promise<any> {
    const ingredients = await this.ingredientsService.findAll();
    return res.send(ingredients);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.ingredientsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    return await this.ingredientsService.update(id, updateIngredientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ingredientsService.remove(id);
  }
}
