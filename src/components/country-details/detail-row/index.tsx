// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ** Hook Imports
import { useSettings } from 'src/hooks/useSettings'

interface DetailRowProps {
  label: string
  value?: string | number | ReactNode
  children?: ReactNode
  lastMember?: boolean
}

export const DetailRow = (props: DetailRowProps) => {
  // ** Hooks
  const { settings } = useSettings()
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: !props.lastMember ? `1px solid ${theme.palette.text.secondary}` : '0px',
        display: 'flex',
        padding: '1rem',
        gap: '2rem'
      }}
    >
      <Box sx={{ width: '30%' }}>
        <Typography
          sx={{
            color: settings.mode === 'light' ? '#17181A' : '#FFFFFF',
            fontWeight: 700,
            fontSize: '16px'
          }}
        >
          {props.label}
        </Typography>
      </Box>

      <Box sx={{ width: '70%' }}>
        {props.value ? (
          <Typography
            sx={{
              color: settings.mode === 'light' ? '#17181A' : '#FFFFFF',
              fontWeight: 400,
              fontSize: '16px'
            }}
          >
            {props.value}
          </Typography>
        ) : (
          props.children
        )}
      </Box>
    </Box>
  )
}
