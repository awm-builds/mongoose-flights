const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All flights', flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({flight: flight._id});
  res.render('flights/show', { title: 'Flight Detail', flight });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
  for (const key in req.body) {
  if (req.body[key] === '') delete req.body[key];
}
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}