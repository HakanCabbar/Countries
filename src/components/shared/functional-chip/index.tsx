import { Box, Typography } from '@mui/material'
import Icon from 'src/components/shared/icon'

export interface ChipProps {
  bgColor: string
  textColor: string
  text: string
  icon: string
  onClick: () => void
}

const FunctionalChip = (props: ChipProps) => {
  return (
    <Box
      sx={{
        bgcolor: props.bgColor,
        borderRadius: '4px',
        color: props.textColor,
        paddingX: '12px',
        paddingY: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        width: 'content-fit',
        cursor:'pointer',
        textWrap:'nowrap'
      }}
      onClick={props.onClick}
    >
      <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>{props.text}</Typography>
      <Icon icon={props.icon} />
    </Box>
  )
}

export default FunctionalChip
