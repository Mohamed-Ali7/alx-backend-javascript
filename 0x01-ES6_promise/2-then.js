export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'Success',
  })).catch(() => {
    console.log('Got a response from the API');
    return Error();
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
