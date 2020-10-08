describe('Visitor can see add campaign', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visitor can see images', () => {
    cy.get('#maner').should('exist')
    cy.get('#blabar').should('exist')
    cy.get('#splash').should('exist')
  });
  it('visitor can see text in add', () => {
    cy.get('#layout').should('exist')
    cy.get('#promotionUnit').should('exist')
    cy.get('#subUnit').should('exist')
    cy.get('#unitMesurement').should('exist')
    cy.get('#articleName').should('exist')
    cy.get('#companyInfo').should('exist')
  })
})