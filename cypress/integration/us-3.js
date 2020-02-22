// Az oldal korábban regisztrált felhasználójaként, be szeretnék jelentkezni.

const userData = {
    "email": "dosa.balint@3pixel.hu",
    "password": "kismacska",
};

const baseUrl = Cypress.config().baseUrl;

describe('US-3: Login', () => {
    it('', () => {
         cy.visit(baseUrl);

        // login button
        cy.get('#loginNavButton').click();

        // redirect
        cy.url().should('eq', baseUrl + 'auth/login');

        // login form
        cy.get('#loginEmailInput').type(userData.email);
        cy.get('#loginPasswordInput').type(userData.password);

        // submit
        cy.get('#loginSubmitButton').click();

        // redirect
        cy.url().should('eq', baseUrl)
    });
});
