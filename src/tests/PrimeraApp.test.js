
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe mostrar el mensaje "Hola, soy Bryan"', () => {
    //     const saludo = "Hola, soy Bryan";
    //     render( <PrimeraApp saludo={saludo}/>);
    //     const saludoEsperado = screen.getByText(saludo + '!!!');
    //     expect(saludoEsperado).toBeInTheDocument();
    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = "Hola, soy Bryan";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = "Hola, soy Bryan";
        const subtitulo = "Soy un subtitulazo";
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />)

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);

    })

})