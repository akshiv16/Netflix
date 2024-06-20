import React, { useEffect, useRef, useState } from 'react'
import cards from '../../assets/cards/Cards_data'
import './Title.css'
import { Link } from 'react-router-dom'
const Title = ({title,category}) => {
  const[apiData,setApiData]=useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGY4Y2RkZDY0YWY4ZjZkZWFlZWI0ZDNmMTg3NDAxZCIsInN1YiI6IjY2NzM2MDg1YzBjNjE0MjhmOGVjNTNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9OGa1IS_aFYOCubhlBofffhRnv3giNYfRhEzyRO-GGE'
    }
  };
  
 
  const cardsRef=useRef();
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])
  return (
    

    <div className='title'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className='card-list' ref={cardsRef} >
    {apiData.map((card,index)=>{
      return <Link to={`/player/${card.id}`}className='card' key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
      </Link>
    })}
      </div>
    </div>
  )
}

export default Title
