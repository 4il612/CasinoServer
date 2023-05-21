import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { Owner } from 'src/owners/owners.entity';
import { Machine } from './machine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Machine, Owner])],
  providers: [MachineService],
  controllers: [MachineController],
})
export class MachineModule {}
