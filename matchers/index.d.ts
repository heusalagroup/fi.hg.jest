// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { JestPassObject } from "../types/JestPassObject";

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeISODateString(): JestPassObject | Promise<JestPassObject>;
        }
    }
}
