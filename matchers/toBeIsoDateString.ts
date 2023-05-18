// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainIsoDateString, isIsoDateString } from "../../core/types/Date";

expect.extend(
    {
        toBeIsoDateString (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isIsoDateString(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a valid ISO date string`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a valid ISO date string: ${explainIsoDateString(received)}`);
            }
        }
    }
);
