import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
    .then(() => console.log(`${createUser.firstName} ${createUser.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
