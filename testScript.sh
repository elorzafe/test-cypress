#!/bin/bash

npx pm2 start npm -- run dev
wait-on http://localhost:5173
npx cypress run
pm2 kill