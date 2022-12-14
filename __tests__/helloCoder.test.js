import { helloCoder } from "../src/helloCoder";

describe("helloCoder function", () =>{
    test("should return 'Hello Ainhoa'", () => {
        let result = helloCoder("Ainhoa");
        expect(result).toBe("Hello Ainhoa");
    })
})
