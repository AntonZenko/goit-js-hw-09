import throttle from 'lodash/throttle';
import {storage} from './storage.js';

const { saveUserData, getUserData } = storage;
const formRef = document.querySelector('.feedback-form');


const STORAGE_KEY = 'feedback-form-state';

fillUserForm();

const formData = {
  email: formRef.email.value,
  message: formRef.message.value,
};

formRef.addEventListener('submit', handleSubmit);
formRef.addEventListener('input', throttle(handleInput, 500));


function handleInput(e) {
  formData.[e.target.name] = e.target.value;
  saveUserData(STORAGE_KEY, formData);
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();
  const userData = {
  email: e.currentTarget.email.value,
  message: e.currentTarget.message.value,
  };
  console.log(userData);
  localStorage.removeItem(STORAGE_KEY);
  formRef.reset();

}

function fillUserForm() {
  const savedData = getUserData(STORAGE_KEY);
  if (!savedData) return;
  if(savedData.email) {
    formRef.email.value = savedData.email;
  }
  if(savedData.message) {
    formRef.message.value = savedData.message;
  }
}