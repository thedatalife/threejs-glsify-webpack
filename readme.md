# threejs-glsify-webpack

Simple boilerplate for shader development in WebGL. Uses ThreeJS as a rendering engine and glsify to help organize shaders and provide a simple syntax for including them directly in Javascript. Webpack is used to provide a dev server with auto-reloading and es6 transpilation. Not suited for production use at the moment.

## getting started

Clone this project.
```
npm install
npm start
```
Then open http://localhost:8080/build/index.html in your browser.

## development

The project uses webpack and glsify to provide a streamlined way of working with GLSL shaders. It's traditionally been cumbersome to have to include the shaders in HTML or as Javascript strings as this makes syntax highlighting difficult and doesn't scale well if you have multiple shaders. The glsify-loader for webpack allows the project to require vertex and fragment shaders as if they were Javascript files. Glsify also provides the benefit of a library of shader functions that can be brought into the project with npm.

The three.js code is taken directly from thebookofshaders.com but modified to include the shaders using glsify and webpack. It's possible to drop the examples from the book directly into this project.

## links

The biggest credit goes to Patricio Gonzalez Vivo and Jen Lowe for their incredible work on the website (https://thebookofshaders.com/) and helping me understand some of the critical concepts about GLSL and shaders. The three.js code is lifted directly from their open source repository at (https://github.com/patriciogonzalezvivo/thebookofshaders).

(https://github.com/stackgl/glslify) glsify - a node style module system for GLSL
(https://github.com/mrdoob/three.js/) three.js
