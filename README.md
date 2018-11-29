# bloomcheck

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

## Frontend
Run browserify app.js -o bundle.js from bloomcheck/public folder to generate bundle.js.

## Limitation
Currently all users using the app will get notified of the logged in event. This can be enhanced to send the event only the matching token client.


## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
