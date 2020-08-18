import brand from "../page objects/brand"
import brandSettings from "../page objects/brand settings"

describe("Smoke test for main fuctionaluty (positive flow)", function (){
    const brandPO = new brand()
    const brandSettingsPO = new brandSettings()
    const name = brandPO.randomData.getRandomRangeString(2,22)
    const code = brandPO.randomData.getRandomBrandCode()  //"LZ"
    
    this.beforeEach(() => {
        cy.loginToTheSystem()
        
    })
    
    it("Brand with valid name and code can be created", () => {
        brandPO.createBrand(name, code)
        brandPO.checkTextPresence(brandPO.data.labels.brandSettings)
        brandPO.elementHasText(brandPO.header.selectors.selectedBrand, name)
       
    })

    it.only ("Brand Logo in valid format can be added", () => {
        const brandLogo = "Image#12.jpeg"
        brandPO.selectBrand("ki new brand")
        brandPO.checkTextPresence(brandPO.data.labels.brandSettings)
        brandPO.fileUpload(brandSettingsPO.selectors.logoUploadInput, brandLogo)
        cy.get(brandSettingsPO.selectors.image).should("be.visible")

    })
})


