import { capitalize } from "./capitalize.js";

test('First letter is capital now👍', () => {
    expect(capitalize('artem')).toBe('Artem')
})