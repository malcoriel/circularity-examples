import { ServiceC } from "./ServiceC";
import { ServiceA } from "./ServiceA";
import { Bus, Events } from "./bus";

Bus.on(Events.ServiceA_method, () => {
    ServiceA.method();
})

setTimeout(() => {
    ServiceA.method();
    ServiceC.method2();
}, 100);
