import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelTitle, demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoVideoTitle } from '../utils/constants';

const VideoCard = ({ video: { id:{ videoId }, snippet} }) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{height : '200px', width:'358px'}}/>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <Typography variant='subtitle1' fontWeight={'bold'} color={`white`}>
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
            <Typography variant='subtitle2' fontWeight={'bold'} color={`grey`}>
              {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard