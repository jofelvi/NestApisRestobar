import { PartialType } from '@nestjs/swagger';
import { StoreDto } from './create-store.dto';

export class UpdateStoreDto extends PartialType(StoreDto) {}
