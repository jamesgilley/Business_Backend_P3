import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const EannounceContainer = () => {
  const [disabled, setDisabled] = useState(true);
  const [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    try {
      await axios.delete(`/announce/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const allPosts = await axios.get("/announce", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });

      setPosts(allPosts.data.reverse());
    })();
  }, []);

  return (
    <div class="anncpg">
      <table className="table">
        <thead className="thead1">
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">SUBJECT</th>
            <th scope="col">ANNOUNCEMENT</th>
            {/* <th scope="col">DELETE</th> */}
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <th scope="row">
                {moment(post.createdAt).format("MM/DD/YYYY, h:mm:ss a")}
              </th>
              <td>{post.title}</td>
              <td>{post.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EannounceContainer;
