import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Machine } from './machine.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MachineService extends TypeOrmCrudService<Machine> {
  constructor(@InjectRepository(Machine) repo) {
    super(repo);
  }
}
