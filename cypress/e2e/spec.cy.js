describe('Logout', () => {
  beforeEach(() => {
    cy.login('https://localhost:3000/login') 
  })

  it('logout redireciona para à página de login', () => {
    cy.contains('Logout')
      .should('be.visible')
      .click('https://localhost:3000/logout')

    cy.url('https://localhost:3000/')
      .should('be.equal', 'https://localhost:3000/login')
  })
})