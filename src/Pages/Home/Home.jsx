import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero from'../../assets/hero_banner.jpg'
import herotitle from'../../assets/hero_title.png'
import play from'../../assets/play_icon.png'
import info from'../../assets/info_icon.png'
import Title from '../../Components/Title/Title'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='bannerimg'/>
        <div className="herocaption">
            <img src={herotitle} alt="" className='captionimg' />
            <p>
                Discvering his ties to a secret ancient order,a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
            </p>
            <div className="herobtns"><a href="https://www.youtube.com/watch?v=80dqOwAOhbo&ab_channel=Netflix">
            <button className='btn'><img src={play} alt="" />Play</button></a>
                
                <button className='btndarkbtn'><img src={info} alt="" />MoreInfo</button>
            </div>
            <Title/>

        </div>
      </div>
      <div className="morecards">
      <Title title={"Blockbuster Movies"} category={"top_rated"}/>
      <Title title={"Only On Netflix"} category={"popular"}/>
      <Title title={"Upcoming"} category={"upcoming"}/>
      <Title title={"Top pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
