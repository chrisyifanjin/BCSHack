import { useState } from "react";
import React from "react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Geocode from "react-geocode";
const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [Description, setDescription] = useState("");
  const [Location, setLocation] = useState("");
  const [Contact, setContact] = useState("");
  const [geo, setGeo] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("please add a task");
    }
    onAdd({ title, Price, Description, Contact, Location, image });

    setTitle("");
    setPrice("");
    setImage("");
    setDescription("");
    setLocation("");
    setContact("");
    setGeo(
      Geocode.fromAddress("").then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          return { lat, lng };
        },
        (error) => {
          console.error(error);
        }
      )
    );
  };

  const state = {
    file: null,
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    this.setState({ file: file });
  };

  const handleUpload = (e) => {
    let file = this.state.file;

    let formData = new FormData();

    formData.append("image", file);
    formData.append();
  };

  return (
    <form className="add-post-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Contact"
          value={Contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Location"
          value={Location}
          onChange={(e) => {
            setLocation(e.target.value);
            setGeo(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <input type="file" name="image" onChange={(e) => this.handleFile(e)} />
        <button type="button" onClick={(e) => this.handleUpload(e)}>
          Upload!
        </button>
      </div>
      <input type="submit" value="Save post" className="btn btn-block" />
    </form>
  );
};

export default AddPost;
