import React, {useState, useEffect} from 'react'
import axios from 'axios';


function App() {

  const [adData, setAdData] = useState({})

  const getAdData = async () => {
    const response = await axios.get('./data/Advdata.json')
    setAdData(response.data)
  }

  useEffect(() => {
   getAdData()
  }, [])

  return (
    <div>
      <img src="/data/images/maner.png" id="maner" alt="Maner" data-cy="image" />
      <img src="/data/images/blabar.png" id="blabar" alt="Blåbär" data-cy="image" />
      <img src="/data/images/splash.svg" id="splash" alt="Splash" data-cy="image" />
    </div>
  );
}

export default App;