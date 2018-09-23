import { EventEvening } from "./event.evening";

export interface Schedule{
    version: string;
    events: EventEvening[];
}