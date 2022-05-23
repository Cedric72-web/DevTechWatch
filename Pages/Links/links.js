const urlApi = 'https://dtw.azurewebsites.net/api';

function getLinks(){
  const headers = new Headers();

  const init = {
    method: 'GET',
    headers: headers
  };

  const url = urlApi + '/links';
  fetch(url, init)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      alert(error);
    });
}