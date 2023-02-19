import { Stack, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import {Sidebar, Videos} from './';

const Feed = () => (
  <Stack sx={{ flexDirection:{ sx:'column' , md:'row' }}}>
    <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight:'1px solid #3d3d3d', px:{ sx:0, md:2}}} >
      <Sidebar />
      <Typography className='copyright' variant='body2' sx={{ mt:1.5, color: '#fff'}}>
        Copyright 2022 JulianMontes Media
      </Typography>
    </Box>
    <Box sx={{}} p={2} overflow='auto' height={`90vh`} flex={2}>
      <Typography variant='h4' fontWeight={`bold`} mb={2} sx={{color: 'white'}}>
        NEW <span style={{color: '#F31503'}}>Videos</span>
      </Typography>
      <Videos />
    </Box>
  </Stack>
)

export default Feed