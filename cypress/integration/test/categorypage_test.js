describe("text category Page",()=>{

    it('Click on category page',()=>{
        cy.visit('https://www.hometown.in/')
        cy.contains('Furniture').trigger('mouseover')
        cy.get('[title="Beds"]').click()
        cy.url().should("include","/beds")
    })

    it.skip('Check cart click',()=>{
        cy.get('#sku_pro_HO340FU55ZLOHTFUR-460272').click()
        cy.get('#sku_pro_HO340BE24ZQPHTFUR-460403').click()
        cy.get('a[href^="/checkout/cart"] > .kfVlmb').click()
        cy.get('.styles_closeIcon__1QwbI > path').click()
        cy.go(-1)
    
        
    })

    it.skip("Validate product price in cart",()=>{
        cy.visit('https://www.hometown.in/')
        cy.contains('Furniture').trigger('mouseover')
        cy.get('[title="Beds"]').click()
        cy.get('.product') 

    })
})