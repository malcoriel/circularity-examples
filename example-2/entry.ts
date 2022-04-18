import { ServiceC } from "./ServiceC";
import { ServiceA } from "./ServiceA";

setTimeout(() => {
    ServiceA.method();
    ServiceC.method2();
}, 100);
