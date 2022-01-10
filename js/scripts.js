"use strict";

const menuToggle = document.getElementById("menuToggle");
const menuNav = document.getElementById("menuNav"); 

const exploreNavButton = document.getElementById("exploreNavButton");
const locationsNavButton = document.getElementById("locationsNavButton");
const recommendedNavButton = document.getElementById("recommendedNavButton");
const aboutNavButton = document.getElementById("aboutNavButton");

const destVenice = document.getElementById("destVenice");
const destNewYork = document.getElementById("destNewYork");
const destLondon = document.getElementById("destLondon");
const destParis = document.getElementById("destParis");
const destSaintPetersburg = document.getElementById("destSaintPetersburg");
const destBeijing = document.getElementById("destBeijing");
const destRioDeJaneiro = document.getElementById("destRioDeJaneiro");
const destBridgetown = document.getElementById("destBridgetown");
const destBergen = document.getElementById("destBergen");
const destBangkok = document.getElementById("destBangkok");
const destSydney = document.getElementById("destSydney");
const destAthens = document.getElementById("destAthens");
const destinations = document.getElementsByClassName("destination");

const selectedDestinationDiv = document.getElementById("selectedDestinationDiv");
const selectedLocation = document.getElementById("selectedLocation");
const selectedTags = document.getElementById("selectedTags");
const selectedDescription = document.getElementById("selectedDescription");
const airportPicker = document.getElementById("airportPicker");
const departureDatePicker = document.getElementById("departureDatePicker");
const returnDatePicker = document.getElementById("returnDatePicker");
const checkFlightsbtn = document.getElementById("checkFlightsbtn");
const backbtn = document.getElementById("backbtn"); 

const locationsDiv = document.getElementById("locationsDiv");
const locationsList = document.getElementById("locationsList");
let cOrder = "asc";
let lOrder = "asc";
const countryHeading = document.getElementById("countryHeading");
const locationHeading = document.getElementById("locationHeading");

const recommendedDiv = document.getElementById("recommendedDiv"); 
const previouslyRecommended = document.getElementById("previouslyRecommended");
const deleteRecommended = document.getElementById("deleteRecommended");
let capitalQuestion = document.querySelector('input[name="capital"]:checked');
let cultureQuestion = document.querySelector('input[name="culture"]:checked');
let historyQuestion = document.querySelector('input[name="history"]:checked');
let landscapesQuestion = document.querySelector('input[name="landscapes"]:checked');
let nightlifeQuestion = document.querySelector('input[name="nightlife"]:checked');
let romanticQuestion = document.querySelector('input[name="romantic"]:checked');
let tropicalQuestion = document.querySelector('input[name="tropical"]:checked');
const capitalQuestionDiv = document.getElementById("capitalQuestionDiv");
const cultureQuestionDiv = document.getElementById("cultureQuestionDiv");
const historyQuestionDiv = document.getElementById("historyQuestionDiv");
const landscapesQuestionDiv = document.getElementById("landscapesQuestionDiv");
const nightlifeQuestionDiv = document.getElementById("nightlifeQuestionDiv");
const romanticQuestionDiv = document.getElementById("romanticQuestionDiv");
const tropicalQuestionDiv = document.getElementById("tropicalQuestionDiv");
const submitbtn = document.getElementById("submitbtn");

const aboutDiv = document.getElementById("aboutDiv");

// const tags = ["Capital", "Culture", "History", "Landscapes", "Nightlife", "Romantic", "Tropical"];   // Commented and here to remind the reader what the tags implemented are.

const toggleMenu = () => {
    menuNav.classList.toggle("menu-toggle");
    if (menuToggle.textContent == "≡") {
        menuToggle.textContent = "X";
    } else {
        menuToggle.textContent = "≡";
    }
}

const displayPicturedDestinations = (display) => {
    for (let i = 0; i < destinations.length; i++) {
        destinations[i].style.display = display;
    }
}

const displayUniqueDestination = (display) => {
    selectedDestinationDiv.style.display = display;
}

const displayLocationsPage = (display) => {
    locationsDiv.style.display = display;
}

const displayRecommendedPage = (display) => {
    recommendedDiv.style.display = display;
}

const displayAboutPage = (display) => {
    aboutDiv.style.display = display;
}

const exploreNavButtonHandler = () => {
    displayPicturedDestinations("flex");
    displayUniqueDestination("none");
    displayLocationsPage("none");
    displayRecommendedPage("none");
    displayAboutPage("none");

    airportPicker.selectedIndex = 0;
    departureDatePicker.value = "";
    returnDatePicker.value = "";

    exploreNavButton.classList.add("selectedNav");
    locationsNavButton.classList.remove("selectedNav");
    recommendedNavButton.classList.remove("selectedNav");
    aboutNavButton.classList.remove("selectedNav");
}

const locationsNavButtonHandler = () => {
    displayPicturedDestinations("none");
    displayUniqueDestination("none");
    displayLocationsPage("flex");
    displayRecommendedPage("none");
    displayAboutPage("none");

    airportPicker.selectedIndex = 0;
    departureDatePicker.value = "";
    returnDatePicker.value = "";

    exploreNavButton.classList.remove("selectedNav");
    locationsNavButton.classList.add("selectedNav");
    recommendedNavButton.classList.remove("selectedNav");
    aboutNavButton.classList.remove("selectedNav");
}

const recommendedNavButtonHandler = () => {
    displayPicturedDestinations("none");
    displayUniqueDestination("none");
    displayLocationsPage("none");
    displayRecommendedPage("block");
    displayAboutPage("none");

    capitalQuestionDiv.classList.remove("missingAnswer");
    cultureQuestionDiv.classList.remove("missingAnswer");
    historyQuestionDiv.classList.remove("missingAnswer");
    landscapesQuestionDiv.classList.remove("missingAnswer");
    nightlifeQuestionDiv.classList.remove("missingAnswer");
    romanticQuestionDiv.classList.remove("missingAnswer");
    tropicalQuestionDiv.classList.remove("missingAnswer");

    exploreNavButton.classList.remove("selectedNav");
    locationsNavButton.classList.remove("selectedNav");
    recommendedNavButton.classList.add("selectedNav");
    aboutNavButton.classList.remove("selectedNav");
}

const aboutNavButtonHandler = () => {
    displayPicturedDestinations("none");
    displayUniqueDestination("none");
    displayLocationsPage("none");
    displayRecommendedPage("none");
    displayAboutPage("block");

    exploreNavButton.classList.remove("selectedNav");
    locationsNavButton.classList.remove("selectedNav");
    recommendedNavButton.classList.remove("selectedNav");
    aboutNavButton.classList.add("selectedNav");
}

const backExploreButtonHandler = () => {
    window.scrollTo(0, 0);
    updateCurrentDestination("", "", "", "");
}

const backRecommendedButtonHandler = () => {
    window.scrollTo(0, 0);
    recommendedNavButtonHandler();
}

const backLocationsButtonHandler = () => {
    window.scrollTo(0, 0);
    locationsNavButtonHandler();
}

const updateBackButtonHandler = () => {
    if (recommendedDiv.style.display == "block") {
        backbtn.removeEventListener("click", backExploreButtonHandler);
        backbtn.removeEventListener("click", backLocationsButtonHandler);
        backbtn.addEventListener("click", backRecommendedButtonHandler);
    } else if (locationsDiv.style.display == "flex") {
        backbtn.removeEventListener("click", backExploreButtonHandler);
        backbtn.removeEventListener("click", backRecommendedButtonHandler);
        backbtn.addEventListener("click", backLocationsButtonHandler);
    } else {
        backbtn.removeEventListener("click", backRecommendedButtonHandler);
        backbtn.removeEventListener("click", backLocationsButtonHandler);
        backbtn.addEventListener("click", backExploreButtonHandler);
    }
}

const updateCurrentDestination = (country, location, description, tags) => {

    selectedLocation.textContent = `${location}, ${country}`;
    selectedTags.textContent = tags;
    selectedDescription.innerHTML = description;

    if (destinations[0].style.display == "flex" || destinations[0].style.display == '') {
        displayPicturedDestinations("none");
        displayUniqueDestination("block");
    } else {
        displayPicturedDestinations("flex");
        displayUniqueDestination("none");
    }
}

const destVeniceClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destVenice.innerText.split('\n')[0].split(',')[1].substring(1),
      destVenice.innerText.split('\n')[0].split(',')[0],
      destVenice.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destVenice.innerText.split('\n')[1]
    );
}

const destNewYorkClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destNewYork.innerText.split('\n')[0].split(',')[1].substring(1),
      destNewYork.innerText.split('\n')[0].split(',')[0],
      destNewYork.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destNewYork.innerText.split('\n')[1]
    );
}

const destLondonClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destLondon.innerText.split('\n')[0].split(',')[1].substring(1),
      destLondon.innerText.split('\n')[0].split(',')[0],
      destLondon.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destLondon.innerText.split('\n')[1]
    );
}

const destParisClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destParis.innerText.split('\n')[0].split(',')[1].substring(1),
      destParis.innerText.split('\n')[0].split(',')[0],
      destParis.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destParis.innerText.split('\n')[1]
    );
}

const destSaintPetersburgClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destSaintPetersburg.innerText.split('\n')[0].split(',')[1].substring(1),
      destSaintPetersburg.innerText.split('\n')[0].split(',')[0],
      destSaintPetersburg.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destSaintPetersburg.innerText.split('\n')[1]
    );

}

const destBeijingClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destBeijing.innerText.split('\n')[0].split(',')[1].substring(1),
      destBeijing.innerText.split('\n')[0].split(',')[0],
      destBeijing.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destBeijing.innerText.split('\n')[1]
    );
}

const destRioDeJaneiroClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destRioDeJaneiro.innerText.split('\n')[0].split(',')[1].substring(1),
      destRioDeJaneiro.innerText.split('\n')[0].split(',')[0],
      destRioDeJaneiro.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destRioDeJaneiro.innerText.split('\n')[1]
    );
}

const destBridgetownClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destBridgetown.innerText.split('\n')[0].split(',')[1].substring(1),
      destBridgetown.innerText.split('\n')[0].split(',')[0],
      destBridgetown.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destBridgetown.innerText.split('\n')[1]
    );
}

const destBergenClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destBergen.innerText.split('\n')[0].split(',')[1].substring(1),
      destBergen.innerText.split('\n')[0].split(',')[0],
      destBergen.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destBergen.innerText.split('\n')[1]
    );
}

const destBangkokClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destBangkok.innerText.split('\n')[0].split(',')[1].substring(1),
      destBangkok.innerText.split('\n')[0].split(',')[0],
      destBangkok.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destBangkok.innerText.split('\n')[1]
    );
}

const destSydneyClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destSydney.innerText.split('\n')[0].split(',')[1].substring(1),
      destSydney.innerText.split('\n')[0].split(',')[0],
      destSydney.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destSydney.innerText.split('\n')[1]
    );
}

const destAthensClickHandler = () => {
    window.scrollTo(0, 0);
    updateBackButtonHandler();
    exploreNavButtonHandler();
    updateCurrentDestination(
      destAthens.innerText.split('\n')[0].split(',')[1].substring(1),
      destAthens.innerText.split('\n')[0].split(',')[0],
      destAthens.innerHTML.split('<div class="destDesc">')[1].split('<p class')[0],
      destAthens.innerText.split('\n')[1]
    );
}

const checkFlightsButtonHandler = () => {

    let departureDate = String(departureDatePicker.value);
    let returnDate = String(returnDatePicker.value);

    if (departureDate != "" || departureDate != "") {
        departureDate = departureDate.replace("-", "").replace("-", "");
        returnDate = returnDate.replace("-", "").replace("-", "");

        let today = new Date();
        let date = ``;
        let month = today.getMonth() + 1;

        if (today.getMonth() <= 9) {
            date = `${today.getFullYear()}0${month}${today.getDate()}`;
        } else {
            date = `${today.getFullYear()}${month}${today.getDate()}`;
        }

        date = parseInt(date);
        departureDate = parseInt(departureDate);
 
        if (departureDate - date > 0) {
            if (departureDate < returnDate) {
                departureDate = departureDate % 20000000;
                returnDate = parseInt(returnDate) % 20000000;

                let destinationID = "";

                switch (selectedLocation.innerText) {
                    case "Venice, Italy": destinationID = "veni"; break;
                    case "New York, USA": destinationID = "nyca"; break;
                    case "London, United Kingdom": destinationID = "lond"; break;
                    case "Paris, France": destinationID = "pari"; break;
                    case "Saint Petersburg, Russia": destinationID = "led"; break;
                    case "Beijing, China": destinationID = "bjsa"; break;
                    case "Rio De Janeiro, Brazil": destinationID = "rioa"; break;
                    case "Bridgetown, Barbados": destinationID = "bb"; break;
                    case "Bergen, Norway": destinationID = "bgo"; break;
                    case "Bangkok, Thailand": destinationID = "bkkt"; break;
                    case "Sydney, Australia": destinationID = "syd"; break;
                    case "Athens, Greece": destinationID = "ath"; break;
                }

                if (airportPicker.value != destinationID) {

                    let url = `https://www.skyscanner.net/transport/flights/${airportPicker.value}/${destinationID}/${departureDate}/${returnDate}`;
                    window.open(url);

                } else {
                    alert("You cannot fly to where you are taking off from.");
                }

            } else {
                alert("Return date is before or equal to the departure date.");
            }

        } else {
            alert("Departure date is in the past.");
        }
    } else {
        alert("Dates entered are invalid.");
    }

}

const countryHeadingClickHandler = () => {

    let listElements = Array.from(locationsList.children);
    let head = listElements[0];
    listElements = listElements.slice(1);

    if (cOrder == "asc") {

        listElements.sort(function (a, b) {
            if (a.children[0].innerHTML.toLowerCase() > b.children[0].innerHTML.toLowerCase()) {
                return 1;
            }
            if (b.children[0].innerHTML.toLowerCase() > a.children[0].innerHTML.toLowerCase()) {
                return -1;
            }
            return 0;
        });

        cOrder = "desc";

        countryHeading.innerHTML = "<strong>Country&#11014;</strong>";
        locationHeading.innerHTML = "<strong>Location</strong>";

    } else if (cOrder == "desc") {

        listElements.sort(function (a, b) {
            if (a.children[0].innerHTML.toLowerCase() < b.children[0].innerHTML.toLowerCase()) {
                return 1;
            }
            if (b.children[0].innerHTML.toLowerCase() < a.children[0].innerHTML.toLowerCase()) {
                return -1;
            }
            return 0;
        });

        cOrder = "asc";

        countryHeading.innerHTML = "<strong>Country&#11015;</strong>";
        locationHeading.innerHTML = "<strong>Location</strong>";

    }

    listElements.unshift(head);

    locationsList.innerHTML = "";

    for (let i = 0; i < listElements.length; i++) {
        locationsList.appendChild(listElements[i]);
    }

}

const locationHeadingClickHandler = () => {

    let listElements = Array.from(locationsList.children);
    let head = listElements[0];
    listElements = listElements.slice(1);

    if (cOrder == "asc") {

        listElements.sort(function (a, b) {
            if (a.children[1].innerHTML.toLowerCase() > b.children[1].innerHTML.toLowerCase()) {
                return 1;
            }
            if (b.children[1].innerHTML.toLowerCase() > a.children[1].innerHTML.toLowerCase()) {
                return -1;
            }
            return 0;
        });

        cOrder = "desc";

        locationHeading.innerHTML = "<strong>Location&#11014;</strong>";
        countryHeading.innerHTML = "<strong>Country</strong>";

    } else if (cOrder == "desc") {

        listElements.sort(function (a, b) {
            if (a.children[1].innerHTML.toLowerCase() < b.children[1].innerHTML.toLowerCase()) {
                return 1;
            }
            if (b.children[1].innerHTML.toLowerCase() < a.children[1].innerHTML.toLowerCase()) {
                return -1;
            }
            return 0;
        });

        cOrder = "asc";

        locationHeading.innerHTML = "<strong>Location&#11015;</strong>";
        countryHeading.innerHTML = "<strong>Country</strong>";

    }

    listElements.unshift(head);

    locationsList.innerHTML = "";

    for (let i = 0; i < listElements.length; i++) {
        locationsList.appendChild(listElements[i]);
    }

}


const deleteRecommendedButtonHandler = () => {
    localStorage.removeItem("recommended");
    deleteRecommended.classList.add("hide");
    previouslyRecommended.classList.add("hide");
}

const submitButtonHandler = () => {
    capitalQuestion = document.querySelector('input[name="capital"]:checked');
    cultureQuestion = document.querySelector('input[name="culture"]:checked');
    historyQuestion = document.querySelector('input[name="history"]:checked');
    landscapesQuestion = document.querySelector('input[name="landscapes"]:checked');
    nightlifeQuestion = document.querySelector('input[name="nightlife"]:checked');
    romanticQuestion = document.querySelector('input[name="romantic"]:checked');
    tropicalQuestion = document.querySelector('input[name="tropical"]:checked');

    let check = true;

    if (capitalQuestion == null) {
        capitalQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        capitalQuestionDiv.classList.remove("missingAnswer");
        capitalQuestion = parseInt(capitalQuestion.value);
    }
    if (cultureQuestion == null) {
        cultureQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        cultureQuestionDiv.classList.remove("missingAnswer");
        cultureQuestion = parseInt(cultureQuestion.value);
    }
    if (historyQuestion == null) {
        historyQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        historyQuestionDiv.classList.remove("missingAnswer");
        historyQuestion = parseInt(historyQuestion.value);
    }
    if (landscapesQuestion == null) {
        landscapesQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        landscapesQuestionDiv.classList.remove("missingAnswer");
        landscapesQuestion = parseInt(landscapesQuestion.value);
    }
    if (nightlifeQuestion == null) {
        nightlifeQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        nightlifeQuestionDiv.classList.remove("missingAnswer");
        nightlifeQuestion = parseInt(nightlifeQuestion.value);
    }
    if (romanticQuestion == null) {
        romanticQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        romanticQuestionDiv.classList.remove("missingAnswer");
        romanticQuestion = parseInt(romanticQuestion.value);
    }
    if (tropicalQuestion == null) {
        tropicalQuestionDiv.classList.add("missingAnswer");
        check = false;
    } else {
        tropicalQuestionDiv.classList.remove("missingAnswer");
        tropicalQuestion = parseInt(tropicalQuestion.value);
    }

    if (check) {

        let answers = [capitalQuestion, cultureQuestion, historyQuestion, landscapesQuestion, nightlifeQuestion, romanticQuestion, tropicalQuestion];

        let venice = [4, 6, 6, 2, 2, 6, 2];
        let newyork = [4, 6, 3, 0, 6, 3, 0];
        let london = [6, 6, 6, 2, 6, 3, 0];
        let paris = [6, 6, 6, 2, 3, 6, 0];
        let saintpetersburg = [4, 6, 6, 2, 3, 3, 0];
        let beijing = [6, 6, 6, 2, 0, 2, 2];
        let rio = [3, 4, 2, 6, 6, 2, 6];
        let bridgetown = [2, 2, 0, 6, 6, 3, 4];
        let bergen = [3, 3, 6, 6, 2, 4, 2];
        let bangkok = [6, 6, 2, 2, 6, 0, 3];
        let sydney = [4, 6, 3, 3, 3, 3, 2];
        let athens = [6, 6, 6, 6, 2, 3, 3];

        let veniceScore = [];
        let newyorkScore = [];
        let londonScore = [];
        let parisScore = [];
        let saintpetersburgScore = [];
        let beijingScore = [];
        let rioScore = [];
        let bridgetownScore = [];
        let bergenScore = [];
        let bangkokScore = [];
        let sydneyScore = [];
        let athensScore = [];

        for (let i = 0; i < answers.length; i++) {
            veniceScore[i] = Math.abs(venice[i] - answers[i]);
            newyorkScore[i] = Math.abs(newyork[i] - answers[i]);
            londonScore[i] = Math.abs(london[i] - answers[i]);
            parisScore[i] = Math.abs(paris[i] - answers[i]);
            saintpetersburgScore[i] = Math.abs(saintpetersburg[i] - answers[i]);
            beijingScore[i] = Math.abs(beijing[i] - answers[i]);
            rioScore[i] = Math.abs(rio[i] - answers[i]);
            bridgetownScore[i] = Math.abs(bridgetown[i] - answers[i]);
            bergenScore[i] = Math.abs(bergen[i] - answers[i]);
            bangkokScore[i] = Math.abs(bangkok[i] - answers[i]);
            sydneyScore[i] = Math.abs(sydney[i] - answers[i]);
            athensScore[i] = Math.abs(athens[i] - answers[i]);
        }

        veniceScore = veniceScore.reduce((a, b) => a + b, 0);
        newyorkScore = newyorkScore.reduce((a, b) => a + b, 0);
        londonScore = londonScore.reduce((a, b) => a + b, 0);
        parisScore = parisScore.reduce((a, b) => a + b, 0);
        saintpetersburgScore = saintpetersburgScore.reduce((a, b) => a + b, 0);
        beijingScore = beijingScore.reduce((a, b) => a + b, 0);
        rioScore = rioScore.reduce((a, b) => a + b, 0);
        bridgetownScore = bridgetownScore.reduce((a, b) => a + b, 0);
        bergenScore = bergenScore.reduce((a, b) => a + b, 0);
        bangkokScore = bangkokScore.reduce((a, b) => a + b, 0);
        sydneyScore = sydneyScore.reduce((a, b) => a + b, 0);
        athensScore = athensScore.reduce((a, b) => a + b, 0);

        let bestScore = Math.min(veniceScore, newyorkScore, londonScore, parisScore, saintpetersburgScore, beijingScore, rioScore, bridgetownScore, bergenScore, bangkokScore, sydneyScore, athensScore);

        let bestDestinations = [];

        if (bestScore == veniceScore) {
            bestDestinations.push("venice");
        }
        if (bestScore == newyorkScore) {
            bestDestinations.push("newyork");
        }
        if (bestScore == londonScore) {
            bestDestinations.push("london");
        }
        if (bestScore == parisScore) {
            bestDestinations.push("paris");
        }
        if (bestScore == saintpetersburgScore) {
            bestDestinations.push("saintpetersburg");
        }
        if (bestScore == beijingScore) {
            bestDestinations.push("beijing");
        }
        if (bestScore == rioScore) {
            bestDestinations.push("rio");
        }
        if (bestScore == bridgetownScore) {
            bestDestinations.push("bridgetown");
        }
        if (bestScore == bergenScore) {
            bestDestinations.push("bergen");
        }
        if (bestScore == bangkokScore) {
            bestDestinations.push("bangkok");
        }
        if (bestScore == sydneyScore) {
            bestDestinations.push("sydney");
        }
        if (bestScore == athensScore) {
            bestDestinations.push("athens");
        }

        if (bestDestinations.length != 1) {
            bestDestinations = bestDestinations[Math.floor(Math.random() * bestDestinations.length)];
        }

        if (bestDestinations == "venice") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destVeniceClickHandler);
            previouslyRecommended.addEventListener("click", destVeniceClickHandler);
            destVeniceClickHandler();
        } else if (bestDestinations == "newyork") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destNewYorkClickHandler);
            previouslyRecommended.addEventListener("click", destNewYorkClickHandler);
            destNewYorkClickHandler();
        } else if (bestDestinations == "london") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destLondonClickHandler);
            previouslyRecommended.addEventListener("click", destLondonClickHandler);
            destLondonClickHandler();
        } else if (bestDestinations == "paris") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destParisClickHandler);
            previouslyRecommended.addEventListener("click", destParisClickHandler);
            destParisClickHandler();
        } else if (bestDestinations == "saintpetersburg") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destSaintPetersburgClickHandler);
            previouslyRecommended.addEventListener("click", destSaintPetersburgClickHandler);
            destSaintPetersburgClickHandler();
        } else if (bestDestinations == "beijing") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destBeijingClickHandler);
            previouslyRecommended.addEventListener("click", destBeijingClickHandler);
            destBeijingClickHandler();
        } else if (bestDestinations == "rio") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destRioDeJaneiroClickHandler);
            previouslyRecommended.addEventListener("click", destRioDeJaneiroClickHandler);
            destRioDeJaneiroClickHandler();
        } else if (bestDestinations == "bridgetown") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destBridgetownClickHandler);
            previouslyRecommended.addEventListener("click", destBridgetownClickHandler);
            destBridgetownClickHandler();
        } else if (bestDestinations == "bergen") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destBergenClickHandler);
            previouslyRecommended.addEventListener("click", destBergenClickHandler);
            destBergenClickHandler();
        } else if (bestDestinations == "bangkok") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destBangkokClickHandler);
            previouslyRecommended.addEventListener("click", destBangkokClickHandler);
            destBangkokClickHandler();
        } else if (bestDestinations == "sydney") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destSydneyClickHandler);
            previouslyRecommended.addEventListener("click", destSydneyClickHandler);
            destSydneyClickHandler();
        } else if (bestDestinations == "athens") {
            saveNewRecommended(bestDestinations);
            previouslyRecommended.removeEventListener("click", destAthensClickHandler);
            previouslyRecommended.addEventListener("click", destAthensClickHandler);
            destAthensClickHandler();
        }
    } else {
        window.scrollTo(0, 0);
        alert("Please fill in the missing questions");
    }


}

const saveNewRecommended = (recommended) => {
    localStorage.setItem("recommended", recommended);
    deleteRecommended.classList.remove("hide");
    previouslyRecommended.classList.remove("hide");
}

const Awake = () => {
    
    for (let i = 0; i < destinations.length; i++) {

        let li = document.createElement("LI");

        let country = document.createElement("SPAN");
        country.innerText = destinations[i].innerText.split('\n')[0].split(',')[1].substring(1);
        li.appendChild(country);

        let location = document.createElement("SPAN");
        location.innerText = destinations[i].innerText.split('\n')[0].split(',')[0];
        li.appendChild(location);

        let tags = document.createElement("SPAN");
        tags.innerText = destinations[i].innerText.split('\n')[1];
        li.appendChild(tags);

        let button = document.createElement("BUTTON");
        button.innerHTML = "&#128269;";
        let functionHandler = destinations[i].id;
        switch (functionHandler) {
            case "destVenice": button.addEventListener("click", destVeniceClickHandler); break;
            case "destNewYork": button.addEventListener("click", destNewYorkClickHandler); break;
            case "destLondon": button.addEventListener("click", destLondonClickHandler); break;
            case "destParis": button.addEventListener("click", destParisClickHandler); break;
            case "destSaintPetersburg": button.addEventListener("click", destSaintPetersburgClickHandler); break;
            case "destBeijing": button.addEventListener("click", destBeijingClickHandler); break;
            case "destRioDeJaneiro": button.addEventListener("click", destRioDeJaneiroClickHandler); break;
            case "destBridgetown": button.addEventListener("click", destBridgetownClickHandler); break;
            case "destBergen": button.addEventListener("click", destBergenClickHandler); break;
            case "destBangkok": button.addEventListener("click", destBangkokClickHandler); break;
            case "destSydney": button.addEventListener("click", destSydneyClickHandler); break;
            case "destAthens": button.addEventListener("click", destAthensClickHandler); break;
        }
        li.appendChild(button);

        locationsList.appendChild(li);
    }

    countryHeadingClickHandler();

    const recommendedLocation = localStorage.getItem("recommended");
    if (recommendedLocation) {
        switch (recommendedLocation) {
            case "venice": previouslyRecommended.addEventListener("click", destVeniceClickHandler); break;
            case "newyork": previouslyRecommended.addEventListener("click", destNewYorkClickHandler); break;
            case "london": previouslyRecommended.addEventListener("click", destLondonClickHandler); break;
            case "paris": previouslyRecommended.addEventListener("click", destParisClickHandler); break;
            case "saintpetersburg": previouslyRecommended.addEventListener("click", destSaintPetersburgClickHandler); break;
            case "beijing": previouslyRecommended.addEventListener("click", destBeijingClickHandler); break;
            case "rio": previouslyRecommended.addEventListener("click", destRioDeJaneiroClickHandler); break;
            case "bridgetown": previouslyRecommended.addEventListener("click", destBridgetownClickHandler); break;
            case "bergen": previouslyRecommended.addEventListener("click", destBergenClickHandler); break;
            case "bangkok": previouslyRecommended.addEventListener("click", destBangkokClickHandler); break;
            case "sydney": previouslyRecommended.addEventListener("click", destSydneyClickHandler); break;
            case "athens": previouslyRecommended.addEventListener("click", destAthensClickHandler); break;
        }
        previouslyRecommended.classList.remove("hide");
        deleteRecommended.classList.remove("hide");
    }

    updateBackButtonHandler();

    exploreNavButton.classList.add("selectedNav");
        
}

Awake();

menuToggle.addEventListener("click", toggleMenu);

exploreNavButton.addEventListener("click", exploreNavButtonHandler);
locationsNavButton.addEventListener("click", locationsNavButtonHandler);
recommendedNavButton.addEventListener("click", recommendedNavButtonHandler);
aboutNavButton.addEventListener("click", aboutNavButtonHandler);

destVenice.addEventListener("click", destVeniceClickHandler);
destNewYork.addEventListener("click", destNewYorkClickHandler);
destLondon.addEventListener("click", destLondonClickHandler);
destParis.addEventListener("click", destParisClickHandler);
destSaintPetersburg.addEventListener("click", destSaintPetersburgClickHandler);
destBeijing.addEventListener("click", destBeijingClickHandler);
destRioDeJaneiro.addEventListener("click", destRioDeJaneiroClickHandler);
destBridgetown.addEventListener("click", destBridgetownClickHandler);
destBergen.addEventListener("click", destBergenClickHandler);
destBangkok.addEventListener("click", destBangkokClickHandler);
destSydney.addEventListener("click", destSydneyClickHandler);
destAthens.addEventListener("click", destAthensClickHandler);
checkFlightsbtn.addEventListener("click", checkFlightsButtonHandler);

countryHeading.addEventListener("click", countryHeadingClickHandler);
locationHeading.addEventListener("click", locationHeadingClickHandler);

submitbtn.addEventListener("click", submitButtonHandler);
deleteRecommended.addEventListener("click", deleteRecommendedButtonHandler);
