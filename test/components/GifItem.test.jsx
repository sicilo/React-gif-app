import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas para <GifItem/>', () => {
    const title = "Gif";
    const url = "https://vitejs.dev/logo-with-shadow.png";

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe tener el titulo', () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })

    test('Debe tener la imagen con la url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
})