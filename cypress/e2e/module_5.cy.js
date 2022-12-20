describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://fabrykatestow.pl')
        cy.log('Hello World')
    })
})