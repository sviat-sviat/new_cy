import basePage from "../basic methods/basePage";

class offerPage extends basePage {
    selectors = {
        addOfferHeaderButton: '[class*="common"] button',
        searchInput: '[class*="common"] input',
        activeOnlyToggle: '[class*=items] [class*="switch-handle"]',
        addOfferCenterButton: '[class*="center container"] button',
        //Add Offer modal:
        offerNameInput: '#offerName',
        offerDetailsInput: '#offerDetails',
        foodCostInput: '#foodCost',
        fAndPInput: '#fAndP',
        offerCodeInput: '#promotionCode',
        subcategoryDropdown: '[class=row]:nth-child(2) [class*=date] [class*=container]',
        drodownItem: '[id*=option]',
        statusToggle: '[class*=modal-cont] [class="react-switch-handle"]',
        nextButton: 'button[type=submit]',
        availableDay: '[class*="date"] [aria-disabled="false"]',
        activeDateInput: '[class*="onclickoutside"]',
        visibleStartDate: '[class="col-md-8"] [class=row]:nth-child(1) [class="col-md-6"]:nth-child(1) [class*="wrapper"]',
        visibleEndDate: '[class="col-md-8"] [class=row]:nth-child(1) [class="col-md-6"]:nth-child(2) [class*="wrapper"]',
        firstAvailableLaunchDate: '[class="col-md-8"] [class=row]:nth-child(2) [class="col-md-6"]:nth-child(1) [class*="wrapper"]',
        lastAvailableLaunchDate: '[class="col-md-8"] [class=row]:nth-child(2) [class="col-md-6"]:nth-child(2) [class*="wrapper"]',
        couponRedemptionStartOffsetInput: '#couponRedemptionStartOffset',
        couponRedemptionEndOffsetInput: '#couponRedemptionEndOffset',
        chooseSiteAssetButton: '[class*="pb-3 row"] button',
        chooseSocialButton: '[class*=content]:nth-child(2) [class*="picker_pre"]:nth-child(1) button',
        chooseBannersButton: '[class*=content]:nth-child(2) [class*="picker_pre"]:nth-child(2) button',
        chooseDirectionalButton: '[class*=content]:nth-child(2) [class*="picker_pre"]:nth-child(3) button',
        chooseStreamingTVButton: '[class*=content]:nth-child(3) [class*="picker_pre"]:nth-child(1) button',
        chooseStreamingVideoButton: '[class*=content]:nth-child(3) [class*="picker_pre"]:nth-child(2) button',
        chooseRadioButton: '[class*=content]:nth-child(3) [class*="picker_pre"]:nth-child(3) button',
        assetItem: '[class*=renderer] button',
        selectButtonOnAssetPicker: '[class*="ml-3 btn btn-danger"]',
        confirmButton: '[type="submit"]',
        x_LargeCampaignSizeEditButton: '[role="row"]:nth-child(4) button',
        finishCampaignSizeButton: '[type="submit"]',
        finishButton: '[class="pl-0 row"] [class*=ml]',
        editOfferbutton: '[class*=" btn-link"]'
    }
}
export default offerPage