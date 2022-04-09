import React from 'react';
import { useState, useEffect } from 'react';
import defaultImage from './img/defaultImage.jpg';
const ServiceModal = (props) => {
  const [image, setImage] = useState(props.service.img);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formEl = event.target.elements;
    // const file = event.target.files[0];
    // const base64 = await convertToBase64(file);
    //debugger;
    const values = {
      id: formEl.id.value,
      name: formEl.title.value,
      description: formEl.description.value,
      image: image, //formEl.image.value,
    };

    if (props.service._id) {
      props.updateServiceHandler(event, values, props.service._id);
    } else {
      props.addServiceHandler(event, values);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = (event) => {
    if (event != null) {
      const file = event.target.files[0];

      const base64 = convertToBase64(file)
        .then((result) => {
          // debugger;
          setImage(result);
        })
        .catch((error) => console.log(error));
    }
  };
  useEffect(handleFileUpload, []);
  return (
    <>
      <div id="addServiceModel" className="model">
        <div
          className="layout"
          id="serviceModelLayout"
          onClick={props.closeServiceModal}
        >
          &nbsp;
        </div>
        <div className="popup box">
          <span
            id="serviceModelX"
            className="close box radius10"
            onClick={props.closeServiceModal}
          >
            X
          </span>
          <h3>
            {props.service._id ? 'Update service' : 'Create a new service'}
          </h3>
          <div>
            <form onSubmit={(event) => formSubmitHandler(event)} method="POST">
              <label for="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={props.service.name}
              />
              <label for="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                defaultValue={props.service.description}
              ></textarea>
              <label for="image">Image:</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(event) => handleFileUpload(event)}
                accept=".jpeg, .png, .jpg"
              />
              {props.service._id ? (
                <img
                  src={props.service.img ? props.service.img : defaultImage}
                  alt="Bali Home Care Services"
                  className="serviceImg"
                />
              ) : (
                <div></div>
              )}
              <input type="hidden" name="id" defaultValue={props.service._id} />
              <button>
                {props.service._id ? 'Update service!' : 'Create a Service!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceModal;
