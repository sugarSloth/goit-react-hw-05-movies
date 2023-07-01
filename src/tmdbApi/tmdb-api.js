const ORIGIN = 'https://api.themoviedb.org/3/';
const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRhNTAzMjMxNWZiYTc1ZjI0MGI3NDVjYTdjYzBhZiIsInN1YiI6IjY0NzBiZWJlMzM2ZTAxMDBlODBjNTYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2kRYsL7gY4sDbVFKpKd_M1rnGrppV5NDL6eESs9EQU';

const urlParams = {
  BASE_URL: 'https://image.tmdb.org/t/p/',
  POSTER_SIZE: 'w500',
  PHOTO_SIZE: 'w300',
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_TOKEN,
  },
};

const requestParameters = {
  trending: {
    pathname: 'trending/movie/day',
    queries: { language: 'en-US' },
  },
  movie: {
    pathname: 'search/movie',
    queries: {
      query: '',
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  },
  details: {
    pathname: '',
    queries: { language: 'en-US' },
  },
  cast: {
    pathname: '',
    queries: { language: 'en-US' },
  },
  reviews: {
    pathname: '',
    queries: { language: 'en-US', page: 1 },
  },
};

async function getTrending() {
  const url = buildUrlString(requestParameters.trending);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

async function getMovies(query) {
  requestParameters.movie.queries.query = query;
  const url = buildUrlString(requestParameters.movie);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

async function getDetails(id) {
  requestParameters.details.pathname = `movie/${id}`;
  const url = buildUrlString(requestParameters.details);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

async function getCast(id) {
  requestParameters.cast.pathname = `movie/${id}/credits`;
  const url = buildUrlString(requestParameters.cast);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

async function getReviews(id) {
  requestParameters.reviews.pathname = `movie/${id}/reviews`;
  const url = buildUrlString(requestParameters.reviews);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

function buildUrlString(requestParams) {
  const { pathname, queries } = requestParams;
  const queryString = buildQueryString(queries);
  return `${ORIGIN}${pathname}?${queryString}`;
}

function buildQueryString(queries) {
  return Object.entries(queries)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export { getTrending, getMovies, getDetails, getCast, getReviews, urlParams };
