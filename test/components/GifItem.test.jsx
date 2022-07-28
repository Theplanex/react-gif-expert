import { render,screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

const url = "http://localhost/www.saitama.com";
const titulo = "soy un titulo miop";
describe('Probando componente GifItem', () => 
{ 
    // test('Prueba de snapshot', () => { 


    //      const {container} = render(<GifItem title={titulo} url={url} />)
    //      expect(container).toMatchSnapshot();
    //  }) 

     test('Prueba de que el objeto reciva los parametros correctamente', () => { 


         render(<GifItem title={titulo} url={url} />)
        const {alt, src} = screen.getByRole('img');
        expect(alt).toBe(titulo);
        expect(src).toBe(url);

    }) 

    
    test('Prueba de que el titulo esta asignado', () => { 
        render(<GifItem title={titulo} url={url} />)
        expect(screen.getByText(titulo)).toBeTruthy();
   }) 

})