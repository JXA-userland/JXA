import { StandardAdditions } from "./fixtures/StandardAdditions/output";
import { SystemEvents,StandardAdditions} from "./fixtures/System Events/output";

export interface Application extends StandardAdditions {
    id(): string;
}

declare global {
    export function Application(name: string): Application
    export function SystemEvents(name: string): SystemEvents
}

Application("").currentDate();
