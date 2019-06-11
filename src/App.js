import React from 'react'

import { MainContainer } from './styles/components'

import Navbar from './components/Navbar'
import Steps from './components/Steps'
import ListInfo from './components/ListInfo'

function App() {
  return (
    <div>
      <Navbar />
      <Steps />
      <MainContainer>
        <ListInfo
          title='O Bebê Nerd'
          totalProducts={57}
          totalPrice={6000}
        />
      </MainContainer>
    </div>
  );
}

export default App;
