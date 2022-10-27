import './App.css';
import Header from "./components/Header"

function App() {

  function saludar(){
    console.log("Hola mundo")
  }

  return ( 
    <div class="container">
      <div class="section-1">
        <h4 class="title">devfinder</h4>
        <button class="btn-mode">
          LIGHT <img width="20" src="./image/sun.png" alt="" />
        </button>
      </div>
      <div class="search-container">
        <div class="input-container">
          <img width="15" src="./image/search.png" alt="" />
          <input
            class="input-search"
            type="text"
            placeholder="Search GitHub username..." autocomplete="off" id="usergithub"
          />
        </div>
        <div>
          <button class="btn-search" id="btn-search">Search</button>
        </div>
      </div>
      <div class="information-container" id="container">
        <div class="image-container" id="imagen">
          <img width="100" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="" />
        </div>
        <div class="description-container">
          <div class="user-date-container" >
            <h2 id="name">The Octocat</h2>
            <p id="created-at">Joined 25 Jun 2011</p>
          </div>
          <div class="user-bio-container">
            <p id="login">@octocat</p>
            <p id="bio">This profile has no bio</p>
          </div>
          <div class="card-information">
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
          <div class="info-container">
            <div>
              <p id="location">
                <img width="15" src="./image/pin.png" alt="" />&nbsp;
                San Francisco
              </p>
              <p id="blog">
                <img width="15" src="./image/link.png" alt="" />&nbsp;
                https://github.blog
              </p>
            </div>
            <div>
              <p id="twitter_username">
                <img width="15" src="./image/twitter.png" alt="" />&nbsp;
                Not Available
              </p>

              <p id="company">
                <img width="15" src="./image/hotel.png" alt=""/>&nbsp;
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
