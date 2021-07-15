import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar" , {length: 50})
    firstname: string;

    @Column("varchar" , {length: 50})
    lastname: string;

    @Column()
    birthdate: Date;

    @Column("varchar" , {length: 50})
    sex: string;

    @Column("varchar" , {length: 50, unique: true})
    username: string;

    @Column()
    @Exclude() // Wont return password if we try to retrieve it from the db
    password: string;
}