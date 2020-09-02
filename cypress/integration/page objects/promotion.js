import basePage from "../basic methods/basePage";

class promotionsPage extends basePage {
    selectors = {
        addPromotionHeaderButton: '[class*=common] button',
        searchInput: 'input[name=search]',
        addPromotionCenterButton: '[class*=content-center] button',
        activeOnlyToggle: '[class*="fluid"] [class*="switch-handle"]',
        //Add Promotion modal:
        categoryNameInput: '#categoryName',
        statusToggle: '[class=modal-content] [class="react-switch-handle"]',
        addAssetButton: '[class*=asset] button',
        assetItem: '[class="content_renderer"] button',
        selectAssetButton: '[class*="end mt"] button',
        nextButton: '[class="pl-0 row"] button',
        subcategoryNameInput: '#subcategoryName',
        addSubcategoryButton: '[class=d-flex] button',
        addedSubcategory: '[class="switch_wrapper"]',
        confirmButton: 'button[class*="ml-auto"]',
        modalTitle: '[class="modal-title"]',
        addedAsset: '[class=image]'
    }

    addSubcategory(subcategoryName) {
        this.typeValue(this.selectors.subcategoryNameInput, subcategoryName);
        this.clickElement(this.selectors.addSubcategoryButton);
        cy.contains(this.selectors.addedSubcategory, subcategoryName).should('be.visible');
        
    }
}
export default promotionsPage