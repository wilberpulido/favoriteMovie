# Movie API

Movie API is an API for viewing reviews, recommendations, saving favorite movies and movies to watch.

## Installation

To install this project, you need to have npm.

Once the main branch has been cloned, you must execute the following commands via console.

``` bash
npm install
```

### With Docker

``` bash
docker run -d -p 27017-27019:27017-27019 --name pruebademongo1 mongo
```
### Without Docker

Install mongoDB from the official site, and run the commands from console to start the database as installed.

It can be through an executable or using in console the command:

```bash
mongo
```

### Ports used

Mongodb port: localhost:27017
db name: wishList
Collection name: films

Port localhost:5000/ to view the index.

### Usage

To run on port localhost:5000

``` bash
npm run dev
```

Instrucciones en español

# Movie API

Movie API es una API para ver reseñas, recomendaciones, guardar peliculas favoritas y peliculas por ver.

## Installation

Para instalar este proyecto, es necesario disponer de npm.

Una vez clonada la rama main, debe ejecutar por consola los siguientes comandos.

``` bash
npm install
```

### Con Docker

``` bash
docker run -d -p 27017-27019:27017-27019 --name pruebademongo1 mongo
```
### Sin Docker

Instalar mongoDB desde la página oficial, y ejecutar los comandos desde consola para arrancar la base de datos segun se haya instalado.

Puede ser a través de un ejecutable o usando en consola el comando:

```bash
mongo
```

### Puertos usados

Mongodb puerto: localhost:27017
Nombre de db: wishList
Nombre de coleccion: films

Puerto  localhost:5000/ para ver el index.

### Uso

Para correr en el puerto localhost:5000

``` bash
npm run dev
```
