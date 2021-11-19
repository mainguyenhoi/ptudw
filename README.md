# Prerequisites

Before you continue, ensure you meet the following requirements:
* Using node version v14.16.1.

## Installation

``` bash
# clone the repo
$ git clone https://github.com/Nguyenkhanh98/ptudw.git

# go into app's directory
$ cd ptudw

# install app's dependencies
$ yarn install
```

## Configuration
This project was used [Sequelize](http://docs.sequelizejs.com/) to work with Mysql.

### Basic usage

``` bash
http://localhost:3000
```

### Eslint

Pluggable linting utility for JavaScript

``` bash
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
ptudw
├── backend/          #backend
│   ├── controllers/  #controllers
│   ├── middleware    #middleware
│   |└── models        #models
├── config/           #config
├── database/         #database
│   ├── migrations/   #database migrations
│   └── seeders       #database seeders
├── public/           #public resources
├── routes/           #routes config
├── servives/         #service
└── package.json

├── reactapp/              #app
│   ├── components/  #component
│   ├── middleware    #middleware
│   |
├── constants/           #constant
├── helpers/         #helper
│── hook/   #hook
│── pages       #page
├── public/           #public resources
├── routes/           #routes config
├── servives/         #service
|── redux/            #redux
└── package.json
```
## Structure guide

### Noted for development environment
- Install editorconfig (package or extension depend editor) for your editor or IDE
- Run `sequelize` command to re-migrate and re-seed database ([Sequelize cli](https://github.com/sequelize/cli))
- Pull new commit before have a new commit

### Model

- Folder `models` is place to define all table of database(one model is a table). It 's also define method, hooks, associations, ... and we use its to query, retrieval data. We used Sequelize to work with database.
```
Eg: Define info of examples table

module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('Example', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'examples',
    indexes: [{
      fields: ['name']
    }],
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Example;
};
```
- You can check Model usage in [this link](https://sequelize.org/master/manual/models-usage.html).

### Middleware

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
```
Eg: Check user logged in

isAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/login');
  return next();
}
```
- [Writing middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html)

### Controller

- The controller translates interactions with the view into actions to be performed by the model.
```
Eg: Get example data with name is 'Example' and show it in view with template 'example/show'

module.exports = {
  showExample(req, res) {
    return Example.findOne({
      where: {
        name: 'Example'
      }
    }).then(function (example) {
      return res.render('example/show', {example: example});
    }).catch(function (err) {
      console.log(err);
    });
  }
};
```

### Example

- Create a new page in `routes\index.js` like that:
```
router.get('/example', isAdmin, exampleController.showExample);
isAdmin : method in middleware to check current user is Admin role or not, if true this user can access example page.
showExamle : method in exampleController will call when access successfully, it will render data to view like above eg.

More detail in model, middleware, controller please take a look eg or in sources code.
```

# How to contribute

You can up your contribute at https://github.com/Nguyenkhanh98

# version

1.0.1
