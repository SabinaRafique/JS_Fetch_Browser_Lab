const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(response => response.json())
    .then(data => document.querySelector("p").innerText = "Country: " + data[0].name + ", Population: " + data[0].population)

    const sect = document.querySelector("#sect")
    const setData = document.createElement("p")
    sect.append(setData)   
}

getCountryByName("Peru");