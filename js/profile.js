


function EditEvent() {
    var submit = document.getElementById('submBtn');
    console.log(submit);
    submit.style.visibility = "visible";

}


function EmailEditEvent() {
    var email = document.getElementById('email');
    var duplicate = document.getElementById('demail');
    email.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-email');
    button.style.marginTop = '37px';
    EditEvent();
}

function NameEditEvent() {
    var name_in = document.getElementById('name');
    var duplicate = document.getElementById('duname');
    name_in.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-name');
    button.style.marginTop = '37px';
    EditEvent();

}

function FamilyNameEditEvent() {
    var fname_in = document.getElementById('fname');
    var duplicate = document.getElementById('dufname');
    fname_in.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-fname');
    button.style.marginTop = '37px';
    EditEvent();
}

function ResidenceEditEvent() {
    var res_in = document.getElementById('inputAddress');
    var duplicate = document.getElementById('daddr');
    res_in.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-addr');
    button.style.marginTop = '37px';
    EditEvent();
}

function SubResEditEvent() {
    var sres_in = document.getElementById('inputAddress2');
    var duplicate = document.getElementById('dadd');
    sres_in.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-local');
    button.style.marginTop = '37px';
    EditEvent();
}

function CountryEditEvent() {
    var coun_in = document.getElementById('country');
    var duplicate = document.getElementById('dcoun');
    coun_in.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-country');
    button.style.marginTop = '37px';
    EditEvent();
}


function ZipEditEvent() {
    var zip_in = document.getElementById('inputZip');
    var duplicate = document.getElementById('dzip');
    zip_in.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-zip');
    button.style.marginTop = '37px';
    EditEvent();
}

function TweetEditEvent() {
    var tweet = document.getElementById('tweet');
    var duplicate = document.getElementById('dtweet');
    tweet.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-twitter');
    button.style.marginTop = '37px';
    EditEvent();
}
function CityEditEvent() {
    var city = document.getElementById('city');
    var duplicate = document.getElementById('dcity');
    city.remove();
    duplicate.style.visibility = "visible";
    var button = document.getElementById('button-input-city');
    button.style.marginTop = '37px';
    EditEvent();
}

const bodyAlertSys = document.getElementsByClassName("container-alert")[0];
const childLeft = bodyAlertSys.children[0];
const childRight = bodyAlertSys.children[1];
const closeFailBtn = childLeft.children[2];
const closeSuccessBtn = childRight.children[1];
function onrequestaction() {
    childLeft.style.visibility = "hidden";
}

closeFailBtn.addEventListener('click', onrequestaction, false);

function onrequestsuccess() {
    childRight.style.visibility = "hidden";
}

closeSuccessBtn.addEventListener('click', onrequestsuccess, false);