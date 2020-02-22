// Az oldal korábban regisztrált felhasználójaként, be szeretnék jelentkezni.

const userData = {
    "email": "dosa.balint@3pixel.hu",
    "password": "kismacska",
};

describe('US-3: Login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    // login button

    // redirect

    // login form

    // submit

    // redirect
    it('Find and click register button', () => {
        cy.get('nav a').contains('blog').click();
        cy.url().should('include', '/blog');
    });
});
