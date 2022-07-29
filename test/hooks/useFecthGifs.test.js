import { renderHook } from "@testing-library/react"
import useFecthGifs from "../../src/hooks/useFecthGifs"

describe('Prueba del hook useFecthGifs', () => 
{ 
    const category = 'saitama';
    test('debe regresar el estado inicial', () => { 

        const { result } = renderHook(() => useFecthGifs(category));
        console.log(result);

     })
})