import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import image1 from "../Assets/1.jpeg";
import image2 from "../Assets/2.jpeg";
import image3 from "../Assets/3.jpeg";
import image4 from "../Assets/4.jpeg";

export default function MultiActionAreaCard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px 5px 10px 5px",
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image={image1} alt="green iguana" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A group of 8 crazy bloggers who see the world through hungry
                eyes!"-that's how they describe themselves. Undoubtedly, they
                have got the best dishes covered on their blog without
                compromising on food photography skills.  
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
              image={image2}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                How did we ever manage to cook before the arrival of the
                internet? I suppose we had to rely on cookbooks, cooking tv
                shows, and knowledge handed down from our grandmothers.
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px 5px 10px 5px",
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image3}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                H S "Harry" Kler, is well known in the war lores of the Indian
                Army as the Brigadier who knocked on the doors of Dacca on
                December 15th , 1971. Retired as a Major General, he passed away
                last week at 93 years of age. Wg Cdr Unni Kartha writes a
                tribute to the man that was in the thick of action - in all
                wars.
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
              image={image4}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The first ever Maha Vir Chakra award for free India went to a
                man who at the time of the action was not even part of the
                Indian Army. It was Brigadier Rajinder Singh, the Commander of
                the Jammu and Kashmir State Forces. Major Brahma Singh recalls
                the circumstances leading up to Brigadier Rajinder Singh's last
                battle in Kashmir in 1947.
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
    </div>
  );
}
