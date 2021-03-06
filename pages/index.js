import { makeStyles } from "@material-ui/core/styles";
import BlogList from "../components/BlogList";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    flexGrow: 1,
  },
});

export default function Home({ blog }) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <BlogList blog={blog} />
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す処理
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://next-blog-shu0328.microcms.io/api/v1/blog",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
