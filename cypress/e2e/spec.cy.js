describe('template spec', () => {
  beforeEach(function () {
    cy.visit('http://localhost:5173/');
  });

  it('passes', () => {
    cy.get(selectors.countButton).contains('count is 0').click();
    cy.get(selectors.countButton).contains('count is 1').click();
    cy.get(selectors.countButton).contains('count is 2');
  })
})

export const selectors = {
  countButton: '[data-test=count-button]',
}