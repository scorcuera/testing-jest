import { beTrue } from '../src/beTrue'

test("should return true", () => {
    let result = beTrue();
    expect(result).toBe(true);
});