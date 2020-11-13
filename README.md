# backend-superheros-api

A basic express app deployed on heroku via heroku cli. 

Here is the name & url of the app that heroku has generated : https://powerful-depths-64614.herokuapp.com/


**Notes** 

- Encountered issue with heroku not being able to find express module on build even though it was installed and was in package.json. 

- Solution was to run `heroku config:set NPM_CONFIG_PRODUCTION=false`. This resolved the error.

- see here <https://devcenter.heroku.com/articles/troubleshooting-node-deploys#ensure-you-aren-t-relying-on-untracked-dependencies> for more information
