// Érdeklődő személyként, a regisztráció során szeretném megadni az email címemet, hogy azon keresztül tudjam managelni
// a fiókomat, a jelszavamat, amivel levédhetem a fiókomat, illetve a vezeték és keresztnevemet, profile képhez url-t.

const userData = {
    "email": "dosa.balint@3pixel.hu",
    "password": "kismacska",
    "firstName": "Bálint",
    "lastName": "Dósa",
    "pictureUrl": "http://www.gravatar.com/avatar/c02f9e12fd44c17c0ce3b4255aa27b14"
};

describe('US-2: Regisztráció - From', () => {
    beforeEach(() => {
        cy.visit('/auth/registration')
    });

    // reg form validation

    // duplication reg

    // reg form submit
    it('Find and click register button', () => {
        cy.get('nav a').contains('blog').click();
        cy.url().should('include', '/blog');
    });
});
