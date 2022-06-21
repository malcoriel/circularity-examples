import { bus } from "./fixed-event-driven-handlers/bus";
import { handlerA } from "./fixed-event-driven-handlers/handlerA";
import { handlerB } from "./fixed-event-driven-handlers/handlerB";

bus.on("a", handlerA);
bus.on("b", handlerB);

let action = {type: 'a'};
bus.emit(action.type, action);
