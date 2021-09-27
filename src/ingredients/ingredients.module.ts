import { MiddlewareConsumer, Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mesa, MesaSchema } from '../mesas/schemas/mesa.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants/constanst';
import { CheckTokenMiddleware } from '../middleware/checkTokenMiddleware';
import { Ingredient, IngredientSchema } from './schemas/ingredint.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckTokenMiddleware).forRoutes('ingredients');
  }
}
