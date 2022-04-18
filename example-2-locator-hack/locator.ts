import { ServiceAInterface } from "./ServiceA.types";

export const locatorStorage: any = {};

export const locator = {
    getServiceA(): ServiceAInterface {
        return locatorStorage["ServiceAInterface"] as ServiceAInterface;
    }
}
