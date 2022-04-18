export class ServiceC1Impl {
    method1() {
        console.log("service C called");
    }

}

export const ServiceC1: ServiceC1Impl = new ServiceC1Impl();
