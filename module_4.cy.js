describe('Test Suite', () => {
    beforeEach(() => {
        // runs before each test in the block
        cy.visit('https://fabrykatestow.pl')
    });

    it('Should elements be visible - module 4', () => {
        // ID
        cy.get('#header-grid').should('be.visible');
        cy.get('#nv-primary-navigation-main').should('be.visible');
        cy.get('#menu-item-923').should('be.visible');
        cy.get('li#menu-item-923').should('be.visible');
        cy.get('#menu-item-1692').should('be.visible');
        cy.get('#menu-item-224').should('be.visible');

        // Klasy
        cy.get('.header-main').should('be.visible');
        cy.get('.primary-menu-ul').should('be.visible');
        cy.get('.menu-item').should('be.visible');
        cy.get('.menu-item-object-custom').should('be.visible');
        cy.get('.menu-item-type-post_type').should('be.visible');

        // Atrybuty
        cy.get('[aria-label="Menu główne"]').should('be.visible');
        cy.get('[data-row-id="main"]').should('be.visible');
        cy.get('[title="Fabryka Testów"]').should('be.visible');
        cy.get('[src="https://fabrykatestow.pl/wp-content/uploads/2021/01/cropped-ft_logo_best.jpg"]').should('be.visible');
        cy.get('[data-section="header_menu_primary"]').should('be.visible');

        // Po tekście
        cy.get('li').contains('Newsletter').should('be.visible');
        cy.get('li').contains('Kursy').should('be.visible');
        cy.get('li').contains('Webinary').should('be.visible');
        cy.get('li').contains('Kontakt').should('be.visible');
        cy.get('li').contains('Darmowe dokumenty').should('be.visible');

        cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!').should('be.visible');
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').should('be.visible');
        cy.get('a').contains('Panel kursanta').should('be.visible');
        cy.get('h4').contains('Nawet jak nie wiesz, od czego zacząć i jakich narzędzi używać').should('be.visible');

    });
});

