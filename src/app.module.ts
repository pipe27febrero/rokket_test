import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const database = configService.get<string>('MONGO_DATABASE')
      const host = configService.get<string>('MONGO_HOST')
      const port = configService.get<string>('MONGO_PORT')
      return { uri: `mongodb://${host}:${port}/${database}` }
    }
  }), UsersModule,
    AuthModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
