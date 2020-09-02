class leftMenu {
    selectors = {
            brandSetup: '[class*=metismenu-item] [href="#"]',
            location: '[href*=location]',
            promotions: '[href*="setup/promotions"]',
            campaignSizes: '[href*=campaign-sizes]',
            offers: '[href*=offers]',
            assets: '[href*=assets]',
            franchisees: '[href*="up/users"]',
            settings: '[href*="setting"]',
            brandSetupCollapsed: '[class$="fa-caret-left"]',
            campaigns: '[href*="menu/campaign"]'

        }

    openPage(page) {
        cy.get('body').then(($body) => {
            if ($body.find(this.selectors.brandSetupCollapsed)){
                cy.get(this.selectors.brandSetup).click()
                cy.get(page).click()
            } else {
                cy.get(page).click()
            }
        }) 
    } 

   }


export default leftMenu