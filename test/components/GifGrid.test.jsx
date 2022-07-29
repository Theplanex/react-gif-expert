import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";
jest.mock("../../src/hooks/useFecthGifs");

const category = 'saitama';

describe('Pruebas del Componente GifGrid', () => {

    test('Debe mostrar el Loading.... ', () => {
        useFecthGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText("Cargando......"));
        expect(screen.getByText(category));

    });

    test('debe montar items cuando se cargan las imagenes desde el usefechGifs ', () => {
        const gifs = [{
            id: 'ABC',
            title: 'goku',
            url: 'https://localhost/saitama.jpg',
        },
        {
            id: 'ABC2',
            title: 'goku',
            url: 'https://localhost/saitama.jpg',
        }];

        useFecthGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

    });


});