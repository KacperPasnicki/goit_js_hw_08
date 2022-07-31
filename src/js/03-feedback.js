import { throttle } from 'lodash';

const form = document.querySelector('feedback-form');
const input = document.querySelector('input');
const text = document.querySelector('textarea')


// form.addEventListener('email', throttle((e) => {
//     localStorage.setItem('email:form.elements.email.value, message value);
// }, 500));

function persistInput(input)
{
  var key = "input" + input.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      input.value = storedValue;

  input.addEventListener('input', function ()
  {
      localStorage.setItem(key, input.value);
  });
}