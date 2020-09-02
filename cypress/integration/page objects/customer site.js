import basePage from "../basic methods/basePage";

class customerSite extends basePage {
    selectors = {
        newPasswordInput: '[type="password"]',
        agreePolicyCheckbox: '[class="checkmark"]',
        submitButton: '[class*="submit"] button',
        unitNumberDisplayed: '[class="unitNumber"]',
        franchiseeNameDisplayed: '[class="name"]',
        bottomNavigationFirstButton: '[class="iconScrollDown"] [class="chevron"]',
        bottomNavigationSecondButton: '[class="chevron"]:nth-child(3)',
        subcategoryDisplayed: '[class*="Sub"] [class="selected"]',
        expandCampaignSize: '[alt="expand icon"]',
        selectButton: '[class*="sizeSelect"] button',
        termsOfUseCheckbox: '[class="noselect"] [class="checkmark"]',
        addNewCardButton: '[role="button"]',
        cardNumberInput: '[class*="CardNumberField"] input',
        cardDateInput: '[autocomplete="cc-exp"]',
        cardCVCInput: '[autocomplete="cc-csc"]',
        cardZipInput: '[autocomplete*="code"]',
        addCardButton: '[class="addCard"] [type="button"]',
        authoriseChargesCkeckbox: '[class*="Content"] [class="checkmark"]',
        launchCampaignButton: '[class*="Launch"] [type="button"]',
        refNumberDisplayed: '[class="bold"]'
    }

    activateFranchisee() {
        this.typeValue(this.selectors.newPasswordInput, this.data.franchiseeData.password)
        this.clickElement(this.selectors.termsOfUseCheckbox)
        this.clickElement(this.selectors.submitButton)
        this.checkTextPresence(this.data.labels.customerSiteFirstTab)
    }

    addCreditCardDuringOrderMaking(number, date, cvc, zip) {
        this.clickElement(this.selectors.addNewCardButton)
        cy.wait(5000)
        cy.get('.__PrivateStripeElement > iframe').then($element => {
          const $body = $element.contents().find('body')
          let stripe = cy.wrap($body)
          stripe.find(this.selectors.cardNumberInput).click().type(number)
          stripe = cy.wrap($body)
          stripe.find(this.selectors.cardDateInput).click().type(date)
          stripe = cy.wrap($body)
          stripe.find(this.selectors.cardCVCInput).click().type(cvc)
          stripe = cy.wrap($body)
          stripe.find(this.selectors.cardZipInput).click().type(zip)
        this.clickElement(this.selectors.addCardButton)
    })

    }
}

export default customerSite