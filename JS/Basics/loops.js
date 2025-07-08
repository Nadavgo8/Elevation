//ex1

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];
for(let index in names){
    people.splice(0,0,{name:names[index], age: ages[index]});
}
console.log(people);

//ex2
for(const person of people){
    console.log(`${person.name} is ${person.age} years old`);
}

//ex3
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];
let toDelete = 0;
for(const index in posts){
    if(posts[index]["id"] === 2){
        posts.splice(index,1)
    }
}
console.log(posts);

//ex4
const posts2 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

const postId = 2;
const commentId = 3;

//Find the post
for (let i = 0; i < posts2.length; i++) {
    if (posts2[i].id === postId) {
      const comments = posts2[i].comments;
  
      //Find the comment by ID and remove it
      for (let j = 0; j < comments.length; j++) {
        if (comments[j].id === commentId) {
          comments.splice(j, 1);
          break;
        }
      }
  
      break;
    }
  }
  for (const post of posts2) {
    console.log(`Post ${post.id}: ${post.text}`);

    for (const comment of post.comments) {
      console.log(`  Comment ${comment.id}: ${comment.text}`);
    }
  }


  //ex5

  const dictionary = {
    A: ["Aardvark", "Abacus", "Actually", "Atomic"],
    B: ["Banana", "Bonkers", "Brain", "Bump"],
    C: ["Callous", "Chain", "Coil", "Czech"],
  };
  const letters = Object.keys(dictionary);

  for (const key of Object.keys(dictionary)) {
    console.log(`Words that begin with  ${key}:`);

    for (const word of dictionary[key]) {
      console.log("  " + word);
    }
  }
  
  