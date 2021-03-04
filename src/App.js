import React, { useState } from 'react';

import Matematica from './components/matematica/Matematica.js'
import Header from './components/header/Header.js'

function App() {

  const [seleccionar, setSeleccionar] = useState(false);

  return (
    <div className="App">
      <Header setSeleccionar={setSeleccionar}/>
      <Matematica seleccionar={seleccionar} />
    </div>
  );
}

export default App;
