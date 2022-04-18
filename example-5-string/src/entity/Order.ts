import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ware: string

    @Column()
    userId: number

    @ManyToOne("User")
    user: unknown;
}
