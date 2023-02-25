import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(1),
    height: "100%",
  },
  media: {
    height: 140,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "8px",
    maxWidth: "800px",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  image: {
    height: "300px",
    width: "400px",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
  },
  imageInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(2),
  },
  infoLabel: {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
  },

  image1: {
    borderRadius: "10px",
    height: "300px",
    objectFit: "cover",
    width: "400px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  textContainer: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "8px",
  },

  imageContainer: {
    position: "relative",
  },
}))
