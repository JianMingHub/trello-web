// rfce

import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      display: 'flex',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      alignItems: 'center'
    }}>
      Board content
    </Box>
  )
}

export default BoardContent