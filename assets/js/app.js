const searchButton = document.getElementById('search-btn')
const inputBox = document.getElementById('countryBox')
const resultField = document.getElementById('result')

const getResquest = async () => {
    let countryName = inputBox.value
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    
    try {
        let response = await fetch(finalURL);
        let data = await response.json()
        let initialData = await data[0];
        resultField.innerHTML = `
        <img src="${initialData.flags.svg}" class="flag-img">
        <h2>${initialData.name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${initialData.capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${initialData.continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${initialData.population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${initialData.currencies[Object.keys(initialData.currencies)].name
            } - ${Object.keys(initialData.currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">            
                <h4>Common Languages:</h4>
                <span>
                    ${Object.values(initialData.languages)
                .toString()
                .split(",")
                .join(", ")}
                </span>
            </div>
        </div>
        `;

    } catch (e) {
        if (inputBox.length == 0) {
            resultField.innerHTML =  `<h3>The input field cannot be empty</h3>`;
        }
        else {
            resultField.innerHTML= `<h3> enter a valid name</h3> `;
        }
    }
}

searchButton.addEventListener('click', getResquest)
