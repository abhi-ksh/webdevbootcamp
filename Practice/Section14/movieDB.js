console.log("Printing movie DB..");
let mdb = [
    {
        name: "Sound of Music",
        isWatched: false,
        rating: 3.5
    },
    {
        name: "Silence of the lambs",
        isWatched: true,
        rating: 5.0
    },
    {
        name: "Harry Potter: Prisoner of Azkaban",
        isWatched: false,
        rating: 4.5
    },
    {
        name: "The Dark Knight",
        isWatched: true,
        rating: 5.0
    },
    {
        name: "Moonlight",
        isWatched: true,
        rating: 2
    }
];


mdb.forEach(function (movie) {
    console.log(buildString(movie));
});

function buildString(movie){
    let sentence = "You have";
    if (movie.isWatched) {
        sentence += " watched ";
    } else {
        sentence += " not watched ";
    }

    sentence += "\"" + movie.name + "\" - " + movie.rating + " Stars."
    return sentence;
}