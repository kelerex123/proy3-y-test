import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-strings";


describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hola Fernando!', () => {
        const nombre = "Bryan";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre + '!');
    })

    //getSaludo() debe retornar  Hola Carlos! si no hay argumentos

    test('getSaludo debe retornar Hola Carlos! si no recibe argumentos', () => {

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');

    })

})