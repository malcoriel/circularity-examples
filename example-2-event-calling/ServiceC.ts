import { Bus, Events } from "./bus";

export class ServiceCImpl {
    constructor() {}
    method1() {
        console.log("service C called");
    }
    method2() {
        Bus.emit(Events.ServiceA_method)
    }
}

export const ServiceC: ServiceCImpl = new ServiceCImpl();
