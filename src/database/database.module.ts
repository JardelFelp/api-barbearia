import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agenda } from 'src/agenda/entities/agenda.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-summer-mouse-a41jd3sq-pooler.us-east-1.aws.neon.tech',
      port: 5432,
      username: 'default',
      password: 'YvMHs3Uub5zC',
      database: 'verceldb',
      synchronize: true,
      entities: [Agenda],
      ssl: true,
    }),
  ],
})
export class DatabaseModule { }
