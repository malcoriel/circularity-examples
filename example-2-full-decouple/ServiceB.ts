import { ServiceC1, ServiceC1Impl } from "./ServiceC1";

export class ServiceBImpl {
    constructor(private serviceC: ServiceC1Impl) {}
    method() {
        this.serviceC.method1();
    }
}

export const ServiceB: ServiceBImpl = new ServiceBImpl(ServiceC1);
