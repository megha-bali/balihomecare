import React from 'react';
import deleteImg from './img/delete.png';
import editImg from './img/edit.png';
import defaultImage from './img/defaultImage.jpg';
const Service = (props) => {
  //   debugger;
  return (
    <>
      <div className="services box">
        <img
          src={props.service.img ? props.service.img : defaultImage}
          alt="In-Home Care"
          className="service-img box"
        />
        <div>
          <div className="title">
            <span>{props.service.name}</span>
            <span>
              <img
                src={editImg}
                alt="Edit"
                id="editServiceIcon"
                className="transition4"
                title="Edit Service"
                onClick={(event) => props.openServiceModal(props.service)}
              />
              <img
                src={deleteImg}
                alt="Delete"
                id="deleteServiceIcon"
                className="transition4"
                title="Delete Service"
                onClick={(event) =>
                  props.removeServiceHandler(event, props.service._id)
                }
              />
            </span>
          </div>
          <div className="info">{props.service.description}</div>
        </div>
      </div>
    </>
  );
};
export default Service;
