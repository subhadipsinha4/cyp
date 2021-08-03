describe('get attribute value and text',()=>{
    it.skip('Get text value',()=>{
        cy.visit('https://www.hometown.in/login/?redirect=/')
        var mytext
        cy.get('.gtOUsf').then(($txt)=>{
             mytext=$txt.text()
            cy.log(mytext)
        })

    })

    it('Get attribute value',()=>{
        cy.visit('https://www.hometown.in/login/?redirect=/')
        cy.get('[id="ht_generic_search"]').invoke('attr','placeholder').then(($attValue)=>{
                cy.log($attValue)
        })
        

    })





})