import { factorial } from "./sample";

//Test Development Driven

describe('SampleTesting', () => {/* esto es una fucnión que esspera dos paramtros la función decribe 
                                    excepcionalemente pude llevar un af por delante, lo unico que
                                     hace es aislarnos de todos los demás */
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
/* 
it ('should create', () => {
        expect(1===1).toBeTruthy();
    }) */