import brand from "../page objects/brand"
import brandSettings from "../page objects/brand settings"
import franchiseesPage from "../page objects/franchisee"
import locationPage from "../page objects/location"
import assetsPage from "../page objects/assets"
import promotionsPage from "../page objects/promotion"
import offerPage from "../page objects/offers"
import customerSite from "../page objects/customer site"
import campaignsPage from "../page objects/campaigns"

describe("Smoke test for main fuctionaluty (positive flow)", function (){
    const brandPO = new brand()
    const brandSettingsPO = new brandSettings()
    const franchiseesPO = new franchiseesPage ()
    const locationPO = new locationPage()
    const assetsPO = new assetsPage()
    const promotionPO = new promotionsPage()
    const offerPO = new offerPage()
    const customerSitePO = new customerSite()
    const campaignsPO = new campaignsPage()
    const brandName = "Brand " + brandPO.randomData.getRandomRangeString(5,10)                         // field characters limitation 2-22
    const brandCode = brandPO.randomData.getRandomBrandCode()                       
    const franchiseeEmail = brandPO.randomData.getRandomEmail().toLowerCase()
    const franchiseeFirstName = "FirstN" + brandPO.randomData.getRandomRangeString(1,5)                // field characters limitation 2-22
    const franchiseeLastName = "LastN" + brandPO.randomData.getRandomRangeString(1,5)                  // field characters limitation 2-22
    const unitNumber = "Unit " + locationPO.randomData.getRandomRangeString(1,5)                       // field characters limitation 1-10
    const locationName = "Location " + locationPO.randomData.getRandomRangeString(1,5)                 // field characters limitation 1-50
    const campaignAssetImageName = "ImageAsset" + assetsPO.randomData.getRandomRangeString(1,5)        // field characters limitation 5-50
    const campaignAssetMP3Name = "MP3Asset" + assetsPO.randomData.getRandomRangeString(1,5)            // field characters limitation 5-50
    const campaignAssetYouTubeName = "YouTubeAsset" + assetsPO.randomData.getRandomRangeString(1,5)    // field characters limitation 5-50
    const offerPreviewAssetName = "OfferAsset" + assetsPO.randomData.getRandomRangeString(1,5)         // field characters limitation 5-50
    const promotionAssetName = "PromoAsset" + assetsPO.randomData.getRandomRangeString(1,5)            // field characters limitation 5-50
    const promotionName = "Promotion " + promotionPO.randomData.getRandomRangeString(1,5)              // field characters limitation 2-30
    const subcategoryName = "Subcategory " + promotionPO.randomData.getRandomRangeString(1,5)          // field characters limitation 1-25
    const offerName = "Offer " + offerPO.randomData.getRandomRangeString(1,5)                          // field characters limitation 3-50
    const offerCode = "Code " + offerPO.randomData.getRandomRangeString(1,5)                           // field characters limitation 1-50
    let orderRefNumber 

    this.beforeEach(() => {
        cy.loginToTheSystem()
    })
    
       
    it("Brand with valid name and code can be created", () => { 
        brandPO.createBrand(brandName, brandCode)
        brandPO.checkTextPresence(brandPO.data.labels.brandSettings)    //verifies Settings page is opened
        brandPO.elementHasText(brandPO.header.selectors.selectedBrand, brandName)   //Verifies created Brand is displayed in "Select Brand" dropdown   
       
    })

    it("Brand Logo in valid format can be added", () => {
        const brandLogo = "brandLogo.jpeg"
        brandPO.selectBrand(brandName)  
        brandPO.checkTextPresence(brandPO.data.labels.brandSettings)
        brandPO.fileUpload(brandSettingsPO.selectors.logoUploadInput, brandLogo)
        cy.get(brandSettingsPO.selectors.image).should("be.visible")

    })

    it("Franchisee with data in required fields can be created", () => {        
        brandPO.selectBrand(brandName)  
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.franchisees)
        franchiseesPO.clickAddUserButton()
        franchiseesPO.addUserWithRequiredFields(franchiseeEmail, franchiseeFirstName, franchiseeLastName)
        franchiseesPO.checkTextPresence(franchiseeLastName) //verifies created franchisee is displayed in the table
   
    })

    it('Location with valid data and added Franchisee can be created', () => {
        brandPO.selectBrand(brandName) 
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.location)
        brandPO.checkTextPresence(brandPO.data.labels.addLocationButton)
        cy.reload()
        locationPO.clickOnText(locationPO.data.labels.addLocationButton)
        locationPO.selectUSA()
        locationPO.clickElement(locationPO.selectors.selectState)
        locationPO.clickOnText(locationPO.data.validLocationUS.state)
        locationPO.enterAddress(unitNumber, locationName, locationPO.data.validLocationUS.address, locationPO.data.validLocationUS.city, locationPO.data.validLocationUS.zip)
        cy.contains('Move Marker to Precise Location').should('be.visible');
        locationPO.clickElement(locationPO.selectors.nextButton)
        locationPO.selectFranchisee(franchiseeLastName) //Franchisee is added
        locationPO.clickElement(locationPO.selectors.finishButton)
        franchiseesPO.checkTextPresence(unitNumber) //verifies created location is displayed in the table
    });

    
    it('Campaign Size Preview Asset can be added', () => {
        const campaginImageAsset = "campaignImageAsset.jpg"
        const campaginMP3Asset = "campaignMP3Asset.mp3"
        const YoutubeID = assetsPO.randomData.getRandomRangeString(5,15) 
        
        brandPO.selectBrand(brandName) 
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.assets)
        assetsPO.clickElement(assetsPO.selectors.addAssetHeaderButton)
        assetsPO.elementHasText(assetsPO.selectors.modalTitle, assetsPO.data.modalsHeaders.addCampaignSizePreviewAsset)
        assetsPO.createImageAsset(campaignAssetImageName, campaginImageAsset)
        assetsPO.checkTextPresence(campaignAssetImageName)     // asset with image created

        assetsPO.clickElement(assetsPO.selectors.addAssetHeaderButton)
        assetsPO.clickElement(assetsPO.selectors.typeDropdown)
        assetsPO.clickOnText("MP3")
        assetsPO.typeValue(assetsPO.selectors.assetNameInput, campaignAssetMP3Name)
        assetsPO.fileUpload(assetsPO.selectors.uploadInput, campaginMP3Asset)
        cy.get(assetsPO.selectors.uploadedMP3).should("be.visible")
        assetsPO.clickElement(assetsPO.selectors.confirmButton)
        assetsPO.checkTextPresence(campaignAssetMP3Name)    // asset with mp3 created
        
        assetsPO.clickElement(assetsPO.selectors.addAssetHeaderButton)
        assetsPO.clickElement(assetsPO.selectors.typeDropdown)
        assetsPO.clickOnText("YouTube ID")
        assetsPO.typeValue(assetsPO.selectors.assetNameInput, campaignAssetYouTubeName)
        assetsPO.typeValue(assetsPO.selectors.urlInput, YoutubeID)
        assetsPO.clickElement(assetsPO.selectors.confirmButton)
        assetsPO.checkTextPresence(campaignAssetYouTubeName)  // asset with youtube id created
    });

    it('Offer Preview Asset can be added', () => {
        const offerPreviewImageAsset = "offerPreviewAsset.jpeg" 

        brandPO.selectBrand(brandName) 
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.assets)
        assetsPO.clickElement(assetsPO.selectors.offerPreviewAssetsTab)
        assetsPO.clickElement(assetsPO.selectors.addAssetHeaderButton)
        assetsPO.elementHasText(assetsPO.selectors.modalTitle, assetsPO.data.modalsHeaders.addOfferPreviewAsset)
        assetsPO.createImageAsset(offerPreviewAssetName, offerPreviewImageAsset)
        assetsPO.checkTextPresence(offerPreviewAssetName) 
    })

    it('Promotion Asset can be added', () => {
        const promotionImageAsset = "promotionAsset.png"       

        brandPO.selectBrand(brandName) 
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.assets)
        assetsPO.clickElement(assetsPO.selectors.promotionAssetsTab)
        assetsPO.clickElement(assetsPO.selectors.addAssetHeaderButton)
        assetsPO.elementHasText(assetsPO.selectors.modalTitle, assetsPO.data.modalsHeaders.addPromotionAsset)
        assetsPO.createImageAsset(promotionAssetName, promotionImageAsset)
        assetsPO.checkTextPresence(promotionAssetName)
    })

  
    it('Promotion can be created', () => {
        brandPO.selectBrand(brandName) 
        brandPO.clickElement(brandPO.leftMenu.selectors.brandSetup)
        brandPO.clickElement(brandPO.leftMenu.selectors.promotions)
        promotionPO.clickElement(promotionPO.selectors.addPromotionHeaderButton)
        promotionPO.elementHasText(promotionPO.selectors.modalTitle, promotionPO.data.modalsHeaders.addPromotion)
        promotionPO.typeValue(promotionPO.selectors.categoryNameInput, promotionName)
        promotionPO.clickElement(promotionPO.selectors.statusToggle)
        promotionPO.clickElement(promotionPO.selectors.addAssetButton)
        promotionPO.clickOnText(promotionAssetName) 
        promotionPO.clickElement(promotionPO.selectors.selectAssetButton)
        cy.get(promotionPO.selectors.addedAsset).should('be.visible')
        promotionPO.clickElement(promotionPO.selectors.nextButton)
        promotionPO.addSubcategory(subcategoryName)
        promotionPO.clickElement(promotionPO.selectors.confirmButton)
        promotionPO.checkTextPresence(promotionName) //verifies created promotion is displayed in the table
        
    })

    it('Offer can be created and activated', () => {
        const imageMedia = [offerPO.selectors.chooseSocialButton, offerPO.selectors.chooseBannersButton, offerPO.selectors.chooseDirectionalButton]
        const videoMedia = [offerPO.selectors.chooseStreamingTVButton, offerPO.selectors.chooseStreamingVideoButton]

        brandPO.selectBrand(brandName) 
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.offers)
        offerPO.clickElement(offerPO.selectors.addOfferHeaderButton)
        offerPO.typeValue(offerPO.selectors.offerNameInput, offerName)
        offerPO.typeValue(offerPO.selectors.offerCodeInput, offerCode)
        offerPO.clickElement(offerPO.selectors.subcategoryDropdown)
        cy.contains(offerPO.selectors.drodownItem, subcategoryName).click() 
        offerPO.clickElement(offerPO.selectors.nextButton)          // Offer Innformation Stage passed

        offerPO.clickElement(offerPO.selectors.visibleStartDate)
        cy.get(offerPO.selectors.availableDay).first().click()
        offerPO.clickElement(offerPO.selectors.visibleEndDate)
        cy.get(offerPO.selectors.availableDay).first().click()
        offerPO.clickElement(offerPO.selectors.firstAvailableLaunchDate)
        cy.get(offerPO.selectors.availableDay).first().click()
        offerPO.clickElement(offerPO.selectors.lastAvailableLaunchDate)
        cy.get(offerPO.selectors.availableDay).first().click()
        offerPO.typeValue(offerPO.selectors.couponRedemptionStartOffsetInput, "0")
        offerPO.typeValue(offerPO.selectors.couponRedemptionEndOffsetInput, "0")
        offerPO.clickElement(offerPO.selectors.nextButton)              // Schedule Stage passed
       
        offerPO.clickElement(offerPO.selectors.chooseSiteAssetButton)
        offerPO.clickOnText(offerPreviewAssetName)  
        offerPO.clickElement(offerPO.selectors.selectButtonOnAssetPicker)
        for(const element of imageMedia) {
            offerPO.clickElement(element)
            offerPO.clickOnText (campaignAssetImageName) 
            offerPO.clickElement(offerPO.selectors.selectButtonOnAssetPicker)
        }
        for(const element of videoMedia) {
            offerPO.clickElement(element)
            offerPO.clickOnText (campaignAssetYouTubeName) 
            offerPO.clickElement(offerPO.selectors.selectButtonOnAssetPicker)
        }
        offerPO.clickElement(offerPO.selectors.chooseRadioButton)
        offerPO.clickOnText(campaignAssetMP3Name)  
        offerPO.clickElement(offerPO.selectors.selectButtonOnAssetPicker)
        offerPO.clickElement(offerPO.selectors.confirmButton)           // Assets Stage passed
        
        offerPO.clickElement(offerPO.selectors.x_LargeCampaignSizeEditButton) 
        offerPO.clickElement(offerPO.selectors.statusToggle)
        offerPO.clickElement(offerPO.selectors.finishCampaignSizeButton)
        offerPO.clickElement(offerPO.selectors.finishButton)
        offerPO.checkTextPresence(offerName)                        //Offer created
        
        cy.get(offerPO.selectors.editOfferbutton).first().click()
        offerPO.clickElement(offerPO.selectors.statusToggle)
        offerPO.clickElement(offerPO.selectors.nextButton)
        offerPO.clickElement(offerPO.selectors.nextButton)
        offerPO.clickElement(offerPO.selectors.confirmButton)
        offerPO.clickElement(offerPO.selectors.finishButton)
        offerPO.clickElement(offerPO.selectors.activeOnlyToggle)
        offerPO.checkTextPresence("Active Only")
        offerPO.checkTextPresence(offerName)                 //Offer activated
       
    })

    it('Franchisee can be activated and order can be done', () => {
        brandPO.selectBrand(brandName) 
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.franchisees)
        franchiseesPO.openActivationLink()
        customerSitePO.activateFranchisee()  // Franchisee activated
        
        customerSitePO.elementHasText(customerSitePO.selectors.unitNumberDisplayed, "Unit # " + unitNumber) 
        customerSitePO.checkTextPresence("Hello " + franchiseeFirstName + "!") 
        customerSitePO.clickElement(customerSitePO.selectors.bottomNavigationFirstButton)
        customerSitePO.clickOnText(promotionName) 
        customerSitePO.clickElement(customerSitePO.selectors.bottomNavigationSecondButton)
        customerSitePO.elementHasText(customerSitePO.selectors.subcategoryDisplayed, subcategoryName)
        customerSitePO.clickOnText(offerName) 
        customerSitePO.clickElement(customerSitePO.selectors.bottomNavigationSecondButton)
        customerSitePO.clickElement(customerSitePO.selectors.expandCampaignSize)
        customerSitePO.clickElement(customerSitePO.selectors.selectButton)
        customerSitePO.clickElement(customerSitePO.selectors.bottomNavigationSecondButton)
        customerSitePO.clickElement(customerSitePO.selectors.termsOfUseCheckbox)
        customerSitePO.clickElement(customerSitePO.selectors.bottomNavigationSecondButton)
        customerSitePO.addCreditCardDuringOrderMaking(customerSitePO.data.franchiseeData.validCardNumber, customerSitePO.data.franchiseeData.validCardDate, customerSitePO.data.franchiseeData.validCardCvc, customerSitePO.data.franchiseeData.validCardZip)
        customerSitePO.clickElement(customerSitePO.selectors.authoriseChargesCkeckbox)
        customerSitePO.clickElement(customerSitePO.selectors.launchCampaignButton)
        customerSitePO.checkTextPresence("Congrats " + franchiseeFirstName + "!") //Order is done
        cy.get(customerSitePO.selectors.refNumberDisplayed).then(($order) => {
        orderRefNumber = $order.text().slice(-8)                    //REf Number copied
        
        })
    })

    it('Created order is displayed at Campaigns page', () => {
        const campaignsData = [campaignsPO.data.validLocationUS.address, offerName, offerCode, promotionName, subcategoryName, franchiseeEmail]
    
        brandPO.selectBrand(brandName)
        brandPO.leftMenu.openPage(brandPO.leftMenu.selectors.campaigns)
        campaignsPO.checkTextPresence(campaignsPO.data.labels.campaignsPage)
        campaignsPO.checkTextPresence(orderRefNumber)   //verifies Order REf#
        campaignsPO.checkTextPresence(unitNumber) //verifies Unit Number
        cy.get(campaignsPO.selectors.campaignRefNumberDisplayed).trigger("mouseover")      
        for (const element of campaignsData) {
            campaignsPO.checkTextPresence(element) //verifies data at popup after hovering Campaign REf#
        }         
    })


})

