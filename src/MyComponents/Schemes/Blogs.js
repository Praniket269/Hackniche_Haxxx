
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <div style={{display:'flex', flexDirection:'row', padding:'20px 5px 10px 5px', justifyContent:'space-evenly'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        //   image={cover}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food
          </Typography>
          <Typography variant="body2" color="text.secondary">
              A group of 8 crazy bloggers who see the world through hungry
              eyes!"-that's how they describe themselves. Undoubtedly, they have
              got the best dishes covered on their blog without compromising on
              food photography skills.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        //   image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Health
          </Typography>
          <Typography variant="body2" color="text.secondary">
          How did we ever manage to cook before the arrival of the internet?
              I suppose we had to rely on cookbooks, cooking tv shows, and
              knowledge handed down from our grandmothers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}