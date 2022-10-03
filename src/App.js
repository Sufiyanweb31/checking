import './App.css';
import React, { useState } from 'react'
import Navbar from './componentes/Navbar';
import News from './componentes/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () =>{
  const pageSize =  4;
  // const apikey = '10fe3d630acf4f0088a5958d22a8df0b'

  const [progress, setProgress] = useState(0);


    return (
      <div>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App