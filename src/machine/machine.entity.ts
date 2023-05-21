import { ApiProperty } from '@nestjs/swagger';
import { Owner } from 'src/owners/owners.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Machine {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @ManyToOne(() => Owner, (owner) => owner.machines)
  owner: Owner;
}
