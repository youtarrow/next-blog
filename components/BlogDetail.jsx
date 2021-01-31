import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Blog.module.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function ImgMediaCard({ blog }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Card className={classes.root}>
          <>
            <CardHeader title={blog.title} subheader={blog.publishedAt} />
            <CardMedia
              className={styles.media}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={blog.image.url}
              title={blog.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.content}`,
                  }}
                />
              </Typography>
            </CardContent>
          </>
          <CardActions>
            <Link href="/">
              <Button variant="contained">戻る</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}