import { ServiceB, ServiceBImpl } from "./ServiceB";
import { ServiceAInterface } from "./ServiceA.types";

export class ServiceAImpl implements ServiceAInterface {
    constructor(private serviceB: ServiceBImpl) {
    }

    method() {
        this.serviceB.method();
    }
}

export const ServiceA: ServiceAImpl = new ServiceAImpl(ServiceB);
