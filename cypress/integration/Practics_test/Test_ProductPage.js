describe('Test Product-page',()=>{

    it('Add to cart from PDP',()=>{
        cy.visit('https://www.aeo.in/')
        cy.get('#top_search').click().type('top').type('{enter}')
        cy.get('.products__list .product__item a').eq(2).invoke('removeAttr','target')
        cy.get('.products__list .product__item a').eq(2).click({multiple: true})
        cy.get('#sizeDrpdwn').click()
        cy.get('#mCSB_2_container li .size_l').click();
        cy.get('#productQty .increment').click()
        cy.get('#btnAddToBag').click()
       //validate the product from cart
        cy.get('.menuCartBlock .aeoicon-bag').click()
        cy.get('.quickViewBlk li').contains('Remove').click()
        cy.get('.alert-warning h1').then(($emptyCartMsg)=>{
            expect($emptyCartMsg.text().trim()).to.equal('No Products in cart')
        })


    })
})