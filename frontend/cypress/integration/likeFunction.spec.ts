import {} from 'cypress';
describe('Testing liking on countries', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('Has like-button', () => {
        cy.get('div.btn-group').should('be.visible').contains('Like');
        cy.get('button.page-link').contains('Next').click();
        cy.get('div.btn-group').should('be.visible').contains('Like');
    })
    it('Like count goes up', () => {
        cy.get('div.card.mb-3.box-shadow').first().contains('Afghanistan');
        cy.get('button').contains('View').first().click();
    })
})