import { ServiceAImpl } from "./ServiceA";
import { ServiceB } from "./ServiceB";
import { locatorStorage } from "./locator";

locatorStorage["ServiceAInterface"] = new ServiceAImpl(ServiceB);
