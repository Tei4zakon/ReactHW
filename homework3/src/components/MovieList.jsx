import React from 'react';
import PropTypes from 'prop-types'

export const MovieList = ({movies}) => {
    console.log
    return (
        <div id='movies'>
            {movies.map((movie, i) => {
                return (
                    <div key = {i}>
                       
                            <img src={movie.imgUrl} alt={movie.name} height={300} width={200}/>
                            <h2 style={{color: 'darkblue', fontWeight:'bolder'}}>Presenting: {movie.name}</h2>
                            <p><span>Release date: {movie.date}</span></p>
                            <p><span>Genre: {movie.genre}</span></p>
                            <p><span>Plot summary: {movie.plot}</span></p>
                             <a target='_blank' href={movie.imdbLink}><h3>For more details visit:</h3> </a>                     
                </div>)
            })}
        </div>
    )
}


MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}