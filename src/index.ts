import { validate } from "typia";

console.log("Hello World!");

const result = validate<{ ctmnumb: number }>({ctmnumb: '123'})
console.log('result', result)
