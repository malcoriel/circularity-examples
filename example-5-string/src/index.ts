import { User } from "./entity/User"
import { AppDataSource } from "./data-source"
import { Order } from "./entity/Order";
import * as util from 'util';

(async () => {
    try {
        await AppDataSource.initialize();
        const users = await AppDataSource.manager.find(User)
        console.log("Loaded users: ", util.inspect(users, {depth: 4}))

        const orders = await AppDataSource.manager.find(Order)
        console.log("Loaded orders: ", orders)

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
