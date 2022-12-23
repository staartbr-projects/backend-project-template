const config = require('../../knexfile');
const knex = require('knex')(config);

const files = [
  'journeys.js', 
  'courses.js', 
  'lessons.js', 
  'journeys_courses.js'
];

const seed = async (files) => {
  for (const file of files) {
    await knex.seed.run({
      specific: file,
    });
  }
};

(async function() {
  try {
    await seed(files);

    return console.log('Sucesso!');
  } catch (error) {
    throw Error(`ERRO: ${error}`);
  }
}())