import { Box } from '@mui/material'
import Icon from 'src/components/shared/icon'

export interface ChipProps {
  color: 'red' | 'blue' | 'green'
  text: string
  icon?: string
  onClick?: () => void
}

const Chip = (props: ChipProps) => {
  const { color, text, icon, onClick } = props

  const borderAndTextColor = color === 'red' ? '#FF0000' : color === 'blue' ? '#55B0FF' : '#00FF00'
  const bgColor = color === 'red' ? '#FF2C2C33' : color === 'blue' ? '#0089FF40' : '#0FA9584D'

  return (
    <Box
      sx={{
        color: borderAndTextColor,
        bgcolor: bgColor,
        border: '1px solid',
        borderRadius: '4px',
        borderColor: borderAndTextColor,
        padding: '4px 12px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem'
      }}
      onClick={onClick}
    >
      {text} {icon && <Icon icon={icon} />}
    </Box>
  )
}

export default Chip
