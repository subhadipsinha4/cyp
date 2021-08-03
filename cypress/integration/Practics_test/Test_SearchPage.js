function getText(extractText){

    return extractText.text()    
}

describe('Test for search page',()=>{

    before(()=>{
        cy.visit('https://www.aeo.in/')
        cy.get('#top_search').click().type('top')
        cy.get('.unbind_loader .aeoicon-search').click()
    })
    it('Test the search click',()=>{
           
            cy.get('#price').click()
            cy.get('#price').find('#price_1000_1499').click()
            cy.wait(2000)
            cy.get('#divLeftnav').find('.filteritems__selected').then(function($selectedFacet){
                expect($selectedFacet.text()).to.equal('1000 TO 1499')
            })
            cy.get('#ulSortBy').click({force: true})
            cy.get('#ulSortBy li').contains('Price: highest first').click({force: true})
            cy.get('.sort-selected').then(function($selectedSort) {
                 expect(getText($selectedSort)).to.equal('Price: highest first')
             })         
               // handle to open new tab// 
            cy.get('[title="AE Long Sleeve Wrap Front Blouse"]').invoke('removeAttr','target')
            cy.get('[title="AE Long Sleeve Wrap Front Blouse for Women - Cream"]').first().click()



    })




})