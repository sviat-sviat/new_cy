import basePage from "../basic methods/basePage";

class assetsPage extends basePage {
    selectors = {
        campaignSizePreviewAssetsTab: '[id*="tab-Campaign Size Preview"]',
        offerPreviewAssetsTab: '[id*="tab-Offer"]',
        promotionAssetsTab: '[id="tab-Promotion Assets"]',
        addAssetHeaderButton: '[class*="common_search"] button',
        searchInput: '#search',
        addAssetCenterButton: '[class*="center container"] button',
        // Add Asset modal:
        uploadModal: '[class="modal-content"]',
        assetNameInput: '#assetName',
        addImageButton: '[class*="upload-container"] button',
        confirmButton: 'button[type=submit]',
        closeModalButton: '.close',
        uploadInput: 'input[type="file"]',
        typeDropdown: '[class=" css-1kbqrhi-control"]',
        urlInput: '#url',
        uploadedimage: '[class*=upload] img',
        assetsTable: '[class="react-table"]',
        modalTitle: '[class="modal-title"]',
        uploadedMP3: '[class*=upload] [data-icon="file-audio"]'
   
    }

    createImageAsset(name, image) {
        this.typeValue(this.selectors.assetNameInput, name)
        this.fileUpload(this.selectors.uploadInput, image)
        cy.get(this.selectors.uploadedimage).should("be.visible")
        this.clickElement(this.selectors.confirmButton)
    }

}
export default assetsPage