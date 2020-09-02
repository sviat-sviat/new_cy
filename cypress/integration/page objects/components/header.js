class header {
    selectors = {
        selectedBrand: '[class*="singleValue"]',
        createBrandHeader: '[class*="container-"] [class="btn btn-danger"]',
        loggedInUserArea: '[class="header-btn pr-0 mr-2"]',
        logoutButton: '[class="nav-link"]',
        selectBrandDropdownInput: '[class*=header-shad] [autocapitalize="none"]',    
        selectBrandDropdown: '[class*=header-sha] [class="select-wrapper"]',
        itemsInDropdown: '[class*=qy-menu] [class*=option]', 
        brandSetupMenubutton: '[class*=menu][class*="left"]',
        franchiseesMenuButton: '[class*=visible] [href*="users"]'
   }

    logout() {
        cy.get(this.selectors.loggedInUserArea).click()
        cy.get(this.selectors.logoutButton).click()     
    }
}


export default header