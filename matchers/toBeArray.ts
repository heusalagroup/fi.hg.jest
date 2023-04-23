// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainArray, isArray } from "../../core/types/Array";

expect.extend(
    {
        toBeArray (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isArray(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a valid ISO date string`);
            } else {
                return createJestPassObject(false, explainArray(received));
            }
        }
    }
);
