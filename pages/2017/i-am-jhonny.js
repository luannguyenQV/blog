import Head from "next/head";
import Post from "../../layouts/post";
import Title from "../../components/post/title";
import Meta from "../../components/post/meta";
import P from "../../components/post/paragraph";
import withViews from "../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head><title>I am Jhonny</title></Head>
    <Title>I am Jhonny</Title>
    <Meta date="February 4, 2016" views={views} />
    <P>This is meant to be my <b>personal</b> blog.</P>
  </Post>
));
