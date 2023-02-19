import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selected= 'New'

const Sidebar = () => (
    <Stack direction={`row`} sx={{overflow: 'auto', height:{ sx: 'auto', md: '95%'}, flexDirection:{ md: 'column'}}}>
        {
            categories.map((cate)=>(
                <button key={cate.name} className='category-btn' style={{ background: cate.name===selected && 'red', color: 'white'}}>
                    <span style={{color: cate.name===selected ? 'white' : 'red', marginRight: '15px'}}>{cate.icon}</span>
                    <span style={{opacity: cate.name===selected ? '1' : '0.8' }}>{cate.name}</span>
                </button>
            ))
        }
    </Stack>
  )

export default Sidebar