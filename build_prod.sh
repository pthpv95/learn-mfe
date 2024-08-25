#!/bin/bash
npm install

# Navigate to the container package and run the build command in the background
(cd packages/container && npm install && npm run build) &

# Navigate to the marketing package and run the build command in the background
(cd packages/marketing && npm install && npm run build) &

# Wait for all background processes to finish
wait