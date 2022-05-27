import throttle from 'lodash.throttle';
import storage from './storage';

const { saveUserData, getUserData, removeUserData } = storage;
const STORAGE_KEY = 'feedback-form-data';
const formData = {};
// const savedData = localStorage.getItem(STORAGE_KEY);

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

fillUserForm();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  // const usersInput = JSON.stringify(formData);
  // localStorage.setItem(STORAGE_KEY, usersInput);
  saveUserData(STORAGE_KEY, formData);
  // console.log(formData);
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

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-data';
// const formData = {};
// // const savedData = localStorage.getItem(STORAGE_KEY);

// const formRef = document.querySelector('.feedback-form');

// formRef.addEventListener('input', throttle(onFormInput, 500));
// formRef.addEventListener('submit', onFormSubmit);

// fillUserForm();

// function onFormInput(e) {
//   formData[e.target.name] = e.target.value;
//   const usersInput = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, usersInput);
//   // console.log(formData);
// }

// function fillUserForm() {
//   const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (storage && Object.values(storage) !== []) {
//     formRef.email.value = storage.email;
//     formRef.message.value = storage.message;
//     formData.email = storage.email;
//     formData.message = storage.message;
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(formData);
// }
