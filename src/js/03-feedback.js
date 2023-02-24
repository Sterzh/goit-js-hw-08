// import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const submitEl = document.querySelector('.feedback-form button');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', formInput);
submitEl.addEventListener('submit', formSubmit);

pasteFormData();

function pasteFormData(e) {
  const saveForm = localStorage.getItem(STORAGE_KEY);
  const parsedSaveForm = JSON.parse(saveForm);

  emailEl.value = parsedSaveForm.email;
  textareaEl.value = parsedSaveForm.message;
}

function formInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formSubmit(e) {
  e.preventDefault();
  //   localStorage.clear();
  localStorage.removeItem(STORAGE_KEY);
}
