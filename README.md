# fi.hg.jest

HG's additions to jest testing framework as a git submodule

This add on introduces these matchers:

 * `expect( something ).toBeISODateString()` makes sure the date string is in 
   standard format, e.g. `YYYY-MM-DDTHH:MM:SS`.

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
