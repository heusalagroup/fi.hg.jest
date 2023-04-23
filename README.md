# fi.hg.jest

HG's additions to jest testing framework as a git submodule

This add on introduces these matchers:

 * `expect( something ).toBeIsoDateString()` tests for a string data in 
   standard format, e.g. `YYYY-MM-DDTHH:MM:SS`.
 * `expect( something).toBeNonEmptyString()` tests for a non-empty string

Your test file must also import:

```typescript
import "../fi/hg/jest/matchers/index.d";
import "../fi/hg/jest/matchers";
```

And your main Jest configuration must include `setupFilesAfterEnv`:

```javascript
/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    // ...
    
    setupFilesAfterEnv: [
        "./src/fi/hg/jest/matchers/index.ts"
    ]
    
};
```
