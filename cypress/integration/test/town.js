describe("Test Home Page",()=>{

    it("Search Action using click",()=>{

        cy.visit("https://www.hometown.in/")
        cy.get('#ht_generic_search').type("chair")
        cy.get('._1EKY72-8yoaZ6pT1ntZ4dv').click()
    })

    it("Search Action using press",()=>{

        cy.visit("https://www.hometown.in/")
        cy.get('#ht_generic_search').type("sofa").type('{enter}')
    })

    it("Click Go button in SRP",()=>{

        cy.visit("https://www.hometown.in/")
        cy.get('#ht_generic_search').type("table")
        cy.get('._1EKY72-8yoaZ6pT1ntZ4dv').click()
        cy.get('#search').type("560102")
        cy.wait(1000)
        cy.get('#search_btn').click()
        cy.get('.selected-facet-name > p').contains("560102")
    })

    it("Click Buy Now button",()=>{

        cy.visit("https://www.hometown.in/")
        cy.get('#ht_generic_search').type("chair")
        cy.get('._1EKY72-8yoaZ6pT1ntZ4dv').click()
        cy.get('#ac_sku_pro_HO340FU21GPMHTFUR-465106').click()
        cy.get('.fdWeiM > :nth-child(3) > :nth-child(3)').click()
       
    })

    it.skip("Check login",()=>{

        // cy.visit("https://www.hometown.in/")
        // cy.get('.sc-cMljjf > .PathHtV1__Path-sc-10yt6gx-0').click()
       // cy.get('.kpQOGd > .jZKRNx').click()
       cy.visit('https://www.hometown.in/login/?redirect=/')
       cy.get('.hkyyyF > [type="text"]').type("subhadipsinha@gmail.com")
       cy.get('.hkyyyF > [type="password"]').type("A@123456")
       cy.get('.jELKdA').click()
       
    })


})