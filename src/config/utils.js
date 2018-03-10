//config imports
import DATABASE from './firebase';

export function search(location, name) {
  return new Promise((resolve, reject) => {
    DATABASE
      .ref(location)
      .orderByChild('name')
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          if (name === child.val().name) {
            resolve(child.key);
          }
        })
      })
      .catch((error) => {
        alert(error);
        console.log(error)
      });
  });
}
