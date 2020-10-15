import React from 'react';
import { Text, Box, Grommet } from 'grommet';
import { Profil } from './features/Profil/Profil';
import { NewCompExample } from './features/NewCompExample/NewCompExample';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return(
    <Grommet theme={theme} full>
        <Box pad="small"> 
          <Profil></Profil>
        </Box>
    </Grommet>
  )
}

export default App;
