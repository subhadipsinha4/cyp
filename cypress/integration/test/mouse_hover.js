describe("test mouse hover",()=>{
    it.skip("Login",()=>{
        cy.visit('https://www.hometown.in/')
        cy.get('.sc-cMljjf > .PathHtV1__Path-sc-10yt6gx-0').trigger('mouseover')
        cy.contains('Log In').click({force: true})
        cy.get('.hkyyyF > [type="text"]').type("subhadipsinha@gmail.com")
        cy.get('.hkyyyF > [type="password"]').type("A@123456")
        cy.get('.jELKdA').click()
       

    })

    it.skip("Logout",()=>{
        cy.get('.fXbvHW > .bHlFQp').trigger('mouseover')
        cy.get('.jZKRNx').click({force: true})
    })

    it("select facet using mouse hover",()=>{
        cy.visit('https://www.hometown.in/')
        cy.get('#ht_generic_search').type("chair")
        cy.get('._1EKY72-8yoaZ6pT1ntZ4dv').click()
        cy.get('.unbxd-facet-container > :nth-child(8) > p').trigger('mouseover')
        cy.get('.unbxd-facet-container > :nth-child(8) > ul > li').within(()=>{
            cy.get('[for="selling_price_13000 TO 14000"]').click({force: true})
        })

    })
})