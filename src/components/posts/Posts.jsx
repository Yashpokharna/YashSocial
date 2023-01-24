import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Yash Pokharna",
      userId: 1,
      profilePic:"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "“Remember that happiness is a way of travel – not a destination.🤳”",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Shrishti",
      userId: 2,
      profilePic:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "“Someone will declare, “I am the leader!” and expect everyone to get in line and follow him or her to the gates of heaven or hell. My experience is that it doesn’t happen that way. Others follow you based on the quality of your actions rather than the magnitude of your declarations.” ―Bill Walsh",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
