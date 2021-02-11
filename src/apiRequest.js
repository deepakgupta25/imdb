const API_URL = "https://node-imdb.herokuapp.com/movies";

export async function post(data) {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data && JSON.stringify(data)
  }); 
}
