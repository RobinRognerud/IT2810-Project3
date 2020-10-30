import {} from 'cypress';
import example from '../fixtures/example.json'

describe('Searchbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('Searchbar displays input', () => {
        const input = 'canada';
        cy.get('input').type(input).should('have.value', input);
    })
/*
    it('Checks for each letter written', () => {
        const canada = ['c', 'ca', 'can', 'cana', 'canad', 'canada' ]
        const res = ['Central African Republic', 'Cambodia', 'Canada', 'Canada', 'Canada', 'Canada']
        for(let i=0; i < 6; i++) {
            cy.get('input').type(canada[i]).should('have.value', canada[i]);
            cy.get('main').contains(res[i])
            cy.get('input').clear()
        }
    })*/
    
    it('Correct country appears after search', () => {
        cy.server();
        cy.route('/countries/?skip=0&name=canada', 'fixture:example.json').as('search');
        cy.get('input').type('cana').should('have.value', 'cana');
        cy.wait('@search');
        cy.get('.card-text').first().contains('canada');
    })


})
