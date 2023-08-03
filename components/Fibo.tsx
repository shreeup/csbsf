import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type FiboProps = {
  id: string;
  num: number;
  series: string;
  createdat: string;
};

const Fibo: React.FC<{ fibo: FiboProps }> = ({ fibo }) => {
  const authorName = fibo.series ? fibo.series : "Not found in db";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${fibo.num}`)}>
      <h2>{authorName}</h2>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Fibo;
