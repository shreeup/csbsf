import React, { useState } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ];
  return {
    props: { feed },
    revalidate: 10,
  };
};

const FiboPage: React.FC = () => {
  const [loading, showloading] = useState(false);
  const [inputval, setinputval] = useState(0);
  return (
    <Layout>
      <div className="page">
        <h1>Fibonacci Series</h1>
        <main>
          <form action="api/fibo" id="fibonacciform" method="post">
            <label htmlFor="inputnum">Number:</label>
            <input
              type="number"
              id="inputnum"
              name="inputnum"
              required
              value={inputval}
              onChange={(e) => setinputval(parseInt(e.target.value))}
            />
            {!loading && (
              <button
                type="submit"
                onSubmit={() => {
                  return showloading(true);
                }}
              >
                Submit
              </button>
            )}
            {loading && <div> Processing..</div>}
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default FiboPage;
