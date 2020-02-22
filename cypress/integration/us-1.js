// Érdeklődő személyként, regisztrálni szeretnék az oldalra.

describe('US-1: Regisztráció - Navigáció', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    // visible nav button

    // reg button jumps to /auth/reg page
    it('Find and click register button', () => {
        cy.get('nav a').contains('blog').click();
        cy.url().should('include', '/blog');
    });
});
