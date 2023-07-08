import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
      <Button
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            ':hover': {
              bgcolor: 'primary.dark',
            },
          }}
      >
        My Button
      </Button>
  );
}

export default App;