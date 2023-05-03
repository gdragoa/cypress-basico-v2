/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
          cy.visit('https://g1.globo.com/')
          cy.title().should('equal', 'Central de Atendimento ao Cliente TAT')
    })
  })