import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AgendaModule } from './agenda/agenda.module';

@Module({
  imports: [DatabaseModule, AgendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
