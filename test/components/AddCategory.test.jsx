import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene valor', () => {
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el on new category con el input vacio', () => {
        const inputValue = '';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled();        
    })
})