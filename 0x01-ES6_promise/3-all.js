import {uploadPhoto, createUser} from './utils.js';

export default function handleProfileSignup() {
 Promise.all([uploadPhoto, createUser])
 .then(() => console.log(`${createUser.firstName} ${createUser.lastName}`))
 .catch(() => console.log("Signup system offline")) 
}