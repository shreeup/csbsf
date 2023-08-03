import React from "react";
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { FiboProps } from "../../components/Fibo";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const fibo = await prisma.fibonacci.findFirst({
    where: {
      num: Number(params.id),
    },
  });

  if (!fibo) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      series: fibo.Value,
    },
  };
};

const Series: React.FC<FiboProps> = (props) => {
  let series = props.series;
  if (!props) {
    series = `Not found in database. Please use form to create`;
  }

  return (
    <Layout>
      <div>
        <h2>{series}</h2>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Series;
