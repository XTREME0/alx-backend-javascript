export interface Learner {
  givenName: string,
  surname: string,
  years: number,
  city: string,
}

const learner1: Learner = {
  givenName: 'John',
  surname: 'Doe',
  years: 25,
  city: 'Nairobi',
};

const learner2: Learner = {
  givenName: 'Alex',
  surname: 'Sanchez',
  years: 29,
  city: 'Cairo',
};

const listOfLearners: Array<Learner> = [
  learner1,
  learner2,
];

export const displayTable = (listOfLearners: Array<Learner>): void => {
  const tbl = document.createElement('table');
  const headerRow = document.createElement('tr');
  tbl.insertAdjacentElement('beforeend', headerRow);

  headerRow.insertAdjacentHTML('beforeend', '<th>GivenName</th>');
  headerRow.insertAdjacentHTML('beforeend', '<th>City</th>');

  for (const learner of listOfLearners) {
    const learnerRow = document.createElement('tr');
    learnerRow.insertAdjacentHTML('beforeend', `<td>${learner.givenName}</td>`);
    learnerRow.insertAdjacentHTML('beforeend', `<td>${learner.city}</td>`);
    tbl.insertAdjacentElement('beforeend', learnerRow);
  }

  document.body.insertAdjacentElement('beforeend', tbl);
}

displayTable(listOfLearners);

