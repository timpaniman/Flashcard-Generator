var BasicCardQuestions = {
    front: [
        "Who was there first  astronaut that landed on the moon in 1969?",
        "Which U.S. president made the first presidential radio broadcast?",
        "Who was the first US president?",
        "The llama is a domesticated camelid that is native to which continent?",
        "A panda's daily diet consists almost entirely of what plant?",
        "What is the name for a male bee that comes from an unfertilized egg?",
        "Cynophobia is the fear of what kind of animal?",
        "The Chihuahua is a breed of dog believed to originate from what country?",
        "What is a group of whales called?",
        "What animal has the largest ears?"
    ],
    back: ["Neil Armstrong",
        "Calvin Coolidge",
        "George Washington",
        "South America",
        "Bamboo",
        "Drone",
        "Dog",
        "Mexico",
        "Pod",
        "Elephant"
    ]
}

var BasicCard = function(front, back) {
    if (typeof front !== 'string') {
        throw new Error('MUST BE A STRING!!!!!!');
    }
    this.front = front;
    this.back = back;
    /*  this.makeNoise = function() {
        if (this.raining === true) {
          console.log(this.noise);
        }
      };*/

}

module.exports = {
    BasicCardQuestions: BasicCardQuestions,
    BasicCard: BasicCard
}