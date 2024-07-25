import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resultObj = { photo: null, user: null };

  return Promise.all([await uploadPhoto(), await createUser()])
    .then((resolve) => {
      [resultObj.photo, resultObj.user] = resolve;
      return resultObj;
    }).catch(() => ({ photo: null, user: null }));
}
