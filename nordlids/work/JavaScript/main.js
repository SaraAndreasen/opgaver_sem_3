
//carousel speed
$('.carousel').carousel({
  interval: 2000
})

//Form validation
let knap = document.querySelector("#submit");
let nameResult = document.querySelector("#nameResult");
let mailResult = document.querySelector("#mailResult");
let phoneResult = document.querySelector("#phoneResult");
let navn = document.querySelector("#exampleInputName1");
let mail = document.querySelector("#exampleInputMail1");
let phone = document.querySelector("#exampleInputPhone1");

let validate = (e) => {
  e.preventDefault();
  if (navn.value === ""){
    nameResult.innerHTML = `UPS! Du mangler at udfylde noget.`
    nameResult.style.color = '#E6007E';
    navn.focus();
    return false;
  }
  if (mail.value === ""){
    mailResult.innerHTML = `UPS! Du mangler at udfylde noget.`
    mailResult.style.color = '#E6007E';
    mail.focus();
    return false;
  }
  if (phone.value === ""){
    phoneResult.innerHTML = `UPS! Du mangler at udfylde noget.`
    phoneResult.style.color = '#E6007E';
    mail.focus();
    return false;
  }
  return true;
}
knap.addEventListener('click', validate);
