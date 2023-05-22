// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { JestPassObject } from "../types/JestPassObject";

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeIsoDateStringWithMilliseconds(): JestPassObject | Promise<JestPassObject>;
            toBeIsoDateString(): JestPassObject | Promise<JestPassObject>;
            toBeNonEmptyString(): JestPassObject | Promise<JestPassObject>;
            toBeString(): JestPassObject | Promise<JestPassObject>;
            toBeNumber(): JestPassObject | Promise<JestPassObject>;
            toBeBoolean(): JestPassObject | Promise<JestPassObject>;
            toBeFunction(): JestPassObject | Promise<JestPassObject>;
            toBeArray(): JestPassObject | Promise<JestPassObject>;
            toBeStringArray(): JestPassObject | Promise<JestPassObject>;
            toBeNumberArray(): JestPassObject | Promise<JestPassObject>;
            toBeRegularObject(): JestPassObject | Promise<JestPassObject>;
        }
    }
}
