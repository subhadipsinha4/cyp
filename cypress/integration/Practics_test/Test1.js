describe("Test Home Page",()=>{
    it('Check the Widget Title',()=>{
        cy.visit('https://www.aeo.in/')
        cy.get('.bestSellerCarouselWrapper h2').then(function($title){
                const widgettitle=$title.text()
                cy.log(widgettitle)
                expect(widgettitle).to.equal('BEST SELLERS OF THE WEEK')
        })
    })

    it('Test product Click in widget and ADD to CART',()=>{
        let pTitle
        cy.get('.product__info .product--name').eq(0).then(function($title){
                pTitle=$title.text()
                cy.log(pTitle)

            })
        let pPrice
        cy.get('.product__info .regular-price').eq(0).then(function($price){
            pPrice=$price.text()
            cy.log(pPrice)
        })
        cy.get('#bestSellerCarousel').find('ul li [title="AE Graphic Slim Polo"]').first().click()
        cy.url().should('include','/product')
        cy.get('h1.product__details--title').then(function($pdpTitle){
                let pdpProductTitle=$pdpTitle.text()
                expect(pTitle).to.equal(pdpProductTitle.trim())
        })
        cy.get('.product__details--price .regular-price').then(function($pdpPrice){
            expect(pPrice).to.equal($pdpPrice.text().trim())
        })
    })
    it.skip('Search in Home',()=>{
        cy.visit('https://www.aeo.in/')
        cy.get('#top_search').click().type('top').type('{enter}')
    })  
})