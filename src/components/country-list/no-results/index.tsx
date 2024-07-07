import { Box, Typography, useTheme } from '@mui/material'

const NoResults = () => {
  // ** Hooks
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <Typography sx={{ fontWeight: 700, fontSize: '3rem' }}>No Results</Typography>
      <Typography sx={{ fontWeight: 400, fontSize: '1.2rem', color: theme.palette.text.primary, textWrap: 'nowrap' }}>
        Try to change search parameters
      </Typography>
    </Box>
  )
}

export default NoResults
