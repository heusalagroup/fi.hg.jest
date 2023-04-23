// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainNumber, isNumber } from "../../core/types/Number";

expect.extend(
    {
        toBeNumber (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isNumber(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a valid ISO date string`);
            } else {
                return createJestPassObject(false, explainNumber(received));
            }
        }
    }
);
