import { Column } from '@nx-angular-boilerplate/utils';
import { autoserializeAs } from 'cerializr';

export class Car {
  @autoserializeAs(Number)
  @Column()
  id!: number;
  @autoserializeAs(String)
  @Column()
  maker!: string;
  @autoserializeAs(String)
  @Column({
    canSort: true,
    header: 'Model',
  })
  model!: string;
  @autoserializeAs(Date)
  @Column({
    header: 'Year of production',
    order: -1,
    canSort: true,
  })
  year!: Date;
}
