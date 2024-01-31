import services from "./models/services"


const getAllServices = (req, res) => {
    res.json(services);
};

const getServicesById = (req, res) => {
    const found = services.some((service) => service.id === parseInt(req.params.id));
  
    if (found) {
      res.json(services.filter((service) => service.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No services with the id of ${req.params.id}` });
    }
  };

  module.exports = {
    getAllServices,
    getServicesById,
  };