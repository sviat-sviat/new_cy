class randomValue {
    getRandomNumber(max) {
        return Math.floor(1 + Math.random() * Math.floor(max));
      };

    getRandomRangeNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      };

    getRandomEmail() {
      let strValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let strEmail = "";
      let strTmp;
      for (let i = 0; i < 10; i++) {
          strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
          strEmail = strEmail + strTmp;
      }
      strTmp = "";
      strEmail = strEmail + "@";
      for (let j = 0; j < 8; j++) {
          strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
          strEmail = strEmail + strTmp;
      }
      strEmail = strEmail + ".com"
      return strEmail;
    }

    getRandomString(characterLength) {
        let randomText = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < characterLength; i++) {
          randomText += possible.charAt(Math.floor(Math.random() * possible.length));
          }
        return randomText;
      };

    getRandomRangeString(min, max) {
        const characterLength = Math.floor(Math.random() * (max - min) ) + min;
        return this.getRandomString(characterLength)
      }; 

    getRandomBrandCode() {
          let brandCode = '';
          let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          for (let i = 0; i < 2; i++) {
            brandCode += possible.charAt(Math.floor(Math.random() * possible.length));
            }
          return brandCode
      };
}

export default randomValue