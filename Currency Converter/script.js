const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convertButton');
const resultDisplay = document.getElementById('result');

// Fetching currency rates
async function fetchCurrencyData() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data;
}

// Populate currency select elements
async function populateCurrencySelects() {
    const currencyData = await fetchCurrencyData();
    const currencies = Object.keys(currencyData.rates);
    
    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrency.appendChild(optionTo);
    });
}

// Currency conversion
async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === '' || isNaN(amount)) {
        resultDisplay.textContent = 'Please enter a valid amount';
        return;
    }

    const currencyData = await fetchCurrencyData();
    const rate = currencyData.rates[to] / currencyData.rates[from];
    const convertedAmount = (amount * rate).toFixed(2);
    
    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
}

// Event listeners
convertButton.addEventListener('click', convertCurrency);
window.onload = populateCurrencySelects;
