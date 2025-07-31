

// External Module
const express = require('express');
const hostRouter = express.Router();


hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to the airbnb' });
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  const { houseName, pricePerDay, paddLocation, photoOfHouse, ratingOfHouse } = req.body;

  console.log("Home Registration is Successful", req.body);

  registeredHomes.push({
    houseName,
    pricePerDay,
    paddLocation,
    photoOfHouse,
    ratingOfHouse
  });

  res.render('homeAdded', {
    pageTitle: 'Home Added to the airbnb'
  });
});


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;