import { ServiceC } from "./ServiceC";
import { ServiceA } from "./ServiceA";
import "./init-locator";

setTimeout(() => {
    ServiceA.method();
    ServiceC.method2();
}, 100);
