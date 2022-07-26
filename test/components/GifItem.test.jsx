import { render } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

const url = "url";
const title = "title";
describe('Probando componente GifItem', () => 
{ 
    test('Prueba de snapshot', () => { 


         const {container} = render(<GifItem title={title} url={url} />)
         expect(container).toMatchSnapshot();
     }) 


})