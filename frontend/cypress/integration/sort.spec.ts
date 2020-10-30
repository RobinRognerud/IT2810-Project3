import {} from 'cypress';


describe('Sorting', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('It loads correctly', () => {
        cy.contains('All the countries in the world')
        cy.get('input').should('be.visible')
        cy.get('select').should('be.visible')
    })


    it('Correctly sorts countries', () => {
        cy.get('#sortBar').select('Z to A');
        cy.get('h5').first().contains('Virgin Islands U.S')
    })

    it('Also sorts while filtering, and searching', () => {
        cy.get('#filterBar').select('Europe');
        cy.get('#sortBar').select('Capitals A to Z');
        cy.get('h5').first().contains('Netherlands')
    })
})