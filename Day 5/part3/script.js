
window.onload= function(){
    var submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', function(event){
        event.preventDefault()

        var name = getName()
        var surname = getSurname()
        var age = getAge()
        var address =getAddress()
        var gender = getGender()
        var phone = getPhone()

        if(age <18){
            alert("you are not old enough to fill the form")   
        }else if(name == ""||name== undefined){
            alert("Enter your name!!")

        }else if(surname == ""||surname== undefined){
            alert("Enter your surname!!")

        }else if(phone.length >10||phone.length<10){
            alert("Number should be 10 digits")
        }
        else{
            alert ("Hello " + name + " " + surname + " you are " + age + 
        " years old, you are a " + gender +". " +
         "Your address is " + address + ". This is your phone number "
           + phone)

        }
        
    })
}
/**Function gets the name from the name input */
function getName(){
    var name = document.getElementById('name')
    return name.value
}

/**Function gets surname from the surname input  */
function getSurname(){
    var name = document.getElementById('surname')
    return surname.value
}

/**Function gets age from the age input */
function getAge(){
    var age = document.getElementById('age')
    return age.value

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
function getPhone(){
    var phone = document.getElementById('phone')
    return phone.value
}