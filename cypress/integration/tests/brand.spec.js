import brand from "../page objects/brand"

describe("Brand creation and settings", function (){
const brandPO = new brand()
const name = brandPO.randomData.getRandomRangeString(2,22)
const code = brandPO.randomData.getRandomBrandCode()  //"LZ"

this.beforeAll(() => {
    cy.loginToTheSystem()
    brandPO.createBrand(name, code)
})

it("BR4 - Brand with valid name and code can be created", () => {
    brandPO.checkTextPresence(brandPO.data.labels.brandSettings)
    brandPO.elementHasText(brandPO.header.selectors.selectedBrand, name)
    
})

it.only("BR2.1 - Brand can be selected in 'Select Brand' dropdown", () => {
    cy.loginToTheSystem()
    brandPO.clickElement(brandPO.header.selectors.selectBrandDropdown)
    brandPO.typeValue(brandPO.header.selectors.selectBrandDropdownInput, name)
    brandPO.clickElement(brandPO.header.selectors.itemsInDropdown)
    brandPO.checkTextPresence(brandPO.data.labels.brandSettings)
    brandPO.elementHasText(brandPO.header.selectors.selectedBrand, name)
})


})


