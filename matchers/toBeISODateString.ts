// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";

expect.extend({
  toBeISODateString(received : any) : JestPassObject | Promise<JestPassObject> {
    if ( !/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.test(received) ) {
      return createJestPassObject(false, `Expected '${received}' to be a valid ISO date string`);
    }
    const d = new Date(received);
    return d.toISOString() === received
      ? createJestPassObject(true, `Expected '${received}' not to be a valid ISO date string`)
      : createJestPassObject( false, `Expected '${received}' to be a valid ISO date string`);
  },
});
