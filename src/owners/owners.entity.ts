import { ApiProperty } from '@nestjs/swagger';
import { Machine } from 'src/machine/machine.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @OneToMany(() => Machine, (machine) => machine.owner)
  machines: Machine[];
}
