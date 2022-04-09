import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import Header from './Header.js';
import Home from './Home.js';
import Services from './Services.js';
import ServiceModal from './ServiceModal';
import About from './About';
import Contact from './Contact.js';
import Footer from './Footer.js';
const App = (props) => {
  const [services, setServices] = useState([]);
  const [service, updateService] = useState(null);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const loadServices = () => {
    axios
      .get('/api/v1/services')
      .then((results) => {
        if (results.data.data.length == 0) {
          setError(results.data.message);
        } else {
          setError('');
        }
        setServices(results.data.data);
      })
      .catch((error) => {
        //setError();
        setError(error.response.data.error);
        setTimeout(function () {
          setError('');
        }, 3000);
      });
  };

  const removeServiceHandler = (event, serviceId) => {
    axios
      .delete(`/api/v1/services/${serviceId}`)
      .then((results) => {
        showInfo(results.data.message);
      })
      .catch((error) => {
        showError(error);
      });
    loadServices();
  };

  const addServiceHandler = (event, values) => {
    axios
      .post(`/api/v1/services`, values)
      .then((results) => {
        let output = results.data.message ? results.data.message : results.message;
		
        showInfo(output);
        loadServices();
        closeServiceModal();
      })
      .catch((error) => {
		showError(error);
      });
  };

  const updateServiceHandler = (event, values, id) => {
    axios
      .patch(`/api/v1/services/${id}`, values)
      .then((results) => {
        let output = results.data.message ? results.data.message : results.message;
		
        loadServices();
        closeServiceModal();
		showInfo(output);
      })
      .catch((error) => {
		  showError(error);
      });
  };
  const searchHandler = (event) => {
    axios
      .get(`/api/v1/services/${event.target.value}`)
      .then((results) => {
        console.log(results);
        if (results.data.data.length == 0) {
          setError(results.data.message);
        } else {
          setError('');
        }
        setServices(results.data.data);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setTimeout(function () {
          setError('');
        }, 3000);
      });
  };

  const openServiceModal = (service) => {
    updateService(service);
  };

  const closeServiceModal = () => {
    updateService(null);
  };
  
  const showError = (error) => {
	  if(error && error['response'] && error.response['data'] && error.response.data['error']) {
		  setError(error.response.data.error);
	  } else if(error && error['response'] && error.response['statusText']) {
			setError(error.response.statusText);
	  } else {
		  setError(error.toString());
	  }
    setTimeout(function () {
		setError('');
    }, 5000);
  };

	const showInfo = (msg) => {
		setInfo(msg);
		setTimeout(function () {
			setInfo('');
		}, 5000);
	};
  
  useEffect(loadServices, []);

  return (
    <>
      <Header />
      <main>
        {error ? (<div id="error" className="error box">{error}</div>) : (<div></div>)}
		{info ? (<div id="info-popup" className="info-popup box">{info}</div>) : (<div></div>)}
		
        <Home />
        <Services
          services={services}
          openServiceModal={openServiceModal}
          removeServiceHandler={removeServiceHandler}
          searchHandler={searchHandler}
        />
        {service ? (
          <ServiceModal
            service={service}
            closeServiceModal={closeServiceModal}
            addServiceHandler={addServiceHandler}
            updateServiceHandler={updateServiceHandler}
          />
        ) : (
          <> </>
        )}
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
