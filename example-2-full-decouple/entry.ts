import { ServiceA } from "./ServiceA";
import { ServiceC1 } from "./ServiceC1";

setTimeout(() => {
    ServiceA.method();
    ServiceC1.method1();
}, 100);

