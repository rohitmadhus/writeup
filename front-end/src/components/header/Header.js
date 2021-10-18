import "./header.css";

export default function Header() {
  return (
    <div className="header">
      {/* <div className="headerTitles">
          <span className="headerTitleSm">Header title</span>
          <span className="headerTitleLm">Blog</span>
        </div> */}
      <img
        className="headerImg"
        src="/images/homeImage.svg"
        alt="Header Img"
      ></img>
    </div>
  );
}
