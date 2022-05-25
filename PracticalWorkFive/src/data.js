class Movie {
  genres = ''               // Жанр
  year_of_production = ''   // Год производства
  countries = ''            // Страна
  age_category = ''         // Возрастная категория
  director = ''             // Режисёр
  cover = ''                // Обложка

  constructor(genres, year_of_production, countries, age_category, director, cover) {
    this.genres = genres
    this.year_of_production = year_of_production
    this.countries = countries
    this.age_category = age_category
    this.director = director
    this.cover = cover
  }
}

export const movie_storage = [
  new Movie(),
  new Movie(),
  // ...etc
  new Movie()
]