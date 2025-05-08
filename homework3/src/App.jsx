import React from 'react';
import { MovieList } from './components/MovieList';


let movies = [
  {name: 'The Shawshank Redemption',
  date: "14/10/1994",
  genre: 'drama',
  plot: 'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
  imdbLink: 'https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1',
  imgUrl: 'https://resizing.flixster.com/hgcQ8juhhUYQofbQ6wsXfhicb3Y=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_p_v13_ap.jpg'
},
  {name: 'The Godfather',
  date: "24/3/1972",
  genre: 'crime/drama',
  plot: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
  imdbLink: 'https://www.imdb.com/title/tt0068646/?ref_=chttp_t_2',
  imgUrl: 'https://resizing.flixster.com/aLKvx7GjWgFMOfboq5KNOX1kCCg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6326_p_v13_be.jpg'
},
  {name: 'The Dark Knight',
  date: "18/7/2008",
  genre: 'action/crime/drama/thriller',
  plot: 'Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.',
  imdbLink: 'https://www.imdb.com/title/tt0468569/?ref_=chttp_t_3',
  imgUrl: 'https://resizing.flixster.com/dJM7TJzf7qEp9NA2Kni0Cug9myc=/206x305/v2/https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc='
},
  {name: 'The Lord of the Rings: The Return of the King',
  date: "3/3/2003",
  genre: 'adventure/drama/fantasy',
  plot: 'The former Fellowship of the Ring prepares for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them on.',
  imdbLink: 'https://www.imdb.com/title/tt0167260/?ref_=chttp_t_6',
  imgUrl: 'https://resizing.flixster.com/Vd2FP2g6PXrmzvavxhbw_x5bvl0=/206x305/v2/https://resizing.flixster.com/dgQlkMOdYHaHzqo50dRRr8oPuv8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZkYzRlODUzLWUwMmItNDI5Ny1iYTZjLTU4NzQ4NmU5ODIwZi5qcGc='
},
  {name: 'Inception',
  date: "8/7/2010",
  genre: 'action/adventure/sci-fi/thriller',
  plot: 'Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife`s murder and his only chance at redemption is to perform a nearly impossible task.',
  imdbLink: 'https://www.imdb.com/title/tt1375666/?ref_=chttp_t_14',
  imgUrl: 'https://resizing.flixster.com/2HAZD3mRXq8DSdsOvBiGf5Kn8HI=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v10_ae.jpg'
}
]


export function App() {
  return (
    <div id='app'>
      <h1 style={{color:'darkred', fontWeight:'bolder', fontStyle:'italic'}}>Movie List</h1>
      <MovieList
      movies={movies}/>

    </div>
  )
}