class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://v6.exchangerate-api.com/v6/fb4a03ead5123a2796db8919/latest/";
        this.amount = null;
    }
    exchange = () => {
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
            const parity = data.conversion_rates[this.secondCurrency];
            const numberAmount = Number(this.amount);
            let result = parity*numberAmount;
            resolve(result);})
            .catch(err => reject(err));
        })
    }
    changeAmount = amount => {
        this.amount = amount;
    }
    changeFirstCurrency = newFirstCurrency => {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency = newSecondCurrency => {
        this.secondCurrency = newSecondCurrency;
    }
}