// Check if obj exists:
console.log(dataObj); // whole object

console.log(dataObj.results[0].name); // an array just like the code along for today




let randomBtn = document.getElementById("gen_btn");

function genButton() {
    if (!dataObj || !dataObj.results || dataObj.results.length === 0) {
        console.error("dataObj or dataObj.results is not properly defined");
        return;
    }

    let starterIndex = Math.floor(Math.random() * dataObj.results.length);

    let selectedPerson = dataObj.results[starterIndex];
    console.log("Selected Person:", selectedPerson);

    // Set name
    let nameHeading = document.getElementById("person_name");
    if (nameHeading) {
        nameHeading.innerText = `${selectedPerson.name.title}. ${selectedPerson.name.first} ${selectedPerson.name.last}`;
    } else {
        console.error("Name heading element not found");
    }

    // Set picture
    let personImg = document.querySelector("#person_img");
    if (personImg) {
        personImg.src = selectedPerson.picture.large; // Use 'large' picture URL
    } else {
        console.error("Image element not found");
    }

    // Set country
    let country = document.getElementById("country");
    if (country) {
        country.innerText = selectedPerson.location.country;
    } else {
        console.error("Country element not found");
    }

    // Set email
    let email = document.getElementById("email");
    if (email) {
        email.innerText = selectedPerson.email;
    } else {
        console.error("Email element not found");
    }

    // Set date of birth and age
    let dob = document.querySelector("#dob");
    if (dob) {
        dob.innerText = `Date of Birth: ${new Date(selectedPerson.dob.date).toLocaleDateString()} (Age: ${selectedPerson.dob.age})`;
    } else {
        console.error("DOB element not found");
    }

    // Set phone number
    let phone = document.getElementById("phone");
    if (phone) {
        phone.innerText = `Phone: ${selectedPerson.phone}`;
    } else {
        console.error("Phone element not found");
    }
}



randomBtn.addEventListener("click", genButton);


