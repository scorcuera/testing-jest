import { nonsense } from "../src/nonsense";

test("should return goofy if we pass 2", () => {
    let result = nonsense(2);
    expect(result).toBe('goofy')
})

test("should return hey arnold if we pass 4", () => {
    let result = nonsense(4);
    expect(result).toBe('hey arnold')
})

test("should return agallas if we pass 4", () => {
    let result = nonsense(101);
    expect(result).toBe('agallas, el perro cobarde')
})

