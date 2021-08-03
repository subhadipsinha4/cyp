class CartPageObject
{
    clickOnCheckout(){
        return cy.contains('Checkout').click()
    }

    setCountry(){
        cy.get('#country').type('In')
        cy.get('div.suggestions ul li a').each(($ele,index,$list)=>{
            if($ele.text()=='India'){
                cy.get('div.suggestions ul li a').eq(index).click()
            }
        })

    }

    clickTearmsCondition(){
        cy.get('#checkbox2').click({force: true})
    }

    clickOnSubmit(){
        cy.get('input.btn-success').click()
    }
}

export default CartPageObject