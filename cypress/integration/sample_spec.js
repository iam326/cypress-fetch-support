describe('サンプルテスト', () => {
  beforeEach(() => {
    cy.intercept({
      url: '/employees',
      method: 'GET',
    }).as('employees');
  });

  it('Employees API のレスポンスを待つ', () => {
    cy.visit('/');
    cy.wait('@employees');
    cy.get('#employees > li').should('have.length', 5);
  });
});
