import throttle from 'lodash.throttle';
import storage from './storage';

const { saveUserData, getUserData, removeUserData } = storage;
const STORAGE_KEY = 'feedback-form-data';
const formData = {};

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

fillUserForm();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  saveUserData(STORAGE_KEY, formData);
}

function fillUserForm() {
  const storage = getUserData(STORAGE_KEY);
  if (storage && Object.values(storage) !== []) {
    formRef.email.value = storage.email;
    formRef.message.value = storage.message;
    formData.email = storage.email;
    formData.message = storage.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  removeUserData(STORAGE_KEY);
  console.log(formData);
}
