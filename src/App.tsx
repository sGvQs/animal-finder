import { SetStateAction, useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  
  axios.defaults.withCredentials = false;

  const [img, setImg] = useState("")

  
  const handleCat = () => {
    axios.get(
      "https://aws.random.cat/meow"
      ).then((res) => {
      setImg(res.data.file);
      console.log(res);
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      console.log(img);
    })
  }

  const handleDog = () => {
    axios.get(
      "https://dog.ceo/api/breeds/image/random"
      ).then((res) => {
      setImg(res.data.message);
      console.log(res);
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      console.log(img);
    })
  }

  const handleFox = () => {
    axios.get(
      "https://randomfox.ca/floof/"
      ).then((res) => {
      setImg(res.data.image);
      console.log(res);
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      console.log(img);
    })
  }

  return (
    <div className="App">
      <h1>Animal Finder</h1>
      <div className='img-wrap'>
        <img className='img-img' src={img} alt="" />
        <div className='buttons-wrap'>
          <button className="cat-button" onClick={handleCat} >Cat Finder</button>
          <button className="dog-button" onClick={handleDog}>Dog Finder</button>
          <button className="goat-button" onClick={handleFox}>Fox Finder</button>
        </div>
      </div>
    </div>
  )
}

export default App

// function withCredentials(arg0: string, withCredentials: any, arg2: boolean) {
//   throw new Error('Function not implemented.');
// }
