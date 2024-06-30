import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import { useTheme } from 'src/context/themeContext'
import { useTheme as useMuiTheme } from '@mui/material/styles'

interface DetailRowProps {
  label: string
  value?: string
  children?: ReactNode
  isLastMember: boolean
}

export const DetailRow = (props: DetailRowProps) => {
  const { mode } = useTheme()
  const theme = useMuiTheme()

  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: !props.isLastMember ? `1px solid ${theme.palette.text.secondary}` : '0px',
        display: 'flex',
        padding: '1rem'
      }}
    >
      <Typography
        sx={{
          width: '30%',
          color: mode === 'light' ? '#17181A' : '#FFFFFF',
          fontWeight: 700,
          fontSize: '16px'
        }}
      >
        {props.label}
      </Typography>
      {props.value ? (
        <Typography
          sx={{
            width: '70%',
            color: mode === 'light' ? '#17181A' : '#FFFFFF',
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
  )
}
