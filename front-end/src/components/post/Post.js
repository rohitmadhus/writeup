import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
  const { post } = props;
  const to = { pathname: "/post/" + post._id, state: post };
  return (
    <div className="post">
      <Link to={to}>
        <img className="postImg" alt="img" src={post.image}></img>
      </Link>
      <div className="postInfo">
        <div className="postCats">
          {post.category.map((category, index) => (
            <span key={index} className="postCat">
              {category}
            </span>
          ))}
        </div>
        <Link to={to} style={{ textDecoration: "none" }}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        {/* <span className="postDate">1 hours ago</span> */}
      </div>
      <p className="postDesc">{post.content}</p>
    </div>
  );
}
