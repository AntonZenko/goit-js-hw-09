import throttle from 'lodash/throttle';
import storage from './storage.js';

const { saveUserData, getUserData, removeUserData } = storage;
const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = getUserData(STORAGE_KEY) || {};

formRef.addEventListener('submit', handleSubmit);
formRef.addEventListener('input', throttle(handleInput, 500));

fillUserForm();

function handleInput(e) {
  formData[e.target.name] = e.target.value;
  saveUserData(STORAGE_KEY, formData);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.target.reset();
  removeUserData(STORAGE_KEY);
}

function fillUserForm() {
  const savedData = getUserData(STORAGE_KEY);
  if (!savedData) return;

  if (savedData) {
    formRef.email.value = savedData.email;
    formRef.message.value = savedData.message;
  }
}
