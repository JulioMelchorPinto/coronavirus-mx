
<h1 align="center">Bienvenido al repositorio del sitio coronavirus-mx</h1>
<p>
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/MelchorPinto" target="_blank">
    <img alt="Twitter: MelchorPinto" src="https://img.shields.io/twitter/follow/MelchorPinto.svg?style=social" />
  </a>
</p>
<img alt="Panel de información" src="https://coronavirus-mx.web.app/assets/images/preview.png" />


### ✨ [Ver sitio](https://coronavirus-mx.web.app)


## Screenshots

<img alt="Covid Stats Live Dashboard Screenshot 2" src="https://coronavirus-mx.web.app/assets/screenshots/sc2.png" />
<img alt="Covid Stats Live Dashboard Screenshot 3" src="https://coronavirus-mx.web.app/assets/screenshots/sc3.png" />
<img alt="Covid Stats Live Dashboard Screenshot 4" src="https://coronavirus-mx.web.app/assets/screenshots/sc4.png" />

## Build the Angular project

```sh
npm install
```

```sh
ng build
```


## Run the Angular Project

```sh
npm install
```

```sh
ng serve
```

## Run the Node.js Project (open server folder)

Rename config.example.json to config.json and fill in the details

```
{
  "redis": {
    "host": "host",
    "password": "1234"
  },
  "keys": {
    "all": "coronastatistics:all",
    "countries": "coronastatistics:countries",
    "timeline": "coronastatistics:timeline",
    "timelineglobal": "coronastatistics:timelineglobal"
  },
  "interval": 600000
}
```

```sh
npm install
```

```sh
node server.js
```
Edit src/app/core/services/getdata.service.ts and replace with your own api url.

## Author

👤 **Julio Melchor**

* Website: https://coronavirus-mx.web.app
* Twitter: [@MelchorPinto](https://twitter.com/MelchorPinto)
* Github: [@JulioMelchorPinto](https://github.com/JulioMelchorPinto)
* LinkedIn: [@jmelchorp](https://linkedin.com/in/jmelchorp)
* Paypal: https://paypal.me/beaverNet

## Show your support

Give a ⭐️ if this project helped you!

[![PayPal](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://paypal.me/beaverNet)
