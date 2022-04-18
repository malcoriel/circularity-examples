import { ServiceA, ServiceAImpl } from "./ServiceA";

export class ServiceC2Impl {
    constructor(private serviceA: ServiceAImpl) {}
    method2() {
        this.serviceA.method();
    }
}

export const ServiceC2: ServiceC2Impl = new ServiceC2Impl(ServiceA);
