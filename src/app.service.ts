import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API de agendamento de BARBEARIAA - By Zanon! CORS';
  }
}
