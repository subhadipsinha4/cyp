import HomePageObject from '../../support/PageObject/HomePageObject'
import CartPageObject from '../../support/PageObject/CartPageObject'

describe('Test Call methord from other file and data perametetarize',()=>{
    before(function(){
        //cy.getURL()
        cy.visit(Cypress.env('url'))
    })
    before(function(){   
        cy.fixture('example').then(function(data)
        {
            self.data=data  
        })
        self.homeObj=new HomePageObject()
        self.cartObj=new CartPageObject()
    })
    it('data parameterize test',()=>{
        cy.setName().type(self.data.name)
        cy.getCheckBoxClick().check()
        cy.setGender().select(self.data.gender)
        cy.clickOnSubmit().click()
    })

    it('test Shop page',()=>{
        homeObj.getShopLink().click()
        self.data.products.forEach(element => {
            //cy.getProductToCart(element)
            homeObj.clickProduct(element)
        });
        homeObj.clickCheckOutButton().click()
    })

    it('increse the items in cart and validate the product price',()=>{
        cy.get('#exampleInputEmail1').clear()
        cy.get('#exampleInputEmail1').type('4')
        cy.get('tr td:nth-child(3) strong').each(($ele,index,$list)=>{
            if(index==0){
            let unitPrice=$ele.eq(index).text()
            cy.log(unitPrice)
            const arr=unitPrice.split(' ')
            cy.log(arr[1])
            cy.log(arr[1]*4)

        }
        })
    })

    it('test order place',()=>{
        cartObj.clickOnCheckout()
        cartObj.setCountry()
        cartObj.clickTearmsCondition()
        cartObj.clickOnSubmit()
    })
})