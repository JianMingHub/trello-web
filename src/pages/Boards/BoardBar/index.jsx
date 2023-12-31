// rfce

import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      width: '100%',
      alignItems: 'center'
    }}>
      Board bar
    </Box>
  )
}

export default BoardBar