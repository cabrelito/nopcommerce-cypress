import {LoginUtils} from "../util/login/LoginUtils";

describe('template spec', () => {
    beforeEach(() => {
        LoginUtils.logIn()
    })
    it.skip('Add a new customer', () => {
        cy.get('ul[role=\'menu\'] > li:nth-of-type(4) > .nav-link').click()
            .should('contain.text', 'Customers').click()
        cy.get('li:nth-of-type(4) > .nav.nav-treeview > li:nth-of-type(1) > .nav-link').click()
        cy.contains('Add new').click().then(() => {
            cy.get('#Email').type('oscar@yahoo.cm')
            cy.get('#Password').type('oscar')
            cy.get('#FirstName').type('Oscar')
            cy.get('#LastName').type('Christian')
            cy.get('#Gender_Male').click()
            cy.get('#DateOfBirth').type('7/5/2000')
            cy.get('#Company').type('Nguess Gmbh')
            cy.get('#IsTaxExempt').click()
            //cy.get('.input-group-append.input-group-required > .input-group > div > div[role=\'listbox\']').click()
            //cy.get('ul#SelectedCustomerRoleIds_listbox > li:nth-of-type(1)').click()
            //cy.get('.input-group-append.input-group-required > .input-group > div > div[role=\'listbox\']').click()
            //cy.get('ul#SelectedCustomerRoleIds_listbox > li:nth-of-type(4)').click()
            cy.get('#VendorId').select('Vendor 1')
            cy.get('#AdminComment').type('Meine Firma ist neu ')
            cy.get('[name="save"]').click().then(() => {
                cy.get('.alert')
                    .should('contain.text', 'The new customer has been added successfully.')
            })
        })
    })
    it.skip('Search a customer with first Name ', () => {
            cy.get('ul[role=\'menu\'] > li:nth-of-type(4) > .nav-link').click()
                .should('contain.text', 'Customers').click()
            cy.get('li:nth-of-type(4) > .nav.nav-treeview > li:nth-of-type(1) > .nav-link').click()
            cy.get('#SearchFirstName').type('oscar')
            cy.get('#search-customers').click()
            cy.get('#customers-grid').find('tr').eq(1)
                .should('contain.text', 'oscar@yahoo.cm')
                .should('contain.text', 'Oscar Christian')
                .should('contain.text', 'Registered')
                .should('contain.text', 'Nguess Gmbh')


        }
    )
    it('Add a new Vendor ', () => {
        cy.get('ul[role=\'menu\'] > li:nth-of-type(4) > .nav-link').click()
            .should('contain.text', 'Customers').click()
        cy.get('.menu-open > .nav > :nth-child(4) > .nav-link').click()
        //cy.get('.float-right > .btn').click()
        cy.contains('Add new').click().wait(2000).then(() => {
            cy.get('#Name').type('Cabrel1')
            cy.get('#Email').type('cabrel1@gmail.com')
            cy.get('[name="save"]').click()
            cy.contains('Save').click().then(() => {
                cy.get('.alert')
                    .should('contain.text', 'For security purposes, the feature you have requested is not available on the demo site.')


            })
        })

    })
})