// Defines The api keys udes.
var pfApiKey = 'hoxfe17CJiTbWmobl1EoByfn5PBmuon4tnV2xHc2sKXahYP3FG' 
var pfSecretApiKey = '9MQ1EbHmO4Ew0mh9DbQduwBqONHPw610qvzwEWBd'
let j = Math.floor(Math.random() * 20);
let result;

var pf = new petfinder.Client({apiKey: pfApiKey, secret: pfSecretApiKey});

function animalSearch(filter) {
// Adds search peramiters for the API.
pf.animal.search(filter)
    
    .then(function (response) {
        /*Takes the arrays that the API is giving us, and gives us an
        all of the objects that are relavent to our peramiters. */
        let Newvar = response.data.animals.filter(animal => {
           return animal.photos.length > 0
        });
        //Sets the #photoGrid div to empty to prevent repeats.
        $('#photoGrid').empty();
        // For the first 5 objects in the filtered array...
        for(var i = 0; i < 3; i++) {
            j++;
            if(j > 40) {
                j = 1;
            }
            console.log(j);
            //Create a <div> tag to hold everything in #photoGrid.
            let animalDiv = $('<div>');
            animalDiv.attr('id', 'animalDiv' + [j]);
            animalDiv.addClass('animal-div');
            $('#photoGrid').append(animalDiv);
            // create a div for each image
            let imageDiv = $('<div>');
            imageDiv.attr('id', 'imageDiv' + [j]);
            imageDiv.addClass('image-div');

            //Create an <img> tag with picture of animal.
            let animalImg = $('<img>');
            animalImg.addClass('animal-img');
            animalImg.attr('id', 'animal' + [j]);
            animalImg.attr('data-petname', Newvar[j].name);
            animalImg.attr('src', Newvar[j].photos[0].large);
            

            //Create a <p> tag with the animals name.
            let animalName = $('<p>');
            animalName.addClass('animal-info animal-name');
            animalName.text('Name: ' + Newvar[j].name);
            //Create a <p> tag with the animals age.
            let animalAge = $('<p>');
            animalAge.addClass('animal-info  animal-age');
            animalAge.text('Age: ' + Newvar[j].age);
            //Creates a <div> tag to hold the info information.
            let infoWrapper = $('<div>');
            infoWrapper.addClass('info-wrapper py-5 px-5');
            infoWrapper.attr('id', 'infoWrapper' + [j]);
            //Create a <div> tag to hold the contact info.
            let contactInfo = $('<div>');
            contactInfo.addClass('contact-info');
            contactInfo.attr('id', 'contactDiv' + [j]);
            //Creates a <p> tag to hold the phone number.
            let phoneNumber = $('<p>');
            phoneNumber.addClass('animal-info  phone-number');
            phoneNumber.text(Newvar[j].contact.phone);
            //Creates a <p> tag to hold the email.
            let email = $('<p>');
            email.addClass('animal-info  email');
            email.text(Newvar[j].contact.email);
            // creates a <p> tag to hold the city
            let city = $("<p>");
            city.addClass('animal-info city');
            city.text("City: " + Newvar[j].contact.address.city);
            // Creates a <p> tag to hold the state info
            let state = $("<p>");
            state.addClass('animal-info state');
            state.text("State: " + Newvar[j].contact.address.state);
            //Appends information.
            $('#animalDiv' + [j]).append(imageDiv, infoWrapper);
            $('#imageDiv' + [j]).append(animalImg);
            $('#infoWrapper' + [j]).append(animalName, animalAge, contactInfo);
            $('#contactDiv' + [j]).append(phoneNumber, email);
            $('#contactDiv'+ [j]).append(city, state)

        }
 

        // Pet information
    })
    .catch(function (error) {
        // Handle the error
    });
}

// What do we want to search for? cats,dogs?
$('#showCriteria').on('click', function(){
    animalSearch ({
        type: 'cat', 
        limit: 100
    })
})

// make pet image button to pull pet name

var pets = document.querySelectorAll('.animal-img');
var petName = document.querySelector('#petName');
var chosenPetDiv = document.querySelector('#chosenPet');
var img = document.querySelector(".chosen-pet");

chosenPetDiv.style.display = 'none';

document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'animal-img' )) {
          petName.value = event.target.getAttribute('data-petname');
          chosenPetDiv.style.display = 'block';
          img.src = event.target.getAttribute("src");
    }
}, false);