import EventEmitter from 'events'

export enum Events {
    ServiceA_method = "ServiceA_method",
}


export const Bus = new EventEmitter();
