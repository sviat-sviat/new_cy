import basePage from "../basic methods/basePage";


class brandSettings extends basePage {
    selectors = {
        logoUploadInput: 'input[type=file]',
        image: '[class*=upload] img'
    }


}


export default brandSettings