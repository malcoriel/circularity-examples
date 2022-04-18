import { locator } from "./locator";
import { ServiceAInterface } from "./ServiceA.types";

export class ServiceCImpl {
    constructor() {}
    method1() {
        console.log("service C called");
    }

    getServiceA(): ServiceAInterface {
        return locator.getServiceA();
    }

    method2() {
        this.getServiceA().method();
    }
}

export const ServiceC: ServiceCImpl = new ServiceCImpl();
