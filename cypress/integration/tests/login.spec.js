import loginPage from "../page objects/login page"

describe("Login page", function (){
const loginPO = new loginPage()
const selector = loginPO.selectors
it ("User can login with valid credentials", () => {
    cy.loginToTheSystem()
    loginPO.checkTextPresence(loginPO.data.labels.adminPanel)
}
)

})
