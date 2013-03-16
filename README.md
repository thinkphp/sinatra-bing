# sinatra-bing

A Simple Search Interface for Microsoft's Bing using Sinatra and binger.

# Install

```
$ git clone git://github.com/thinkphp/sinatra-bing.git
$ cd sinatra-bing
$ rackup #generated the file Gemfile.lock
```

# Setup config.ru

```
require 'rubygems'
require 'bundler'

Bundler.require

require './app.rb'

run MyApp
```

# Setup Gemfile

```
source "https://rubygems.org"

gem 'sinatra'
gem 'binger'
```

# Test it

Open a browser and go to: http://localhost:9292. Cheers!

# Deploying with Git on Heroku

## Prerequisites

* Basic Ruby knowledge
* Basic Git knowledge
* Your app must run on Ruby 1.9.2
* Your app must use Bundle
* A Heroku user account
* Install the Heroku Toolbelt

```
$ cd myApp
$ git init
$ git add .
$ git commit -m 'first commit'
$ heroku create
$ git push heroku master
$ heroku ps
$ heroku open
```

# Declare process types with Procfile

If you're deploying a straight Rack app here's a Procfile that can execute your config.ru

```
web: bundle exec rackup config.ru -p $PORT 
```

# License

MIT