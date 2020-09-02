import basePage from "../basic methods/basePage";

class FranchiseesPage extends basePage {   

    selectors = {
        addUserCenterButton: '[class*=content-center] button:nth-child(1)',
        addUserTopButton: '.row [class*="content-between"] button[class*=danger]',
        emailInput: '#email',
        firstNameInput: '#firstName',
        lastNameInput: '#lastName',
        confirmButton: '[type=submit]',
        copyActivationLinkIcon: '[data-icon="link"]'       
        
    }

    clickAddUserButton() {
        cy.contains(`Download Bulk Upload Template`).should("be.visible")
        cy.reload()
        cy.contains("Add User").click()

   }

    addUserWithRequiredFields(email, firstName, lastName) {
        this.typeValue(this.selectors.emailInput, email);
        this.typeValue(this.selectors.firstNameInput, firstName);
        this.typeValue(this.selectors.lastNameInput, lastName);
        this.clickElement(this.selectors.confirmButton);
    }

    openActivationLink() {
        this.clikcLastElemnt(this.selectors.copyActivationLinkIcon)
        cy.task('getClipboard').should('contain', this.data.pages.cutomerSite).then($link => {cy.visit($link)})
        this.checkTextPresence(this.data.labels.activateAccountPage)
    }
}

export default FranchiseesPage
