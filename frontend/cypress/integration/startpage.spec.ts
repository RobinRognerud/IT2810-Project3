import {} from 'cypress';
describe('Startpage', () => {
    it('Displays correct countries', () => {
        cy.visit('http://localhost:3000');
    })
    it('Has correct buttons', () => {
        cy.get('li.page-item').should('be.visible').should('have.length', 2);
        cy.get('div.btn-group').should('be.visible').contains('View');
        cy.get('a').contains('Back to top');
        
    })
    /*it('Pagination is working correctly', () => {
        cy.server();
        cy.route('/countries/skip=9').as('page2');
        cy.route('/countries/skip=19').as('page3');
        cy.get('button.page-link').contains('Next').click();
        cy.wait('@page2');
    })*/
})