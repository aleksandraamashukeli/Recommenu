"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* =====================================
		TESTIMONIALS SLIDER
	======================================== */
    


    /* =====================================
		NAVBAR BEHAVIOR
	======================================== */
    window.addEventListener("scroll", navBehavior);
    window.addEventListener("load", navBehavior);

    function navBehavior() {
        if (window.pageYOffset > 5) {
            document.querySelector(".navbar").classList.add("active");
        } else {
            document.querySelector(".navbar").classList.remove("active");
        }

        if (window.pageYOffset > 1000) {
            document.querySelector("#scrollTop").classList.add("active");
        } else {
            document.querySelector("#scrollTop").classList.remove("active");
        }
    }

    /* =====================================
		MOVE TO TOP OF THE PAGE
	======================================== */
    document
        .getElementById("scrollTop")
        .addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo(0, 0);
        });

    /* =====================================================
		BOOTSTRAP SCROLLSPY
	===================================================== */
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });

    var registerButton = document.getElementById("register-button");

    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var name = document.getElementById("object-name");

    var emailValid= false;
    var phoneNumberValid = false;
    var nameValid= false;

    
    function disableRegisterButton(){
      console.log(emailValid,phoneNumberValid,nameValid);
      if(emailValid && phoneNumberValid && nameValid)
        registerButton.classList.remove('disabled')
      else registerButton.classList.add('disabled');
    }

    disableRegisterButton(true);

    const validateEmail = () => {
      var matches = email.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      emailValid = matches;
      disableRegisterButton();
    };

    function validateName(){
      console.log(name.value)
     if(name.value === null || name.value.match(/^ *$/) !== null)
          nameValid=false;
     else nameValid = true; 
     disableRegisterButton();  
    }

    function validatePhoneNumber() {
         var val = phoneNumber.value;
        const prefixes = ['+995', '995', '598', '599',''];

        if (val.startsWith('+')) {
            val = val.slice(1);
        }
        const expectedLength = val.startsWith('+995') ? 13 : val.startsWith('995') ? 12 : 9;

        if (!prefixes.some(prefix => val.startsWith(prefix))) {
          phoneNumberValid = false;
        }
        else if (val.length !== expectedLength) {
          phoneNumberValid=false;
        }
        else{
          phoneNumberValid = true;
        }


        disableRegisterButton();
    }

    email.addEventListener("input",validateEmail);
    phoneNumber.addEventListener("input",validatePhoneNumber)
    name.addEventListener("input",validateName)

    var form =  document.getElementById('registration-form');
    form.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      });
});
