import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Owner } from './owners.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) {}

  async findOwnerByID(ownerId: number): Promise<Owner> {
    const options: FindOneOptions<Owner> = {
      where: { id: ownerId },
    };
    return this.ownerRepository.findOne(options);
  }
}
