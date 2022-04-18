import { ServiceA, ServiceAImpl } from "./ServiceA";

export class ServiceCImpl {
    constructor(private serviceA: ServiceAImpl) {}
    method1() {
        console.log("service C called");
    }
    method2() {
        this.serviceA.method();
    }
}

export const ServiceC: ServiceCImpl = new ServiceCImpl(ServiceA);
