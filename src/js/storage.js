export const storage = {
  saveUserData(key, value) {
    try {
      const usersInput = JSON.stringify(value);
      localStorage.setItem(key, usersInput);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  },
  getUserData(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  },
};
