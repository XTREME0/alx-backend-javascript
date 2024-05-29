import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
      error: null,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
      error: error.message,
    };
  }
}
