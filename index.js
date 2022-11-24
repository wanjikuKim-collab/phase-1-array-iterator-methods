const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];

//   function printFirstName (array){
//     for(let item of array){
//         console.log(item.firstName)
//     }
//   }

//   printFirstName(users);

// function usersFavoriteColor(array){
//     for (item of array){
//         if(item.favoriteColor=== 'Blue'){
//             console.log(item.firstName)
//         }
//     }
// }
// usersFavoriteColor(users)


//But what if we wanted to print out users whose favorite color is red instead? With the above approach, 
//we'd need to create a whole new redFilter function.
//We can improve matters by abstracting out the color into a variable:

function checkColor(array, color){
    for (item of array){
        if (item.favoriteColor === color){
            console.log(item.firstName)
        }
    }

}

checkColor(users,'Red')