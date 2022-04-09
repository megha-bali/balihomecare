import React from 'react';
import axios from 'axios';
import Service from './Service';
import addImg from './img/plus.png';
import { useState } from 'react';

const Services = (props) => {
  const [gridView, setGridView] = useState('');

  const gridViewHandler = () => {
    const view = gridView ? '' : 'grid';
    setGridView(view);
  };

  const addServiceHandler = () => {
    props.openServiceModal({ name: '', description: '' });
  };

  return (
    <>
      {props.services ? (
        <section
          id="sectionService"
          className={'children child2 dark-color transition4 ' + gridView}
        >
          <div className="service-header">
            <h1>Care Services</h1>

            <div className="icons">
              <input
                type="text"
                name="search"
                className="search-field"
                placeholder="Search here by name or description"
                onChange={(event) => props.searchHandler(event)}
              />
              <img
                src={addImg}
                alt="Add Service"
                id="addServiceIcon"
                className="box radius10"
                title="Add Service"
                onClick={addServiceHandler}
              />
              <div
                id="gridListIcon"
                className="box"
                title="Change View"
                onClick={gridViewHandler}
              >
                &nbsp;
              </div>
            </div>
          </div>
          {props.services.map((service) => (
            <Service
              service={service}
              key={service._id}
              openServiceModal={props.openServiceModal}
              removeServiceHandler={props.removeServiceHandler}
            />
          ))}
        </section>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
export default Services;
