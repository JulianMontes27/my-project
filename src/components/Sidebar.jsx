import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { Category } from '@mui/icons-material';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack direction={`row`} sx={{overflow: 'auto', height:{ sx: 'auto', md: '95%'}, flexDirection:{ md: 'column'}}}>
        {
            categories.map((cate)=>(
                <button key={cate.name} className='category-btn' onClick={()=>setSelectedCategory(cate.name)} style={{ background: cate.name===selectedCategory && 'red', color: 'white'}}>
                    <span style={{color: cate.name===selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{cate.icon}</span>
                    <span style={{opacity: cate.name===selectedCategory ? '1' : '0.8' }}>{cate.name}</span>
                </button>
            ))
        }
    </Stack>
  )

export default Sidebar