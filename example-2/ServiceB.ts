import { ServiceC, ServiceCImpl } from "./ServiceC";

export class ServiceBImpl {
    constructor(private serviceC: ServiceCImpl) {}
    method() {
        this.serviceC.method1();
    }
}

export const ServiceB: ServiceBImpl = new ServiceBImpl(ServiceC);
