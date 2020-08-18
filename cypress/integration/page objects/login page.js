import basePage from "../basic methods/basePage";

class loginPage extends basePage {
    selectors = {
        emailInput: '#email',
        passwordInput: '#password',
        loginButton: '[type=submit]'
    }

    login(email, password) {
        this.typeValue(this.selectors.emailInput, email || this.data.credentials.email)
        this.typeValue(this.selectors.passwordInput, password || this.data.credentials.password)
        this.clickElement(this.selectors.loginButton)
    }
}


export default loginPage