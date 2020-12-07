import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('human')
export class HumanEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    born: boolean;

    @Column()
    growing: boolean;

    @Column()
    dead: boolean;

    @Column()
    reborn: boolean;
};