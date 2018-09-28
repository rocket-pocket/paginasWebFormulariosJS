import { factorial } from "./sample";



describe('SampleTesting', () => {
    it('Factorial de 5 es 120', () => {
        expect(factorial(5)).toEqual(120);
    })
    it('factorial de 1 deberia ser 1', () => {
        expect(factorial(1)).toEqual(1);
    })
    it('deberia ser undefined el factorial negativo', () => {
        expect(factorial(-3)).toBeUndefined();
    })
});
