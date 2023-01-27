import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const output = {};
  try {
    const res = await uploadPhoto();
    const res1 = await createUser();
    output.photo = res;
    output.user = res1;
  } catch (error) {
    output.photo = null;
    output.user = null;
  }

  return output;
}
