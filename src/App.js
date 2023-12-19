import './App.css';
import Testimony from './components/Testimony.jsx';

function App() {
  return (
    <div className="App">
      <div className="conatiner-main">
        <h1>Here's what our students say about freeCodeCamp:</h1>
        <Testimony
          name='Emma Bostian'
          country='Sweden'
          img='emma'
          job='Software Engineer'
          company='Spotify'
          testimony='I have always had trouble learning JavaScript. I have taken a lot of courses, but the freeCodeCamp course was the one that stuck. Studying JavaScript as well as data structures and algorithms at freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
        />

        <Testimony
          name='Sarah Chima'
          country='Nigeria'
          img='sarah'
          job='Software Engineer'
          company='ChatDesk'
          testimony='FreeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my programming knowledge from a total beginner level to a very confident level. It was all I needed to get my first developer job at an amazing company.'>
        </Testimony>

        <Testimony
          name='Shawn Wang'
          country='Singapore'
          img='shawn'
          job='Software Engineer'
          company='Amazon'
          testimony='It is scary to change careers. I just gained confidence that I could program by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life.'>
        </Testimony>
      </div>
    </div>
  );
}

export default App;
