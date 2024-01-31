
import tours from "./models/tours"


const getAllTours = (req, res) => {
    res.json(tours);
};

const getToursById = (req, res) => {
    const found = tours.some((tour) => tour.id === parseInt(req.params.id));
  
    if (found) {
      res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No tours with the id of ${req.params.id}` });
    }
  };

module.exports = {
    getAllTours,
    getToursById,
  };