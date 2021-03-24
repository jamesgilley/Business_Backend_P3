import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteBtn from "./DeleteBtn/index";
import moment from "moment";

const AnnounceContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });

  const [posts, setPosts] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    const authToken = window.localStorage.getItem("auth-token");

    try {
      const newPost = await axios.post("/announce", form, {
        headers: { "x-auth-token": authToken },
      });

      console.log(newPost);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };
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
      <form onSubmit={submitPost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={onChange}
        />
        <p></p>
        <textarea
          type="text"
          name="text"
          placeholder="Text"
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p></p>
      <table className="table">
        <thead className="thead1">
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">SUBJECT</th>
            <th scope="col">MESSAGE</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <th>{moment(post.createdAt).format("MM/DD/YYYY, h:mm:ss a")}</th>
              <td>{post.title}</td>
              <td>{post.text}</td>
              <td>
                <DeleteBtn onClick={() => deletePost(post._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnounceContainer;
