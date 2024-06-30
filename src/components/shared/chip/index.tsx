import { Box } from '@mui/material'

export interface ChipProps {
  color: 'red' | 'blue' | 'green'
  text: string
}

const Chip = (props: ChipProps) => {
  const borderAndTextColor = props.color === 'red' ? '#FF0000' : props.color === 'blue' ? '#55B0FF' : '#00FF00'

  const bgColor = props.color === 'red' ? '#FF2C2C33' : props.color === 'blue' ? '#0089FF40' : '#0FA9584D'

  return (
    <Box
      sx={{
        color: borderAndTextColor,
        bgcolor: bgColor,
        border: '1px solid',
        borderRadius: '4px',
        borderColor: borderAndTextColor,
        paddingX: '12px',
        paddingY: '4px'
      }}
    >
      {props.text}
    </Box>
  )
}

export default Chip
