import { React, useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./postpage.css";

export default function PostPage(props) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const postUrl = "api/post/" + props.match.params.postId;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(postUrl);
        setLoading(false);
        setPost(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    if (!props.location.state) fetchPosts();
    else setPost(props.location.state);
  }, [postUrl, props.location.state]);

  return (
    <div className="postPage">
      <SinglePost post={post} />
      {/* <Sidebar></Sidebar> */}
    </div>
  );
}
