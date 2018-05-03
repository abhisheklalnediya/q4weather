import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import getTemperature from './utils';
import Home from './home-page.jsx';

const app = express();

app.get('/api/temperature/:city', (req, res) => {
  const { city } = req.params;
  getTemperature(city, () => {
    // Handle Error
    res.status(400);
    res.send({
      error: 'Not Data',
    });
  }, (location, temperature, unit) => {
    res.json({
      city: location,
      temperature,
      unit,
    });
  });
});

app.get('/', (req, res) => {
  res.send(renderToString(<Home />));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))