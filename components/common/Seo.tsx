import Head from "next/head";

type Props = {
  pageTitle: string;
};

const Seo = ({ pageTitle }: Props) => (
  <Head>
    <title>
      {pageTitle &&
        `${pageTitle} || Jano - Creative Multipurpose React NextJS Template}`}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default Seo;
