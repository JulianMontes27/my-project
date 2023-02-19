import { Stack, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import {Sidebar, Videos} from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
  //state for changing the category in the sidebar
  const [selectedCategory, setSelectedCategory] = useState('New')
  //data that returns the fetchFromApi function.
  const [videos, setVideos] = useState([])

  //when the component first mounts and every time the selected category changes, call this useEffect to fetch new data for the feed. The first time is going to be the 'New' category.
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)})
  }, [selectedCategory]);

  return(
  <Stack sx={{ flexDirection:{ sx:'column' , md:'row' }}}>
    <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight:'1px solid #3d3d3d', px:{ sx:0, md:2}}} >
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className='copyright' variant='body2' sx={{ mt:1.5, color: '#fff'}}>
        Copyright 2023 Julian Montes Media
      </Typography>
    </Box>
    <Box sx={{}} p={2} overflow='auto' height={`90vh`} flex={2}>
      <Typography variant='h4' fontWeight={`bold`} mb={2} sx={{color: 'white'}}>
        {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
  </Stack>
  )
}

export default Feed