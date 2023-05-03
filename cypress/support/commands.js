Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Carolina')
    cy.get('#email').type('anagamaral@outlook.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})
