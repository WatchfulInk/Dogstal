import React from 'react'
import Home from "./components/Home";
import Banner from "./components/Banner";
import VideoPreview from "./components/VideoPreview";
import Conducta from './components/Conducta';
import Conducta2 from './components/Conducta2';



function App() {
  return (
    <div>

      <nav>
        <Home />
      </nav>
      
      <Banner />
      <VideoPreview />
      <Conducta />
      <Conducta2 />
    </div>

  )
}

export default App;
