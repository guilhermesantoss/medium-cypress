/// <reference types="cypress" />

describe('testando o arquivo app.js', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deveria ter o titulo da pagina', () => {
    cy.get('#titulo').should('be.visible')

    cy.get('#titulo').contains(/Criando meu primeiro teste E2E/)
  })

  it('Deveria escrever no input e ao clicar no botão mostrar o nome', () => {
    cy.get('#input').type('Fulano')

    cy.get('#botao').click()

    cy.get('#nome').should('be.visible')

    cy.get('#nome').contains(/Meu nome é: Fulano/)
  })
})