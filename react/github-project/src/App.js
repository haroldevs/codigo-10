import { useState } from 'react';
import './App.css';
import hotel from "./assets/icons/hotel.png"
import link from "./assets/icons/link.png"
import pin from "./assets/icons/pin.png"
import search from "./assets/icons/search.png"
import sun from "./assets/icons/sun.png"
import twitter from "./assets/icons/twitter.png"
import octocat from "./assets/icons/Octocat.png"


function App() {
  const [inputText,setInputText]=useState("")

  function handleInputChange(event){
    setInputText(event.target.value)
  }

  function searchUser(){
    console.log(inputText)
  }

  return (
    <div className="container">
      <div className="section-1">
        <h4 className="title">devfinder</h4>
        <button className="btn-mode">
          LIGHT <img width="20" src={sun} alt="" />
        </button>
      </div>
      <div className="search-container">
        <div className="input-container">
          <img width="15" src={search} alt="" />
          <input
            value={inputText}
            onChange={handleInputChange}
            className="input-search"
            type="text"
            placeholder="Search GitHub username..." autocomplete="off" id="usergithub"
          />
        </div>
        <div>
          <button className="btn-search" onClick={searchUser} id="btn-search">Search</button>
        </div>
      </div>
      <div className="information-container" id="container">
        <div className="image-container" id="imagen">
          <img width="100" src={octocat} alt="" />
        </div>
        <div className="description-container">
          <div className="user-date-container" >
            <h2 id="name">The Octocat</h2>
            <p id="created-at">Joined 25 Jun 2011</p>
          </div>
          <div className="user-bio-container">
            <p id="login">@octocat</p>
            <p id="bio">This profile has no bio</p>
          </div>
          <div className="card-information">
            <div>
              <h5>Repos</h5>
              <h2 id="public_repos">8</h2>
            </div>
            <div>
              <h5>Followers</h5>
              <h2 id="followers">3938</h2>
            </div>
            <div>
              <h5>Following</h5>
              <h2 id="following">9</h2>
            </div>
          </div>
          <div className="info-container">
            <div>
              <p id="location">
                <img width="15" src={pin} alt="" />&nbsp;
                San Francisco
              </p>
              <p id="blog">
                <img width="15" src={link} alt="" />&nbsp;
                https://github.blog
              </p>
            </div>
            <div>
              <p id="twitter_username">
                <img width="15" src={twitter} alt="" />&nbsp;
                Not Available
              </p>

              <p id="company">
                <img width="15" src={hotel} alt="" />&nbsp;
                @github
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
