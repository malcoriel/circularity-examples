import { handlerA } from './handlerA';
import { handlerB } from "./handlerB";

export const route = (action: any) => {
    switch (action.type) {
        case "a":
            handlerA(action);
        case "b":
            handlerB(action);
        default:
            break;
    }
}
