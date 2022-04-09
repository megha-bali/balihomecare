const serviceRouter = require('express').Router({ mergeParams: true });

const {
  getServices,
  getService,
  postService,
  deleteService,
  updateService,
  getAllServices,
  getServicesSearch,
} = require('../controllers/serviceController.js');

serviceRouter.get('/', getAllServices);
serviceRouter.get('/:search', getServicesSearch);
serviceRouter.get('/:id', getService);
serviceRouter.post('/', postService);
serviceRouter.delete('/:id', deleteService);
serviceRouter.patch('/:id', updateService);

module.exports = {
  serviceRouter,
};
