export const buildFilmUrl = (filmId) => window.location.origin + '?filmId=' + filmId;
export const redirectToFilm = (filmId) => window.location.href = window.location.origin + '?filmId=' + filmId;
