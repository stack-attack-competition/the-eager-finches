// Érdeklődő személyként, regisztrálni szeretnék az oldalra.

const baseUrl = Cypress.config().baseUrl;

describe('US-1: Regisztráció - Navigáció', () => {
    it('', () => {
        cy.visit(baseUrl);

        // reg button
        cy.get('#registerNavButton').click();

        // redirect
        cy.url().should('eq', baseUrl + 'auth/registration');
    });
});
