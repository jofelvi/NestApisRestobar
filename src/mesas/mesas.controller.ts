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
  Res,
} from '@nestjs/common';
import { MesasService } from './mesas.service';
import { MesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { Response } from 'express';

@Controller('mesas')
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createMesaDto: MesaDto): Promise<any> {
    return await this.mesasService.create(createMesaDto);
  }

  @Get()
  async findAll(@Res() res: Response): Promise<any> {
    try {
      res.header({ access_token: 'access_token' });
      const mesas = await this.mesasService.findAll();
      return res.send(mesas);
    } catch (e) {
      return { error: 'error' };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.mesasService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMesaDto: UpdateMesaDto) {
    return await this.mesasService.update(id, updateMesaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.mesasService.remove(id);
  }
}
