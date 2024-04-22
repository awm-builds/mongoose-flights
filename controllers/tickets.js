const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('tickets/new', { title: 'Add Tickets', errorMsg: '', flight });

}

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  req.body.flight = req.params.id;
  const ticket = await Ticket.create(req.body);
  try {
        await ticket.save();
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