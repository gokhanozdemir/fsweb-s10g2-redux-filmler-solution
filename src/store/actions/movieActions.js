export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "Film Ekler";
import axios from "axios";

export const addMovieAPI = (movieData) => async (dispatch) => {
  return await axios
    .post("https://reqres.in/api/movies", movieData)
    .then(function (response) {
      console.log(response);
      dispatch(addMovie(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteMovie = (id) => {
  // console.log("actionCreator Delete", id, typeof id);
  return { type: DELETE_MOVIE, payload: Number(id) };
};

export const addMovie = (movie) => {
  return { type: ADD_MOVIE, payload: movie };
};
