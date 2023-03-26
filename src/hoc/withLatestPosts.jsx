import React from "react";
import { useSelector } from "react-redux";

export default function withLatestPosts(Children) {
 return (props) => {
  const { latestPosts } = useSelector(({ apr }) => ({
   latestPosts: apr.lastProjects,
  }));
  return <Children {...props} latestPosts={latestPosts} />;
 };
}
