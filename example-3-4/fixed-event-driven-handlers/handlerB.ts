import { cycle } from "./cycleSource";
import { bus } from "./bus";

export const handlerB = (event: any) => {
    console.log(cycle);
}

bus.on("b", handlerB)
