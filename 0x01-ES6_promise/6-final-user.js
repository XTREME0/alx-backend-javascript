import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((stat) => ({
        status: stat.status === 'fulfilled' ? 'success' : 'error',
        value: stat.status === 'fulfilled' ? stat.value : String(stat.reason),
      }))
    ));
}
