import { Box, CircularProgress, Typography } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <Typography sx={{ fontWeight: 700, fontSize: '2rem' }}>Information is Loading, Please Wait</Typography>
      <CircularProgress />
    </Box>
  )
}

export default Loading
