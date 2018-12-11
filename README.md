# superman's bloom app

> Bloom Sharekit test app

## About

This is a sample project to test [Bloom Sharekit](https://github.com/hellobloom/share-kit/issues/28)

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Deploy to heroku
This app can be deployed to heroku using the deploy button below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/bloomcheck; npm install
    ```

3. Start your app

    ```
    npm start
    ```
4. Local development will use ngrok to tunnel an external domain to localhost. Use that url to access the page so Bloom callback would work with localhost development. The ngrok url will be printed to console on application start as shown below.

```
info: Feathers application started on http://localhost:3030
https://3bd765ed.ngrok.io



```

## Frontend
Run browserify app.js -o bundle.js from bloomcheck/public folder to generate bundle.js.

## Screenshots

<img src="https://github.com/vikaskyadav/bloom-login/blob/master/screenshots/bloom_demo.png"/>

<img src="https://github.com/vikaskyadav/bloom-login/blob/master/screenshots/QRcode_scanner_result.png"/>



## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
