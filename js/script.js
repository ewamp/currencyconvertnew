console.log("Witam wszystkich developerów, którzy tutaj zaglądają!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateUSD = 3.7775;
let rateGBP = 5.0419;
let rateEUR = 4.2455;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "EUR":
            result = amount / rateEUR;
    }

    resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)} ${currency}
    </strong>`;

});