describe("test search page",()=>{

    it('test sort in search page',()=>{
        cy.visit('https://www.hometown.in/')
        cy.get('#ht_generic_search').type("chair")
        cy.get('._1EKY72-8yoaZ6pT1ntZ4dv').click()
       cy.get('select option').should("have.value","selling_price-asc")
       cy.get('select').select("Price : High to Low")
    
    })
})