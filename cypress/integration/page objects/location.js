import basePage from "../basic methods/basePage";

class locationPage extends basePage {
    selectors = {
        addLocationButton: '[class*= inner] .row button',
        addLocationCenterButton: '[class*="center container"] button:nth-child(1)',
        bulkUploadButton: '[class*=upload] [class*=danger]',
        uploadInput: '[class*=upload] input',
        downloadBulkUploadTemplate: '[class*=content-cen] [class*=link]',
        // Add Location modal
        modalForm: '.modal-content',
        unitNumber: '#unitNumber',
        locationName: '#name',
        address: '#streetAddress',
        city: '#city',
        zip: '#zip',
        latitude: '#latitude',
        longitude: '#longitude',
        dropDownOption: '[id*=option]',
        selectCountry: '[class=row]:nth-child(4) [class*=i-control]',
        selectState: '[class=row]:nth-child(3) [class*=i-control]',
        nextButton: '[type="submit"]',
        finishButton: 'button[class*=auto]',
        stateSelectInput: 'input[id*=select-9]',
        assignFranchisseButton: '[class*= assign] button',
        searchFranchisseInput: '[placeholder="Search Franchisee"]',
        cancelFranchiseeButton: '[class*="assign_owner_w"] button',
        saveFranchiseeButton: '[class*="owner_tag"] [class*="danger"]',
        suggestionFranchisse: '[class*=suggestion] li',
    }
    enterAddress(unit, name, address, city, zip) {
        this.typeValue(this.selectors.unitNumber, unit);
        this.typeValue(this.selectors.locationName, name);
        this.typeValue(this.selectors.address, address);
        this.typeValue(this.selectors.city, city);
        this.typeValue(this.selectors.zip, zip);
    }
    selectUSA() {
        this.clickElement(this.selectors.selectCountry);
        cy.contains('United States').click();
    }
    selectCanada() {
        this.clickElement(this.selectors.selectCountry);
        cy.contains('Canada').click();
    }
    selectFranchisee(franchiseeName) {
        this.clickElement(this.selectors.assignFranchisseButton);
        this.typeValue(this.selectors.searchFranchisseInput, franchiseeName);
        cy.get(this.selectors.suggestionFranchisse).contains(franchiseeName).click();
        this.clickElement(this.selectors.saveFranchiseeButton);
    }
}
export default locationPage