import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { FilterAgendaDto } from './dto/filter-agenda.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Agenda } from './entities/agenda.entity';

@Injectable()
export class AgendaService {
  constructor(
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>,
  ) { }

  async create(createAgendaDto: CreateAgendaDto) {
    const alreadyExist = await this.agendaRepository.find({
      where: {
        data: createAgendaDto.data,
        barbeiro: createAgendaDto.barbeiro,
        horario: createAgendaDto.horario,
      },
    });

    if (alreadyExist.length) {
      throw new HttpException('Horário já reservado!', HttpStatus.CONFLICT);
    }

    return this.agendaRepository.save(createAgendaDto);
  }

  filter(params: FilterAgendaDto) {
    return this.agendaRepository.find({
      where: {
        data: params.data,
        barbeiro: params.barbeiro,
      },
    });
  }
}
