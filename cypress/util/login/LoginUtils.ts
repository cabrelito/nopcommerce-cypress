export abstract class loginUtil {
    public static logIn() {

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('Email').type('admin@yourstore.com')
        cy.get('Password').type('admin')
        cy.get('.button-1').click()


    }
}