import {movie_storage} from './data.js'

document.addEventListener('DOMContentLoaded', main)

// Точка входа
function main() {
  for (movie of movie_storage) {
    console.log(movie)
  }
}