import React from 'react';
import { Text, Box, Grommet } from 'grommet';
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
        <Box direction="row">
          <Text>Hello Word</Text>
          <Text>Hello Word 2</Text>
        </Box>
        <NewCompExample/>
    </Grommet>
  )
}

export default App;
