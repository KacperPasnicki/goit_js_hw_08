import { throttle } from 'lodash';

const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const text = document.querySelector('textarea')


 form.addEventListener('input', throttle((e) => {
  const formData = {email: form.elements.email.value, message: form.elements.message.value}
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
 }, 500));

//  const actualText = localStorage.getItem('email:form.elements.email.value, message: form.elements.message.value')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    elements: { email, message }}  = e.currentTarget;
  console.log({email: email.value, message: message.value})
  
  
  e.currentTarget.reset();
  localStorage.clear();

  } )
  
  



let storageText = localStorage.getItem("feedback-form-state")
let parseStorageText = JSON.parse(storageText)
const rememberedText = () => {
  if (parseStorageText !== "") {
    emailInput.value = parseStorageText.email;
    text.value = parseStorageText.message;
  }
}
rememberedText()