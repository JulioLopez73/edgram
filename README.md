# kEnAi NPM Starter Kit

![kEnAi NPM Starter Kit](src/img/kenai-npm-starter-kit.png)

* [Inicio](#kenai-npm-starter-kit)
* [Para comenzar](#para-comenzar)
* [Estructura del kit](#estructura-del-kit)
* [Scripts NPM](#scripts-npm)
* [Componentes Disponibles](#componentes-disponibles)

Kit de inicio para desarrollo frontend basado en componentes (Pug, Sass y JS)  y automatizado con Scripts NPM desarrollado por [@jonmircha](https://jonmircha.com).

Después de HTML5, los [componentes web](https://www.webcomponents.org/) son el siguiente gran salto en el paradigma del desarrollo web frontend, pero [aun no están listos](http://caniuse.com/#search=components), sin embargo con herramientas como Node, Scripts NPM, Sass, PostCSS, UnCSS, Pug, Babel, Browserify, entre algunos otros, podemos desarrollar proyectos con la filosofía de reutilización y componetización que proponen los componentes web, sin necesidad de usar frameworks y librerías robustas como [Angular](https://angular.io/), [React](https://facebook.github.io/react/), [Vue.js](https://vuejs.org/) o [Polymer](https://www.polymer-project.org/).

Además este kit tiene la filosofía de generar un sólo archivo **CSS** gracias a los **imports** de **Sass** y un sólo archivo **JavaScript** gracias a **Browserify**, adicionalmente con **Babel** puedes utilizar todas las características del estándar **EcmaScript** como los módulos (**import** y **export**).

**[:arrow_upper_left: regresar al índice](#kenai-npm-starter-kit)**

## Para comenzar:

Sólo ejecuta los siguientes comandos:

* **`npm install`** Para instalar todas las dependencias.
* **`npm start`** Para comenzar a trabajar.
* **`npm run build`** Para publicar el proyecto.

**[:arrow_upper_left: regresar al índice](#kenai-npm-starter-kit)**

## Estructura del kit:

### Carpetas:

#### :file_folder: ***src***:

Es el directorio donde tendremos los archivos del proyecto en fase de desarrollo, y se estructura de la siguiente manera:

* :file_folder: ***img***: Contendrá las imágenes del proyecto sin optimizar.
* :file_folder: ***js***: Contendrá los archivos JS que serán compilados con **Babel** y unificados con **Browserify**.
  * :file_folder: ***components***: Contendrá los archivos de la programación JS de los componentes.
  * :page_facing_up: **`index.js`**: Es el archivo principal JS del proyecto, en el que se podrá importar los componentes que se requieran de la carpeta ***components*** o de las dependencias que se tenga en ***node_modules***.
* :file_folder: ***pug***: Contendrá los archivos **.pug** que compilarán a archivos HTML.
  * :file_folder: ***includes***: Contendrá los archivos **.pug** que serán incluidos en algún otro archivo y que por tal, no serán compílados a HTML.
    * :file_folder: ***components***: Contendrá los archivos de la estructura y contenido Pug de los componentes.
    * :page_facing_up: **`layout.pug`**: Contiene la estructura básica de un documento HTML5.
    * :page_facing_up: **`metatags_webapp.pug`**: Contiene los metatags mínimos y necesarios para convertir el proyecto en una WebApp.
  * :file_folder: ***pages***: Contendrá los archivos **.pug** que serán compilados a HTML.
* :file_folder: ***scss***: Contendrá los archivos **.scss** que compilarán a archivos CSS.
  * :file_folder: ***components***: Contendrá los archivos **partials** de la presentación SCSS o CSS de los componentes.
  * :file_folder: ***pages***: Contendrá los archivos **partials** **.scss** o **.css** de los estilos de cada una de las secciones del proyecto.
  * :file_folder: ***vendors***: Contendrá los archivos **partials** **.scss** o **.css** de librerías de terceros que el proyecto ocupe.
  * :page_facing_up: **`style.scss`**: Es el archivo principal SCSS del proyecto que compilara a CSS, en el que se podrá importar **partials** de las carpetas ***components***, ***pages***, ***vendors*** o de las dependencias que se tenga en ***node_modules***.
* :file_folder: ***statics***: Contendrá todos los archivos estáticos del proyecto que no necesiten optimizarse o transformarse como videos, audios, **.ico**, **.pdf**, **.xml**, **.txt**, etc.

#### :file_folder: ***public***:

Es el directorio donde tendremos la versión para publicar del proyecto con todos los archivos HTML generados, lás imágenes optimizadas y archivos estáticos requeridos, así como un sólo archivo CSS llamado **`style.css`** y un sólo archivo JS llamado **`script.js`** que contendrán toda la presentación y programación respectivamente.

### Archivos:

* :page_facing_up: **`package.json`**: Contiene la configuración del proyecto, en el podrás ver todas las dependencias y los scripts NPM programados del kit.
* :page_facing_up: **`.gitignore`**: Indica que archivos y directorios ignorará Git al momento de sincronizar el proyecto, la configuración que se propone ha sido generada en el sitio [gitignore.io](https://www.gitignore.io/) y es esta: [osx,node,macos,linux,windows,visualstudiocode](https://www.gitignore.io/api/osx,node,macos,linux,windows,visualstudiocode) siéntete libre de modificarla a tus necesidades.
* :page_facing_up: **`.editorconfig`**: Contiene la definición de la configuración para mantener la codificación estándar entre diferentes editores e IDEs, considera que en algunos editores tendrás que instalar un plugin adicional para que funcione, consulta el sitio [editorconfig.org](http://editorconfig.org/) para saber si tu editor o ide lo soporta nativamente o requiere algún plugin.
* :page_facing_up: **`.babelrc`**: Contiene la configuración de **`Babel`**.
* :page_facing_up: **`statics.js`**: Contiene la programación necesaria para mover los archivos estáticos de la carpeta ***src*** a la carpeta ***public***.
* :page_facing_up: **`uncss.json`**: Contiene la configuración del plugin **`uncss`** que puede ser modificada en base a las necesidades del proyecto.
* :page_facing_up: **`README.md`**: Contiene la documentación de este kit.

**[:arrow_upper_left: regresar al índice](#kenai-npm-starter-kit)**

## Scripts NPM:

Este kit tiene disponible los siguientes comandos para optimizar y automatizar proyectos frontend, siéntete libre de modificarlos a tus necesidades.

Recuerda que todos los comandos de NPM se corren desde la terminal con **`npm run [nombre del comando]`**

* :heavy_dollar_sign: **`sass`**: Observa la compilación de Sass.
* :heavy_dollar_sign: **`pug`**: Observa la compilación de Pug.
* :heavy_dollar_sign: **`babel`**: Observa la compilación de Babel.
* :heavy_dollar_sign: **`browserify`**: Ejecuta Browserify con soporte para Babel.
* :heavy_dollar_sign: **`watchify`**: Observa Browserify con soporte para Babel.
* :heavy_dollar_sign: **`serve`**: Levanta un servidor web live reload con Browser Sync.
* :heavy_dollar_sign: **`proxy`**: Levanta un servidor web proxy live reload con Browser Sync.
* :heavy_dollar_sign: **`metalangs`**: Ejecuta en paralelo los scripts de **`sass`**, **`pug`** y **`watchify`**.
* :heavy_dollar_sign: **`devserve`**: Ejecuta en paralelo los scripts de **`metalangs`** y **`serve`**.
* :heavy_dollar_sign: **`devproxy`**: Ejecuta en paralelo los scripts de **`metalangs`** y **`proxy`**.
* :heavy_dollar_sign: **`imagemin`**: Optimiza las imágenes .jpg y .png del proyecto.
* :heavy_dollar_sign: **`webp`**: Genera una versión .webp de todas las imágenes .jpg del proyecto.
* :heavy_dollar_sign: **`svgmin`**: Optimiza las imágenes .svg del proyecto.
* :heavy_dollar_sign: **`gifmin`**: Optimiza las imágenes .gif del proyecto.
* :heavy_dollar_sign: **`jpgresize`**: Redimensiona las imágenes .jpg del proyecto, requiere [ImageMagick](http://www.imagemagick.org) instalado para que funcione.
* :heavy_dollar_sign: **`pngresize`**: Redimensiona las imágenes .png del proyecto, requiere [ImageMagick](http://www.imagemagick.org) instalado para que funcione.
* :heavy_dollar_sign: **`statics`**: Mueve los archivos estáticos del proyecto.
* :heavy_dollar_sign: **`assets`**: Ejecuta de manera síncrona y bloqueante los comandos de **`statics`**, **`imagemin`**, **`webp`**, **`svgmin`** y **`gifmin`**.
* :heavy_dollar_sign: **`clean`**: Limpia el contenido de la carpeta public y crea los archivos y carpetas necesarios en ella.
* :heavy_dollar_sign: **`min.html`**: Minifica todos los archivos .html del proyecto.
* :heavy_dollar_sign: **`min.js`**: Minifica y ofusca el archivo **`script.js`** del proyecto.
* :heavy_dollar_sign: **`uncss`**: Remueve el código CSS innecesario del proyecto, tomando en cuenta la configuración del archivo **`uncss.json`**.
* :heavy_dollar_sign: **`autoprefixer`**: Ejecuta el autoprefijado CSS al archivo **`style.un.css`** que contiene el código CSS depurado del proyecto.
* :heavy_dollar_sign: **`min.css`**: Minifica el código CSS del archivo **`style.un.css`** y lo guarda en **`style.css`**.
* :heavy_dollar_sign: **`min`**: Ejecuta de manera síncrona y bloqueante los comandos de **`min.html`**, **`min.js`**, **`uncss`**, **`autoprefixer`**, **`min.css`** y luego elimina el archivo **`style.un.css`**.
* :heavy_dollar_sign: **`build`**: Ejecuta de manera síncrona y bloqueante los comandos de **`assets`**, **`min`** y **`serve`**, este comando prepara la versión de publicación del proyecto.
* :heavy_dollar_sign: **`start`**: Ejecuta el comando **`devserve`**, este comando inicia nuestro entorno de desarrollo para comenzar a trabajar en nuestro proyecto.

**[:arrow_upper_left: regresar al índice](#kenai-npm-starter-kit)**

## Componentes Disponibles

En esta sección se irán listando los componentes web que vayan estando disponibles en este kit, si quieres colaborar creando algún componente puedes ponerte en contacto al correo jonmircha@gmail.com.

Cada Componente tiene su respectiva documentacíon al inicio de sus archivos pug, scss y js, dependiendo del tipo de componente y su funcionamiento puede que tenga o no, código pug, sass y/o js.

Para que sepas que tipo de código tiene un componente encontrarás al lado del nombre de cada componente los siguientes logos:

* Si tiene código pug ![Pug](src/img/indicator-pug.png)
* Si tiene código sass ![Sass](src/img/indicator-sass.png)
* Si tiene código js ![JS](src/img/indicator-js.png)

### Basic Reset ![Sass](src/img/indicator-sass.png)

Componente para aplicar un reseteo de estilos básicos al documento, aplica las siguientes reglas:

* box-sizing: border-box; al documento HTML y todos sus elementos
* padding y margin de todos los elementos a cero
* Evita barras de desplazamiento horizontal al body del documento, múy útil para el Responsive Design
* Asigna la fuente tipográfica y el tamaño base de fuente para el documento HTML

**Dependencias:** Ninguna

**Archivos:** [**`_basic_reset.scss`**](./src/scss/components/_basic_reset.scss)

### Youtube Video ![Pug](src/img/indicator-pug.png) ![Sass](src/img/indicator-sass.png) ![JS](src/img/indicator-js.png)

Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video

**Dependencias:** [**`font-awesome.css`**](./src/scss/vendors/font-awesome.css)

**Archivos:** [**`youtube_video.pug`**](./src/pug/includes/components/youtube_video.pug), [**`_youtube_video.scss`**](./src/scss/components/_youtube_video.scss), [**`youtube_video.js`**](./src/js/components/youtube_video.js)

### Picture ![Pug](src/img/indicator-pug.png)

Componente para generar una imagen responsive con la etiqueta Picture

**Dependencias:** Ninguna

**Archivos:** [**`picture.pug`**](./src/pug/includes/components/picture.pug)

### Picture Webp ![Pug](src/img/indicator-pug.png)

Componente para generar una imagen responsive con soporte al formato Webp, aplica sólo para imágenes .jpg

**Dependencias:** Ninguna

**Archivos:** [**`picture_webp.pug`**](./src/pug/includes/components/picture_webp.pug)

**[:arrow_upper_left: regresar al índice](#kenai-npm-starter-kit)**
