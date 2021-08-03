describe('Test Elements',()=>{
    before(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('Check Radio and check box',()=>{
        cy.get('[value="radio2"]').click().should('be.checked').and('have.value','radio2')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
    })
    it('Test drop down and select autosuggest',()=>{
        cy.get('#dropdown-class-example').select('option1')
        cy.get('#autocomplete').type('ge')
        cy.get('.ui-autocomplete li').contains('Germany').click()
    })
    it.skip('Handle the alert',()=>{
        cy.get('#alertbtn').click()
        cy.get('window:alert',(str)=>{
            expect(str).to.equal('')
        })
    })
    
    it('Traverse table',()=>{
        // cy.get('#product tr:nth-child(10) td:nth-child(2)').then(function($courseTitle){
        //     cy.log($courseTitle.text())           
        // })

        // cy.get('tr td:nth-child(2)').each(($ele,index,$list)=>{
        //     const text=$ele.text()
        //     if(text.includes("Testing")){
        //         cy.get('tr td:nth-child(2)').eq(index).next().then(function($price){
        //             cy.log($price.text())
        //         })
        //     }
        // })
        let total=0
        cy.get('.tableFixHead tr td:nth-child(4)').each((ele,index,$list)=>{
             total=total+ parseInt(ele.text())
             cy.log(total)
        })
        
    })
})