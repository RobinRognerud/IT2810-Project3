import {} from 'cypress';
import { contains } from 'cypress/types/jquery';
import { valuesIn } from 'cypress/types/lodash';
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
        cy.get('#exampleSelect1').select('Z to A');
        cy.get('h5').first().contains('Virgin Islands U.S')
    })

    it('Also sorts while searching', () => {
        cy.get('#exampleSelect1').select('Z to A');
        cy
        cy.get('h5').first().contains('Norway')
    })
})