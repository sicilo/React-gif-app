import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Animal Farm';

    test('debe mostrar loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    });

    test('beme mostrar items', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'ABC',
                url: 'http://',
            },
            {
                id: '123',
                title: 'Hook',
                url: 'https://',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});