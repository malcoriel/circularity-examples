import { ServiceB, ServiceBImpl } from "./ServiceB";

export class ServiceAImpl {
    constructor(private serviceB: ServiceBImpl) {
    }

    method() {
        this.serviceB.method();
    }
}

export const ServiceA: ServiceAImpl = new ServiceAImpl(ServiceB);


