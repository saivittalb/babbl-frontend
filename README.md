# Babbl Frontend

[![License](https://img.shields.io/badge/License-BSL-blue.svg)](https://opensource.org/licenses/BSL-1.0)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![GitHub followers](https://img.shields.io/github/followers/saivittalb.svg?style=social&label=Follow)](https://github.com/saivittalb?tab=followers)
[![Twitter Follow](https://img.shields.io/twitter/follow/saivittalb.svg?style=social)](https://twitter.com/saivittalb)

<p align="center"><img src="https://user-images.githubusercontent.com/36305142/122650928-2f3dc480-d153-11eb-91dd-fa9b36da173a.png"></p>

A frontend repository for Babbl – The Bible of Microblogging. A simple microblogging and social networking service which users post and interact with messages known as "babbles."

Tech stack used – React.js and StorybookJS.

This is the frontend repository for Babbl. If you are looking for the backend repository, [click here](https://github.com/saivittalb/babbl-backend).

Developed as a part of an end project for the course CS 474 – Enterprise Software Architecture.

###### Note

Following versions were used in the development of this project:

* Node.js 14.16.1.
* Node Package Manager (npm) 7.12.1.
* Editor used was Visual Studio Code 1.57.1.

## Table of contents

* [License](#license)
* [Instructions to setup locally](#instructions-to-setup-locally)
  * [Installing modules](#installing-modules)
  * [Running the app](#running-the-app)
* [Contributing](#contributing)

## License

This project is licensed under the Boost Software License 1.0, a simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

<p align="center"> Copyright (c) 2021 Sai Vittal B. All rights reserved.</p>

## Instructions to setup locally

### Installing modules

* Run the following commands in the terminal/console window in the project directory:

```bash
$ cd babbl-frontend

$ npm install
```

### Running the app

* Create a ```.env``` file at the root of the project under the following schema:

```env
REACT_APP_BACKEND_URL=<YOUR-BACKEND-URL-HERE>/api/v1
REACT_APP_CLOUDINARY_ENDPOINT=https://api.cloudinary.com/v1_1/<YOUR-CLOUDINARY-CLOUD-NAME-HERE>
SKIP_PREFLIGHT_CHECK=true
```

* Run the following commands in the terminal/console window to run Babbl Frontend:

```bash
$ cd babbl-frontend

$ npm start
```

## Contributing

* Fork this project by clicking the ```Fork``` button on top right corner of this page.
* Open terminal/console window.
* Clone the repository by running following command in git:

```bash
$ git clone https://github.com/[YOUR-USERNAME]/babbl-frontend.git
```

* Add all changes by running this command.

```bash
$ git add .
```

* Or to add specific files only, run this command.

```bash
$ git add path/to/your/file
```

* Commit changes by running these commands.

```bash
$ git commit -m "DESCRIBE YOUR CHANGES HERE"

$ git push origin
```

* Create a Pull Request by clicking the ```New pull request``` button on your repository page.

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/saivittalb/)
[![ForTheBadge powered-by-electricity](http://ForTheBadge.com/images/badges/powered-by-electricity.svg)](http://ForTheBadge.com)

<p align="center"> Copyright (c) 2021 Sai Vittal B. All rights reserved.</p>
<p align="center"> Made with ❤ by <a href="https://github.com/saivittalb">Sai Vittal B</a></p>