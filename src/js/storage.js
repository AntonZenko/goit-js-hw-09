// export const storage = {
//   saveUserData(key, value) {
//     try {
//       const usersInput = JSON.stringify(value);
//       localStorage.setItem(key, usersInput);
//     } catch (error) {
//       console.error('Set state error: ', error.message);
//     }
//   },
//   getUserData(key) {
//     const savedData = localStorage.getItem(key);
//     if (!savedData) {
//       return;
//     }
//     try {
//       return JSON.parse(savedData);
//     } catch (error) {
//       console.error('Get state error: ', error.message);
//     }
//   },
//   removeUserData(key) {
//     try {
//       localStorage.removeItem(key);
//     } catch (error) {
//       console.error('Remove state error: ', error.message);
//     }
//   },
// };

export default { saveUserData, getUserData, removeUserData };
function saveUserData(key, value) {
  try {
    const usersInput = JSON.stringify(value);
    localStorage.setItem(key, usersInput);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
function getUserData(key) {
  const savedData = localStorage.getItem(key);
  if (!savedData) {
    return;
  }
  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
function removeUserData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
}
