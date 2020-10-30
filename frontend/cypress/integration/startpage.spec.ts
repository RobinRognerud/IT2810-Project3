import {} from 'cypress';
describe('Startpage', () => {
    it('Displays correct countries', () => {
        cy.visit('http://localhost:3000');
    })
    it('Has correct buttons', () => {
        cy.get('button.btn.btn-outline-secondary.btn-lg').should('be.disabled');
        cy.get('li.page-item').should('be.visible').should('have.length', 2);
        cy.get('button.btn.btn-outline-secondary.btn-sm').should('be.visible').contains('More details');
        
    })
    it('Pagination is working correctly', () => {
        cy.get('.page-item').contains('Next').click();
        cy.get('h5').first().contains('Armenia');
        cy.get('.page-item').contains('Next').click();
        cy.get('h5').first().contains('Belarus');
    })
})