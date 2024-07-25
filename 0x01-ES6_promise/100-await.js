import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resultObj = { photo: null, user: null };

  try {
    resultObj.photo = await uploadPhoto().then((resolve) => resolve);
    resultObj.user = await createUser().then((resolve) => resolve);
  } catch (err) {
    return { photo: null, user: null };
  }

  return resultObj;
}
