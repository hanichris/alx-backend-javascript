import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all(uploadPhoto(), createUser())
    .then((res) => console.log(res))
    .catch(() => console.log('Signup system offline'));
}
