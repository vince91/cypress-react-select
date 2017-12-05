describe('react-select', () => {
    it('should be able to select an item', () => {
        cy.visit('http://jedwatson.github.io/react-select/');
        cy.get('.Select').first().click();
        cy.get('.Select-option').first().click();
        cy.get('.Select-value-label').first().should('contain', 'Australian Capital Territory');
    });
});
