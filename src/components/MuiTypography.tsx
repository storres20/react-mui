import React from 'react'
import {Typography} from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      
      <Typography variant='subtitle1'>subtitle 1 Heading</Typography>
      <Typography variant='subtitle2'>subtitle 2 Heading</Typography>
      
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore, culpa perferendis recusandae facere autem quas corrupti non. Perferendis veritatis eaque sapiente ullam ex et modi repellat laudantium vel nulla.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur autem, facere, molestias repudiandae a ad vero nihil, fugiat earum voluptatem eum? Consequatur molestias officia sit optio velit quo mollitia.</Typography>
    </div>
  )
}
