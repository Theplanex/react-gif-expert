import { render,screen,fireEvent} from "@testing-library/react";
import {AddCategory} from '../../src/components/AddCategory';

describe('Prueba de AddCategory', () => 
{ 
    test('debe de cambiar el valor de la caja de text', () => 
    {
        render( <AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox'); 
        fireEvent.input( input, { target : {value: 'saitama' } } )
        expect( input.value ).toBe('saitama');
    });
})

test('debe de llamar onNewCategory si el input tiene un valor', () => 
{ 
    const inputValue ='saitama';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory}/>)
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target : {value: inputValue } } );
    fireEvent.submit( form );

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
})