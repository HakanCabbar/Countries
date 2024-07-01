import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { ReactNode } from 'react'
import { useSettings } from 'src/hooks/useSettings'

interface DetailRowProps {
  label: string
  value?: string
  children?: ReactNode
  isLastMember: boolean
}

export const DetailRow = (props: DetailRowProps) => {
  const { settings } = useSettings()
  const theme = useTheme()

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
          color: settings.mode === 'light' ? '#17181A' : '#FFFFFF',
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
  )
}
