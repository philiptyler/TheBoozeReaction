# TheBoozeReaction

Web Application written in React.js + backbone.js to utilize boozefinder API

## Dependencies

Install node.js. (We're using v0.12.5)
`npm install` to install JavaScript dependencies

## Run the tests

`npm test`

## Create a build

`npm run build`

## Serve the build

As much as we want this to be a single-page app, we also want to hide the 
details from our casual users. (So a user can go to /establishments and not 
care how the magic happens.) To do this, we actually need a server that will
always serve the same index.html file to all page requests.

We've done this here with a tiny Node app. Ideally we would put our single-page
app on a CDN capable of doing this logic for us.

So for development/demo/etc: `npm start`

(The server does not need to be restarted when making changes to HTML/CSS/etc.

