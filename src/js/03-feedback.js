import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const saveForm = localStorage.getItem(STORAGE_KEY);
let formData = {};

formEl.addEventListener('input', throttle(formInput, 500));
formEl.addEventListener('submit', formSubmit);

pasteFormData();

function pasteFormData(e) {
  if (saveForm) {
    formData = JSON.parse(saveForm);
    emailEl.value = formData.email || 0;
    textareaEl.value = formData.message || 0;
  }
}

function formInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
