import { Box } from '@mui/material'
import Icon from 'src/components/shared/icon'
import { useSettings } from 'src/hooks/useSettings'

export interface ChipProps {
  color: 'red' | 'blue' | 'green'
  text: string
  icon?: string
  onClick?: () => void
}

const Chip = (props: ChipProps) => {
  const { color, text, icon, onClick } = props

  const { settings } = useSettings()

  const lightBorderAndTextColor = color === 'red' ? '#D9004D' : color === 'blue' ? '#007BE5' : '#0FA958'
  const lightBgColor = color === 'red' ? '#FCE6EE' : color === 'blue' ? '#E6F2FD' : '#E7F7EF'

  const darkBorderAndTextColor = color === 'red' ? '#FF0000' : color === 'blue' ? '#55B0FF' : '#00FF00'
  const darkBgColor = color === 'red' ? '#D9004D1A' : color === 'blue' ? '#204B72' : '#0FA9581A'

  return (
    <Box
      sx={{
        color: settings.mode === 'light' ? lightBorderAndTextColor : darkBorderAndTextColor,
        bgcolor: settings.mode === 'light' ? lightBgColor : darkBgColor,
        border: settings.mode === 'dark' ? '1px solid' : 'none',
        borderRadius: '4px',
        borderColor: settings.mode === 'dark' ? lightBorderAndTextColor : darkBorderAndTextColor,
        padding: '4px 12px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        textWrap: 'nowrap',
        width: 'fit-content'
      }}
      onClick={onClick}
    >
      {text} {icon && <Icon icon={icon} />}
    </Box>
  )
}

export default Chip
