/// <reference types="cypress" />

describe('testando o arquivo app.js', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Deveria ter o titulo da pagina', () => {
    cy.get('[data-cy="titulo"]').should('be.visible');

    cy.get('[data-cy="titulo"]').contains("Criando meu primeiro teste E2E");
  })

  it('Deveria escrever no input e ao clicar no botão mostrar o nome', () => {
    cy.get('[data-cy="input"]')
      .type('Guilherme Santos').should('have.value', 'Guilherme Santos');

    cy.get('[data-cy="botao"]').click();

    cy.get('[data-cy="nome"]').should('be.visible');

    cy.get('[data-cy="nome"]').contains("Meu nome é: Guilherme Santos");
  })
})