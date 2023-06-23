import './Home.scss'
import logoImg from '../images/shark-tank-india-logo.png'
import Sharks from "./sharks/sharks";
import PitchTable from "./piches/PitchTable";

const Home = () => {
  return <>

    <div className="body">
    <header className="showcase" >
      <div className="showcase-top">
        <img src={logoImg} alt="LOGO" />
      </div>
      <div className="showcase-content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Anytime On SONY LIV</p>
        <a href="https://www.sonyliv.com/shows/shark-tank-india-1700000741" target="_blank" className="btn btn-xl">Watch Now on SONY LIV</a>
      </div>
    </header>
    </div>
    <div className="shark-team">
      <br/>
    <h1 class="text-center text-black">Meet Our Shark Team</h1>
    <Sharks/>
    <PitchTable/>
    </div>
  </>;
};

export default Home;
