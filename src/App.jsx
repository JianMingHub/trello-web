import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap:'8px' }}>
            <LightModeIcon fontSize='small' />Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlineIcon fontSize='small' />Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' />System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        width: '100%',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        width: '100%',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        display: 'flex',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        alignItems: 'center'
      }}>
        Board content
      </Box>
    </Container>
  )
}

export default App
