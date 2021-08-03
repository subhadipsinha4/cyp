// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getURL',()=>{
    return cy.visit('https://rahulshettyacademy.com/angularpractice/')
})
Cypress.Commands.add('setName',function(name){
        return cy.get('[name="name"]:nth-child(2)')
})
Cypress.Commands.add('getCheckBoxClick',()=>{
    return cy.get('#exampleCheck1')
})
Cypress.Commands.add('setGender',()=>{
    return cy.get('#exampleFormControlSelect1')
})

Cypress.Commands.add('clickOnSubmit',()=>{
    return cy.get('input.btn-success')
})

Cypress.Commands.add('getProductToCart',(productTitle)=>{
    cy.get('h4.card-title a').each(($ele,index,list)=>{
            const title=$ele.text()
            if(title==productTitle){
                cy.get('.card-footer .btn-info').eq(index).click()

            }
    })    
})