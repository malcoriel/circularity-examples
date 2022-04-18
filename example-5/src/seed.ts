import { User } from "./entity/User"
import { AppDataSource } from "./data-source"
import { Order } from "./entity/Order";

(async () => {
    try {
        await AppDataSource.initialize();

        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await AppDataSource.manager.save(user);

        const order = new Order();
        order.user = user;
        order.ware = "Wood";
        await AppDataSource.manager.save(order);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
