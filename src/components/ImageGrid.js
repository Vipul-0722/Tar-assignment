import React from "react"
import { Grid } from "@material-ui/core"
import ImageListItem from "@mui/material/ImageListItem"
import { useStyles } from "../style.js"

const ImageGrid = ({ images, handleModalOpen }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={5}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.id}>
          <div className={classes.imageContainer}>
            <ImageListItem onClick={() => handleModalOpen(image)}>
              <img
                style={{ height: "300px", width: "495px" }}
                className={classes.image1}
                src={image.urls.small}
                alt={image.alt_description}
                loading="lazy"
              />
            </ImageListItem>
            <div className={classes.textContainer}>
              <span>By: {image.user.name}</span>
              <br />
              <span>Likes:{image.likes}</span>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}
export default ImageGrid
