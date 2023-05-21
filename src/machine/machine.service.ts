import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Machine } from './machine.entity';
import { Owner } from 'src/owners/owners.entity';
import { CreateMachineDto } from './machine.dto';

@Injectable()
export class MachineService {
  constructor(
    @InjectRepository(Machine)
    private machineRepository: Repository<Machine>,
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) {}

  async createMachine(machineDto: CreateMachineDto): Promise<Machine> {
    const options: FindOneOptions<Owner> = {
      where: { id: machineDto.ownerId },
    };
    const owner = await this.ownerRepository.findOne(options);
    if (!owner) {
      throw new NotFoundException('Owner not found');
    }

    const machine = this.machineRepository.create({
      ...machineDto,
      owner,
    });

    return this.machineRepository.save(machine);
  }
}
