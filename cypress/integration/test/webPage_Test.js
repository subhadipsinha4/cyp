describe('page test',()=>{

    it('click on tab',()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click();
        cy.url().should('include','/customers')
        
    })
    it('click on GET STARTED',()=>{

        cy.visit('https://www.miniaturemarket.com/')
        cy.get('.mobile-search-toggle').click();
        cy.get('#search-mobile').type('card');
        cy.get('.catalogsearch-mobile-top > form > .form-search > .button').click();
    
       
    })


})