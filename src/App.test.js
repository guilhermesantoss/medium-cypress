import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('deve renderizar o conteudo da tag h1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Criando meu primeiro teste E2E/i);
  expect(linkElement).toBeInTheDocument();
});
