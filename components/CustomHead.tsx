import Head from "next/head";

interface CustomHeadProps {
  title: string;
  description: string;
  image: string;
}

const CustomHead = ({ title, description, image }: CustomHeadProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary"></meta>
    </Head>
  );
};

export default CustomHead;
