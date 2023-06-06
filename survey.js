const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What is your name? ', (name) => {
  rl.question('What is your favourite activity? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favorite? ', (meal) => {
        rl.question('Whats your favourit thing to eat from that meal? ', (fav) => {
          rl.question('What sport is your favorite? ', (sport) => {
            rl.question('Whats your super power? ', (superpower) => {
              let profile = `${name} likes to do ${activity} while listening to ${music}. ${name}'s favourit meal is ${meal} and their favourite thing to eat from that meal us ${fav}, their favorite sport is ${sport} and their super is ${superpower}.`;
              console.log(profile);
              rl.close();
            });
          })
        });
      });
    });
  });
});


