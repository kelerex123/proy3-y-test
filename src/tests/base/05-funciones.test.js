import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => { 
        
        const userTest = {
            uid: '12345467',
            username: 'kelerex12345s'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    test('getUsuarioActivo debe retornar un objeto', () => { 
        
        const nombre = "Bryan";
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);

    })

})