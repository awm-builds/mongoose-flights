const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
};

/* async function create(req, res) {
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
} */