import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Grid,
  TextField,
  Modal,
  Typography,
  IconButton,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import SearchIcon from "@material-ui/icons/Search"
import { useStyles } from "./style.js"
import ImageGrid from "./components/ImageGrid.js"

const App = () => {
  const classes = useStyles()
  const [images, setImages] = useState([])
  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_TOKEN}`
        )
        setImages(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchImages()
  }, [])

  const handleSearch = async (event) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?query=${process.env.REACT_APP_TOKEN}`
      )
      setImages(response.data.results)

      console.log(response.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  const handleModalOpen = (image) => {
    setSelectedImage(image)
  }

  const handleModalClose = () => {
    setSelectedImage(null)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "1rem",
              paddingBottom: "10px",
            }}
          >
            <SearchIcon />
            <TextField
              fullWidth
              variant="filled"
              label="Search for Images"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSearch(event)
                }
              }}
              style={{ marginLeft: "0.5rem" }}
            />
          </div>
        </Grid>
      </Grid>

      <ImageGrid images={images} handleModalOpen={handleModalOpen} />

      {selectedImage && (
        <Modal
          className={classes.modal}
          open={Boolean(selectedImage)}
          onClose={handleModalClose}
        >
          <div className={classes.paper}>
            <div className={classes.modalHeader}>
              <Typography variant="h4">{selectedImage.user.name}</Typography>
              <IconButton onClick={handleModalClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className={classes.modalBody}>
              <img
                className={classes.image}
                src={selectedImage.urls.regular}
                alt={selectedImage.alt_description}
              />
              <div className={classes.imageInfo}>
                <Typography variant="body1">
                  <span className={classes.infoLabel}>Description:</span>
                  {selectedImage.alt_description}
                </Typography>
                <Typography variant="body1">
                  <span className={classes.infoLabel}>Likes:</span>
                  {selectedImage.likes}
                </Typography>
                <Typography variant="body1">
                  <span className={classes.infoLabel}>Instagram:</span>
                  {selectedImage.user.instagram_username || "N/A"}
                </Typography>
                <Typography variant="body1">
                  <span className={classes.infoLabel}>Twitter:</span>
                  {selectedImage.user.twitter_username || "N/A"}
                </Typography>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
export default App
