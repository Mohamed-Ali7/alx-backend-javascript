import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((resolved) => console.log(`${resolved[0].body} \
${resolved[1].firstName} \
${resolved[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
