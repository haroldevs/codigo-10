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
  const [user,setUser]=useState(null)


  function handleInputChange(event){
    setInputText(event.target.value)
  }

  async function searchUser(){
    try {
      const response=await fetch(`https://api.github.com/users/${inputText}`)
      const data=await response.json()
      setUser(data)
      console.log("data",data)

    } catch (error) {
      console.log("Error",error)
    }


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
            placeholder="Search GitHub username..." autoComplete="off" id="usergithub"
          />
        </div>
        <div>
          <button className="btn-search" onClick={searchUser} id="btn-search">Search</button>
        </div>
      </div>
      <div className="information-container" id="container">
        <div className="image-container" id="imagen">
          <img width="100" src={user?.avatar_url} alt="" />
        </div>
        <div className="description-container">
          <div className="user-date-container" >
            <h2 id="name">{user?.name}</h2>
            <p id="created-at">{user?.created_at}</p>
          </div>
          <div className="user-bio-container">
            <p id="login">@{user?.login}</p>
            <p id="bio">{user?.bio}</p>
          </div>
          <div className="card-information">
            <div>
              <h5>Repos</h5>
              <h2 id="public_repos">{user?.public_repos}</h2>
            </div>
            <div>
              <h5>Followers</h5>
              <h2 id="followers">{user?.followers}</h2>
            </div>
            <div>
              <h5>Following</h5>
              <h2 id="following">{user?.following}</h2>
            </div>
          </div>
          <div className="info-container">
            <div>
              <p id="location">
                <img width="15" src={pin} alt="" />&nbsp;
                {user?.location}
              </p>
              <p id="blog">
                <img width="15" src={link} alt="" />&nbsp;
                {user?.blog}
              </p>
            </div>
            <div>
              <p id="twitter_username">
                <img width="15" src={twitter} alt="" />&nbsp;
                {user?.twitter_username}
              </p>

              <p id="company">
                <img width="15" src={hotel} alt="" />&nbsp;
                {user?.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
