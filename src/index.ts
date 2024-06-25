import { validate } from "typia";

console.log("Hello World!");

// index.mjs:2665 Uncaught Error: Error on typia.validate(): no transform has been configured. Read and follow https://typia.io/docs/setup please.
//     at halt (index.mjs:2665:11)
//     at validate (index.mjs:2575:5)
//     at eval (index.ts:5:63)
//     at ./src/index.ts (main.js:85:1)
//     at __webpack_require__ (main.js:338:32)
//     at main.js:1408:37
//     at main.js:1410:12
const result = validate<{ ctmnumb: number }>({ctmnumb: '123'})
console.log('result', result)
