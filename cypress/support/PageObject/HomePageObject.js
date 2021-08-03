class HomePageObject{

    getShopLink(){
        return cy.contains('Shop')
    }

    clickProduct(productTitle){
        cy.get('h4.card-title a').each(($ele,index,list)=>{
            const title=$ele.text()
            if(title==productTitle){
                cy.get('.card-footer .btn-info').eq(index).click()

            }
    })  

    }

    clickCheckOutButton(){
        return cy.get('a.btn-primary')
    }

}

export default HomePageObject