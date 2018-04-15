import { StandardAdditions } from "./fixtures/StandardAdditions/output";

export interface Application extends StandardAdditions {
    id(): string;
}

declare global {
    export function Application(name: string): Application
}
