import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MesasService } from './mesas.service';
import { MesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Controller('mesas')
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createMesaDto: MesaDto) {
    return this.mesasService.create(createMesaDto);
  }

  @Get()
  findAll() {
    return this.mesasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesasService.update(id, updateMesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesasService.remove(id);
  }
}
