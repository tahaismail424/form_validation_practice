const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");


const country = document.getElementById("country");
const countryError = document.querySelector("[for='country'] span.error");



const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector("[for='zip-code'] span.error");


const password = document.getElementById("pass");
const passwordError = document.querySelector("[for='pass'] span.error");


const passConf = document.getElementById("pass-confirm");
const passConfError = document.querySelector("[for='pass-confirm'] span.error");


//list for loooping
const inputs = document.getElementsByTagName("input");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showMailError();
  }
});

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showCountryError();
  }
});

zipCode.addEventListener("input", (e) => {
    if (zipCode.validity.valid) {
      zipCodeError.textContent = "";
      zipCode.className = "error";
    } else {
      showZipError();
    }
  });

password.addEventListener("input", (e) => {
    let currentPass = password.value;
    passConf.setAttribute("pattern", currentPass);
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showPassError();
  }
});

passConf.addEventListener("input", (e) => {
  if (passConf.validity.valid) {
    passConfError.textContent = "";
    passConfError.className = "error";
  } else {
    showPassConfirmError();
  }
});

form.addEventListener("submit", (e) => {

    for (let input of inputs) {
        if (input.type === 'submit') break;
        else if (!input.validity.valid) {
            e.preventDefault();
            alert("Yoo must fix one or more fields.");
            switch (input) {
                case email:
                    showMailError();
                    break;
                case country:
                    showCountryError();
                    break;
                case zipCode:
                    showZipError();
                    break;
                case password:
                    showPassError()
                    break;
                case passConf:
                    showPassConfirmError();
                    break;
            }

        }
    }

})

function showMailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country name.";
  } else if (!country.validity.valid) {
    countryError.textContent = "You need to enter a valid country name.";
  }
}

function showZipError() {
    if (zipCode.validity.valueMissing) {
      zipCodeError.textContent = "You need to enter a zip code.";
    } else if (!zipCode.validity.valid) {
      zipCodeError.textContent = "You need to enter a zip code that is valid.";
    }
  }

function showPassError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent =
      "You need to enter a password of at least 8 characters.";
  }
}

function showPassConfirmError() {
    if (passConf.validity.valueMissing) {
      passConfError.textContent = "You need to enter a password.";
    } else if (passConf.validity.tooShort) {
      passConfError.textContent =
        "You need to enter a password of at least 8 characters.";
    } else if (!passConf.validity.valid) {
        passConfError.textContent = 
        "You need to enter the same password."
    }
  }
