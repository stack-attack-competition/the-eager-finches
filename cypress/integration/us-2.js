// Érdeklődő személyként, a regisztráció során szeretném megadni az email címemet, hogy azon keresztül tudjam managelni
// a fiókomat, a jelszavamat, amivel levédhetem a fiókomat, illetve a vezeték és keresztnevemet, profile képhez url-t.

const userData = {
    "email": "dosa.balint@3pixel.hu",
    "password": "kismacska",
    "firstName": "Bálint",
    "lastName": "Dósa",
    "pictureUrl": "http://www.gravatar.com/avatar/c02f9e12fd44c17c0ce3b4255aa27b14"
};

const baseUrl = Cypress.config().baseUrl;

describe('US-2: Regisztráció - From', () => {
    it('', () => {
        cy.visit(baseUrl);

        // reg button
        cy.get('#registerNavButton').click();

        // redirect
        cy.url().should('eq', baseUrl + 'auth/registration');

        // login form
        cy.get('#registrationEmailInput').type(userData.email);
        cy.get('#registrationPasswordInput').type(userData.password);
        cy.get('#registrationFirstNameInput').type(userData.firstName);
        cy.get('#registrationLastNameInput').type(userData.lastName);
        cy.get('#registrationPictureUrlInput').type(userData.pictureUrl);

        // submit
        cy.get('#registrationSubmitButton').click();

        // redirect
        cy.url().should('eq', baseUrl)
    })
});
