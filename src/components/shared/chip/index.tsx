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
  // ** Hooks
  const { settings } = useSettings()

  // ** Variables
  const lightBorderAndTextColor = props.color === 'red' ? '#D9004D' : props.color === 'blue' ? '#007BE5' : '#0FA958'
  const lightBgColor = props.color === 'red' ? '#FCE6EE' : props.color === 'blue' ? '#E6F2FD' : '#E7F7EF'

  const darkBorderAndTextColor = props.color === 'red' ? '#FF0000' : props.color === 'blue' ? '#55B0FF' : '#00FF00'
  const darkBgColor = props.color === 'red' ? '#D9004D1A' : props.color === 'blue' ? '#204B72' : '#0FA9581A'

  return (
    <Box
      sx={{
        color: settings.mode === 'light' ? lightBorderAndTextColor : darkBorderAndTextColor,
        bgcolor: settings.mode === 'light' ? lightBgColor : darkBgColor,
        border: settings.mode === 'dark' ? '1px solid' : 'none',
        borderRadius: '4px',
        borderColor: settings.mode === 'dark' ? lightBorderAndTextColor : darkBorderAndTextColor,
        padding: '4px 12px',
        cursor: props.onClick ? 'pointer' : 'default',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        textWrap: 'nowrap',
        width: 'fit-content'
      }}
      onClick={props.onClick}
    >
      {props.text} {props.icon && <Icon icon={props.icon} />}
    </Box>
  )
}

export default Chip
