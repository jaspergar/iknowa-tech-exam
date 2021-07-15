import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Patient{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar" , {length: 50})
    firstname: string;

    @Column("varchar" , {length: 50})
    lastname: string;

    @Column()
    birthdate: Date;

    @Column("varchar" , {length: 50})
    gender: string;

    @Column("varchar" , {length: 50})
    address: string;

    @Column()
    temperature: number; 

    @DeleteDateColumn()
    deletedAt?: Date;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}