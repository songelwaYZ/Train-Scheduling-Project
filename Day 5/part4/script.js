
window.onload= function(){
    var submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', function(event){
        event.preventDefault()
        validateName()
        validateSurname()
        validateAge()
        validatePhone()

       
        
    })
}
/**Function gets the name from the name input */
function validateName(){
    var name = document.getElementById('name')
    var nameErrorMessage = document.getElementById('name-error')
    if(name.value== ""||name.value==undefined){
        nameErrorMessage.classList.remove('is-invisible')     
    }
    else{
        nameErrorMessage.classList.add('is-invisible')
    }
    
}

/**Function gets surname from the surname input  */
function validateSurname(){
    var surname = document.getElementById('surname')
    var surnameErrorMessage = document.getElementById('surname-error')
    if(surname.value == ""||surname.value==undefined){

 surnameErrorMessage.classList.remove('is-invisible')     
    }
    else{
        surnameErrorMessage.classList.add('is-invisible')
    }
    
}
   

/**Function gets age from the age input */
function validateAge() {
    var age = document.getElementById('age').value
    var tooYoungError = document.getElementById('age-error-young')
    var tooOldError = document.getElementById('age-error-old')
    
    if(age < 18)
    {
        tooYoungError.classList.remove('is-invisible')
        tooOldError.classList.add('is-invisible')
    }
    else if(age > 64) {
        
        tooOldError.classList.remove('is-invisible')
        tooYoungError.classList.add('is-invisible')
    }
    else {   
        tooOldError.classList.add('is-invisible')
        tooYoungError.classList.add('is-invisible')
    }
}
/**Function gets age from the age input */
function getGender(){
    var gender = document.getElementById('gender')
    return gender.value
}

/**Function gets address from the address input */
function getAddress(){
    var address = document.getElementById('address')
    return address.value
}

/**Function gets phone from the phone input */
function validatePhone(){
    var phone = document.getElementById('phone').value
    var phoneError = document.getElementById('phone-error')
    var phoneCode = document.getElementById('code')
<<<<<<< HEAD
    if(code !==073&& phone.value==10){
=======

    if(phone.value !=073 && phone.length ==10){
>>>>>>> d89e41b964d01e67d74c301102fd5948cd4397f0
        phoneError.classList.remove('is-invisible')
        phoneCode.classList.add('is-invisible')

    }
<<<<<<< HEAD
=======
    else{
        phoneError.classList.add('is-invisible')
        phoneCode.classList.remove('is-invisible')
    }
>>>>>>> d89e41b964d01e67d74c301102fd5948cd4397f0
    
}

