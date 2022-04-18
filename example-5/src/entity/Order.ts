import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ware: string

    @Column()
    userId: number

    @ManyToOne(type => User)
    user: User;
}
