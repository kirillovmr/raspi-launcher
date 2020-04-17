# Game Launcher for EXPO 2020 CS #48 UIC Project

An electron application that is capable of launching games on our PlayStation that we created for EXPO 2020.

![w10 sample](https://raw.githubusercontent.com/mjstest/orgb5/e34716a717acd8261a7e8d736e6b6a3b/launcher.png)

## Install
``` bash
# Clone the repository
$ git clone https://github.com/kirillovmr/raspi-launcher.git

# Go into the repository
$ cd raspi-launcher

# Install dependencies
$ npm install
```

## Develop
Just run this command to start developing with hot reloading.
``` bash
$ npm start
```

## What's included
- JSX support for React.
- CSS modules support.
- JS, CSS and assets automatic bundling.
- Hot reloading via Webpack 4.


## Folder structure
```
├── electron-react-webpack/             # Your project's name, you can rename it

    ├── app/

        ├── build/                      # Webpack 4 will manage this folder for you
            ├── bundle.css              # Bundled CSS
            ├── bundle.js               # Bundled JS
            ├── ...                     # Your images will be copied here

        ├── src/

            ├── assets/                 # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── components/             # React Components
                ├── Link/               # To keep them modularized follow this structure:
                    ├── index.jsx       # Your component's React code
                    ├── styles.css      # Your component's scoped CSS
                ├── Logo/
                    ├── index.jsx
                    ├── styles.css

            ├── App.jsx                 # React main component where everything is tied up
            ├── renderer_process.js     # Electron's renderer-process, where you React app is called.
            ├── global.css              # Global CSS and global constants go here

        ├── index.html                  # This HTML only uses build/ folder's files

    ├── main.js                         # Electron's configuration. Whole app is launched from here
    ├── package.json
    ├── webpack.config.js               # Webpack 4 setup
```

## Related
- [Presentation slides](https://docs.google.com/presentation/d/1707LMlCcuWNO_rAhj0ZZwcw_gRwvyscWCag-se6P1ik/edit?usp=sharing) - Project presentation slides.
- [Presentation video](https://youtu.be/9IkYypi8o9U) - Video showcase of the project.
