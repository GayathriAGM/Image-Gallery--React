import curious from "../assets/Images/curiousdog.jpg"
import dogsleep from "../assets/Images/dogsleep.jpg"
import excitedface from "../assets/Images/excitedface.jpg"
import joyfuldog from "../assets/Images/joyfuldog.jpg"
import lovecompanion from "../assets/Images/lovecompanion.jpg"
import playfuldog from "../assets/Images/playful dog.jpg"
import seriousdog from "../assets/Images/seriousdog.jpg"
import silly from "../assets/Images/silly.jpg"

function Gallery(){
  return(<div>
     <div className="image-container">
    <div className="gallery-box">
    <img class="dogimage" src={joyfuldog} alt="joyfuldog"></img>
      <h4 style={{textAlign:"center"}}>Joyful Dog</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={playfuldog} alt="playful dog"></img>
      <h4 style={{textAlign:"center"}}>Playful Moments</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={dogsleep}  alt="sleep dog"></img>
      <h4 style={{textAlign:"center"}}>Sleepy Pups</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={curious}  alt="curious dog"></img>
      <h4 style={{textAlign:"center"}}>Curious Canines</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={lovecompanion} alt="love companion dog"></img>
      <h4 style={{textAlign:"center"}}>Loyal Buddies</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={excitedface} alt="excited dog"></img>
      <h4 style={{textAlign:"center"}}>Excited Faces</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={seriousdog} alt="serious dog"></img>
      <h4 style={{textAlign:"center"}}>Serious Moments</h4>
    </div>
    <div class="gallery-box">
      <img class="dogimage" src={silly} alt="silly dog"></img>
      <h4 style={{textAlign:"center"}}>Silly and Funny</h4>
    </div>
  </div>
  </div>)
}
export default Gallery