
// create a client here: https://developer.whereismytransport.com/clients


window.onload=function(){
    if (hasToken()){
        getAgencies(this.localStorage.getItem('token'))

    }
    
    var submitButton=this.document.getElementById('submit')
    
    submitButton.addEventListener('click',function(){
        event.preventDefault()
        var clientId = getClientId()
        var clientSecret= getClientSerect()

        login(clientId, clientSecret)

    })
    
    
    
}
function hasToken(){
    //check if token exists in local storage
    var token = localStorage.getItem('token')
    if(token){
        //hide the form if the token exists
        var loginForm =document.getElementById('login-form')
        loginForm.classList.add('is-invisible')
        loginForm.style.display='name'
        return true


    }else{
        return false
    }
}


function login(clientId, clientSecret){
    var CLIENT_ID = clientId;
    var CLIENT_SECRET = clientSecret;
    var payload = {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'grant_type': 'client_credentials',
        'scope': 'transportapi:all'
    };
    var request = new XMLHttpRequest();
    request.open('POST', 'https://identity.whereismytransport.com/connect/token', true);
    request.addEventListener('load', function () {
        var response = JSON.parse(this.responseText);
        var token = response.access_token;
        window.token = token;

        localStorage.setItem('token', token)
        localStorage.setItem('storageDate', Date.now().toLocaleString())

        var resultWindow= document.getElementById('results')
        resultWindow.textContent = this.responseText
    });
    request.setRequestHeader('Accept', 'application/json');
    var formData = new FormData();

    for (var key in payload) {
    formData.append(key, payload[key]);
}

request.send(formData)

}
function getClientId(){
    var clientId= document.getElementById('client_id')
    return clientId.value

}
function getClientSerect(){
    var clientSecret= document.getElementById('client_secret')
    return clientSecret.value
}
function getAgencies(token){
    var request = new XMLHttpRequest()
request.addEventListener('load', function () {
  var response = JSON.parse(this.responseText)
  var agenciesList = document.getElementById('agencies-list')
  agenciesList.textContent=this.responseText
  console.log('Response', response);
});
request.open('GET', 'https://platform.whereismytransport.com/api/agencies', true);
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Authorization', 'Bearer ' + token);
request.send(); 
}