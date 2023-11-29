const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

const exchangeCurrency = () => {
    currency.changeAmount(amountElement.value);
    currency.exchange()
        .then(result => {
            ui.displayResult(result);
        })
        .catch(err => console.log(err));
}

const eventListeners = () => {
    amountElement.addEventListener("input", exchangeCurrency);

    firstSelect.addEventListener("change", () => {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
        exchangeCurrency();
    });

    secondSelect.addEventListener("change", () => {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
        exchangeCurrency();
    });
}

eventListeners();