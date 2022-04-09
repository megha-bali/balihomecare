const Service = require('../models/Service.js');
const postService = (req, res) => {
  let newService = new Service({
    name: req.body.name.trim(),
    description: req.body.description.trim(),
    img: req.body.image,
  });
  newService
    .save()
    .then((result) => {
      const response = {
        message: 'Service detail successfully saved!',
        url: `/api/v1/services/${newService._id}`,
        data: newService,
      };
      res
        .status(201)
        .set('content-location', `/api/v1/services/${newService._id}`)
        .json(response, [
          {
            rel: 'self',
            method: 'GET',
            href: `/api/v1/services/${newService._id}`,
          },
          {
            rel: 'create',
            method: 'POST',
            title: 'Create service',
            href: '/api/v1/services/',
          },
        ]);
    })
    .catch((error) => {
      if (error.errors.name.name === 'ValidatorError')
        res.status(422).json({ error: 'Name and Description are required!' });
      else if (error.errors.name.name === 'PayloadTooLargeError')
        res.status(413).json({ error: 'Image size is too large.' });
      else res.status(500).json({ error: 'Server Error occurred!' });
    });
};

const getServicesSearch = (req, res) => {
  let query = null;

  if (req.params.search != 'undefined') {
    //({ type: new RegExp(type, 'i') })
    let searchTerm = req.params.search.replace((/'"/g, "/\\'"));
    query = Service.find({
      $or: [
        {
          name: new RegExp(searchTerm, 'i'),
        },
        {
          description: new RegExp(searchTerm, 'i'),
        },
      ],
    });
  } else {
    query = Service.find({});
  }
  query
    // .exec()
    .then((results) => {
      if (results.length != 0)
        res
          .status(200)
          .json({ message: 'Result found!', status: 200, data: results });
      else
        res
          .status(200)
          .json({ message: 'No result found!', status: 200, data: [] });
    })
    .catch((error) => res.status(500).send(error));
};
const getAllServices = (req, res) => {
  Service.find({})
    // .exec()
    .then((results) => {
      if (results.length != 0)
        res
          .status(200)
          .json({ message: 'Result found!', status: 200, data: results });
      else
        res
          .status(200)
          .json({ message: 'No result found!', status: 200, data: [] });
    })
    .catch((error) => res.status(500).send(error));
};

const getService = (req, res) => {
  Service.findOne({ _id: req.params.id }) //id is in req.params
    .exec()
    .then((result) => {
      if (result != null) res.status(200).json(result);
      else
        res.status(422).json({
          message: 'No record found.',
          status: 422,
          _id: req.params.id,
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const deleteService = (req, res) => {
  Service.deleteOne({ _id: req.params.id }) //id is in req.params
    .exec()
    .then((result) => {
      const response = {
        url: `/api/v1/services/`,
        message: 'Service deleted successfully!',
      };
      res
        .status(201)
        .set('content-location', `/api/v1/services/`)
        .json(response, [
          {
            rel: 'self',
            method: 'GET',
            href: `/api/v1/services/`,
          },
          {
            rel: 'delete',
            method: 'DELETE',
            title: 'Delete Location',
            href: `/api/v1/services/${req.params.id}`,
          },
        ]);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
const updateService = (req, res) => {
  const query = { _id: req.body.id };
  // Set some fields in that document
  const newData = {
    name: req.body.name.trim(),
    description: req.body.description.trim(),
    img: req.body.image,
  };

  const update = {
    $set: newData,
  };
  const options = { returnNewDocument: true };
  Service.findOneAndUpdate(query, update, options)
    .exec()
    .then((updatedDocument) => {
      const response = {
        message: 'Service detail updated successfully!',
        url: `/api/v1/services/${req.body.id}`,
        data: newData,
      };
      res
        .status(201)
        .set('content-location', `/api/v1/services/${req.body.id}`)
        .json(response, [
          {
            rel: 'self',
            method: 'PATCH',
            href: `/api/v1/services/${req.body.id}`,
          },
          {
            rel: 'update',
            method: 'PATCH',
            title: 'Update Service',
            href: `/api/v1/services/${req.body.id}`,
          },
        ]);
    })
    .catch((error) => {
      if (error.errors.name.name === 'ValidatorError')
        res.status(422).json({ error: 'Name and Description are required!' });
      else if (error.errors.name.name === 'PayloadTooLargeError')
        res.status(413).json({ error: 'Image size is too large.' });
      else res.status(500).json({ error: 'Server Error occurred!' });
    });
};
module.exports = {
  postService,
  getService,
  getAllServices,
  deleteService,
  updateService,
  getServicesSearch,
};
