import React, { useEffect, useState } from 'react'
import { pianoSounds, heaterSounds } from '../data/data';

const Box = () => {

  const [power, setPower] = useState(true);

  const [bank, setBank] = useState("piano"); 

  const handleBank = ({target}) => {

    if(power){
      
      if(target.matches(".piano")){
  
        target.style.backgroundColor = "white";
  
        document.querySelector(".heater").style.backgroundColor = "black";      
  
        setBank("piano");

        document.getElementById("display").textContent = "Smooth Piano Kit";
  
      }
  
      if(target.matches(".heater")){
  
        target.style.backgroundColor = "white";
  
        document.querySelector(".piano").style.backgroundColor = "black";      
  
        setBank("heater");

        document.getElementById("display").textContent = "Heater Kit";
        
      }    

    }

  }  

  const handlePower = ({target}) => {

    if(target.matches(".on")){

      target.style.backgroundColor = "white";

      document.querySelector(".off").style.backgroundColor = "black";      

      setPower(true);

      document.querySelector("input").removeAttribute("disabled");

    }

    if(target.matches(".off")){

      target.style.backgroundColor = "white";      

      document.querySelector(".on").style.backgroundColor = "black";      

      setPower(false);      

      document.querySelector("input").setAttribute("disabled", true);

      let text = document.getElementById("text");      

      document.getElementById("display").textContent = text.textContent;
      
    }

  }  

  const stylesKey = target => {

    target.className ="drum-pad keyPress";

    target.style.transform = "scale(0.9)";

    setTimeout(() => {

      target.removeAttribute("style");

      target.className ="drum-pad";

    }, 200);

  }  

  const playAudio = (audio, array, target) => {

    const $volumen = document.querySelector("input").value;

    audio.volume = $volumen;

    audio.setAttribute("src", array.url);

    audio.play();

    target.id = array.id;

    document.getElementById("display").textContent = target.id;

  }

  const playAudio2 = (audio, array, key) => {

    const $volumen = document.querySelector("input").value;

    audio.volume = $volumen;

    audio.setAttribute("src", array.url);    

    audio.play();

    key.id = array.id;

    document.getElementById("display").textContent = key.id;

  }

  
  const handleClick = ({target}) => {

    if(power){

      let key = target.querySelector("audio").id;

      let $audio = target.querySelector("audio");      

      if(bank === "piano"){

        stylesKey(target);

        if(key === "Q"){

          playAudio($audio,pianoSounds[0],target);

        }

        if(key === "W"){                   

          playAudio($audio,pianoSounds[1],target);

        }

        if(key === "E"){          
          
          playAudio($audio,pianoSounds[2],target);
          

        }

        if(key === "A"){          

          playAudio($audio,pianoSounds[3],target);       

        }

        if(key === "S"){          

         playAudio($audio,pianoSounds[4],target);        
                    

        }

        if(key === "D"){          

          playAudio($audio,pianoSounds[5],target);        

        }

        if(key === "Z"){          

          playAudio($audio,pianoSounds[6],target);      

        }

        if(key === "X"){          
                   
          playAudio($audio,pianoSounds[7],target);         

        }

        if(key === "C"){          

          playAudio($audio,pianoSounds[8],target);        

        }

      }

      if(bank === "heater"){

        stylesKey(target);

        if(key === "Q"){                   

          

          playAudio($audio,heaterSounds[0],target);

        }

        if(key === "W"){                

          

          playAudio($audio,heaterSounds[1],target);

        }

        if(key === "E"){          
          
          

          playAudio($audio,heaterSounds[2],target);

        }

        if(key === "A"){          

          

          playAudio($audio,heaterSounds[3],target);

        }

        if(key === "S"){          

          

          playAudio($audio,heaterSounds[4],target);

        }

        if(key === "D"){          

          

          playAudio($audio,heaterSounds[5],target);

        }

        if(key === "Z"){          

          

          playAudio($audio,heaterSounds[6],target);

        }

        if(key === "X"){
          
          

          playAudio($audio,heaterSounds[7],target);

        }

        if(key === "C"){          

          

          playAudio($audio,heaterSounds[8],target);

        }

      } 

    }else{      

      target.style.transform = "scale(0.9)";

      setTimeout(() => {

        target.removeAttribute("style");        

      }, 200);

    }

  }

  const styleKeyDown = (key) => {

    key.className ="drum-pad keyPress";

    key.style.transform = "scale(0.9)";

    setTimeout(() => {

      key.removeAttribute("style");

      key.className ="drum-pad";

    }, 200);

  }

  const styleKeyDownOff = (key) => {    

    key.style.transform = "scale(0.9)";

    setTimeout(() => {

      key.removeAttribute("style");

    }, 200);

  }

  const handleKeyDown = e => {
    
    let key = e.key.toUpperCase();

    if(key === "Q" || key === "W" || key === "E"
      || key === "A" || key === "S" || key === "D"
      || key === "Z" || key === "X" || key === "C"){

        if(power){
    
          let key = e.key.toUpperCase() 
    
          let $key = document.getElementById(`${key}`).parentElement;
    
          let $audio = $key.querySelector("audio");
    
          if(bank === "piano"){
    
            if(e.key.toUpperCase() === "Q"){
    
              playAudio2($audio, pianoSounds[0], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "W"){          
    
              playAudio2($audio, pianoSounds[1], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "E"){
    
              
              playAudio2($audio, pianoSounds[2], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "A"){
    
              
              playAudio2($audio, pianoSounds[3], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "S"){
    
              
              playAudio2($audio, pianoSounds[4], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "D"){
    
              
              playAudio2($audio, pianoSounds[5], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "Z"){
    
              
              playAudio2($audio, pianoSounds[6], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "X"){
    
              
              playAudio2($audio, pianoSounds[7], $key);          
    
              styleKeyDown($key);
            }
    
            if(e.key.toUpperCase() === "C"){
    
              
              playAudio2($audio, pianoSounds[8], $key);          
    
              styleKeyDown($key);
    
            }
    
          }
    
          if(bank === "heater"){
    
            if(e.key.toUpperCase() === "Q"){
    
              
    
              playAudio2($audio, heaterSounds[0], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "W"){
    
              
    
              playAudio2($audio, heaterSounds[1], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "E"){
    
              
    
              playAudio2($audio, heaterSounds[2], $key);          
    
              styleKeyDown($key);
            }
    
            if(e.key.toUpperCase() === "A"){
    
              
    
              playAudio2($audio, heaterSounds[3], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "S"){
    
              
    
              playAudio2($audio, heaterSounds[4], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "D"){
    
              
    
              playAudio2($audio, heaterSounds[5], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "Z"){
    
              
    
              playAudio2($audio, heaterSounds[6], $key);          
    
              styleKeyDown($key);
    
            }
    
            if(e.key.toUpperCase() === "X"){
    
              
    
              playAudio2($audio, heaterSounds[7], $key);          
    
              styleKeyDown($key);
            }
    
            if(e.key.toUpperCase() === "C"){          
    
              playAudio2($audio, heaterSounds[8], $key);          
    
              styleKeyDown($key);
    
            }
    
          }      
    
        }else{
    
          let key = e.key.toUpperCase() 
    
          let $key = document.getElementById(`${key}`).parentElement;
    
          if(e.key.toUpperCase() === "Q") styleKeyDownOff($key);        
    
          if(e.key.toUpperCase() === "W") styleKeyDownOff($key);     
    
          if(e.key.toUpperCase() === "E") styleKeyDownOff($key);      
    
          if(e.key.toUpperCase() === "A") styleKeyDownOff($key);
    
          if(e.key.toUpperCase() === "S") styleKeyDownOff($key);
    
          if(e.key.toUpperCase() === "D") styleKeyDownOff($key);    
    
          if(e.key.toUpperCase() === "Z") styleKeyDownOff($key);
    
          if(e.key.toUpperCase() === "X") styleKeyDownOff($key);
    
          if(e.key.toUpperCase() === "C") styleKeyDownOff($key);
    
        }
    }

  }

useEffect(() => {

    document.addEventListener("keydown", handleKeyDown);

    const $volumen = document.querySelector("input");

    console.log($volumen);

    /* $volumen.addEventListener("change", setVolumen); */

  }, [])

  useEffect(() => {

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);

  },[power,bank]) 

  return (

    <>      

      <section className="containerKeys">

        <article className="keys">
          <span 
            className="drum-pad"            
            onClick={handleClick}
            id="q">
            Q
            <audio src="" id="Q" className="clip"></audio>
          </span>
          <span 
            className="drum-pad"            
            onClick={handleClick} id="w">
              W
            <audio src="" id="W" className="clip"></audio>
          </span>
          <span 
            className="drum-pad"            
            onClick={handleClick} id="e">
              E
            <audio src="" id="E" className="clip"></audio>
          </span>
        </article>

        <article className="keys">
          <span className="drum-pad" onClick={handleClick} id="a">
              A
            <audio src="" id="A" className="clip"></audio>
          </span>
          <span 
            className="drum-pad" onClick={handleClick} id="s">
              S
            <audio src="" id="S" className="clip"></audio>
          </span>
          <span 
            className="drum-pad" onClick={handleClick} id="d">
              D
            <audio src="" id="D" className="clip"></audio>
          </span>
        </article>

        <article className="keys">
          <span className="drum-pad" onClick={handleClick} id="z">
              Z
            <audio src="" id="Z" className="clip"></audio>
            </span>
          <span className="drum-pad" onClick={handleClick} id="x">
              X
            <audio src="" id="X" className="clip"></audio>
            </span>
          <span className="drum-pad" onClick={handleClick} id="c">
              C
            <audio src="" id="C" className="clip"></audio>
          </span>
        </article>
        
      </section>

      <section className="containerControls">

        <section>

          <p className="textPower">Power</p>

          <article className="powerContainer">
            <div className="off" onClick={handlePower}></div>
            <div className="on" onClick={handlePower}></div>
          </article>

        </section>      

        <article className="containerText">
          <p className="text" id="display"></p>
        </article>

        <article className="containerVol ">
          <input type="range" step="0.01" min="0" max="1" />
        </article>

        <section>

          <p className="textBank">Bank</p>

          <article className="bankContainer">
            <div className="heater" onClick={handleBank}></div>
            <div className="piano" onClick={handleBank}></div>
          </article>

        </section>

        <span id="text"></span>
        
      </section>      

    </>

  )
}

export default Box
