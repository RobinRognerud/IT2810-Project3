import {} from 'cypress';

describe('Searchbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('Searchbar displays input', () => {
        const input = 'canada';
        cy.get('input').type(input).should('have.value', input);
    })

    it('Checks for each letter written', () => {
        const canada = ['c', 'ca', 'can', 'cana', 'canad', 'canada' ]
        const res = ['Cabo Verde', 'Cambodia', 'Canada', 'Canada', 'Canada', 'Canada']
        for(let i=0; i < 6; i++) {
            cy.get('input').type(canada[i]).should('have.value', canada[i]);
            cy.get('main').contains(res[i])
            cy.get('input').clear()
        }
    })

})
