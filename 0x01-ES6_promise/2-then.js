export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => ({ status: 500, body: 'Error' }))
    .finally(() => console.log('Got a response from the API'));
}
