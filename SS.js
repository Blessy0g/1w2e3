let apiUrl = 'http://www.omdbapi.com/'
let searchFilm = '';
const apikey = '3b15a3d9';

document.querySelector('button').onclick = search;

function search() {
    let searchText = document.querySelector('input').value;

    fetch
    (`${apiUrl}?t=${searchText}&apikey=${apikey}`)
    .then((Response) => {
        return Response.json();

    })
    .then((data) => {
        console.log(data);
    data.response == true ? renderFilm(data) : alert ('error!')
    renderFilm(data);
    })
}
function renderFilm(film){
    document.querySelector('main').innerHTML =
    `
    <h1>title</h1>
    <div class="desc">

        <div class="poster">
            <img src='https://media1.tenor.com/m/IKfZGbgLd2gAAAAC/ноггано.gif'>
           </div>

        <table>


            <tr>
                <td>year:</td>
                <td>${film.Year}</td>
            </tr>

            <tr>
                <td>rated</td>
                <td>${film.Year}</td>
            </tr>

            <tr>
                <td>wejfjn</td>
                <td>${film.Released}</td>
            </tr>
            <tr>
                <td>wfw</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>ecs</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>efs</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>sv</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>SVD</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>sk</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>egw</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>ewfi</td>
                <td>${film.Year}</td>
            </tr>
            <tr>
                <td>iuhed</td>
                <td>${film.Year}</td>
            </tr>
        </table>

    </div>
    

    <div class="search">
        <input type="text" placeholder="Input Movie Title">
        <button>Search</button>
    </div>
    






`
    ;
}