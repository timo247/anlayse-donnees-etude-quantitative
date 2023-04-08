import * as fs from 'fs';

function getNumberOfProperty(property, value) {
  const data = fs.readFileSync('./data.json');
  const buf = Buffer.from(data);
  let answers = buf.toString();
  answers = JSON.parse(answers);
  //console.log(answers[0]['#7.2 Fonctionnalités']);

  let number_of_property_value = 0;
  answers.forEach((answer) => {
    if (answer[property].includes(value)) {
      number_of_property_value++;
    }
  });

  console.log(
    'number of iteration of ',
    value,
    'in',
    property,
    ':',
    number_of_property_value
  );
  return answers;
}

getNumberOfProperty('Ton', 'Informative');
