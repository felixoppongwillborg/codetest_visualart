describe('Visitor can see add campaign', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visitor can see images', () => {
    cy.get('#maner').should('exist')
    cy.get('#blabar').should('exist')
    cy.get('#splash').should('exist')
  });
})