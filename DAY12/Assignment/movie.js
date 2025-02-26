document.addEventListener("DOMContentLoaded", function() {
    const movieForm = document.getElementById("movieForm");
    const movieList = document.getElementById("movieList");
    
    function saveMovie(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let year = document.getElementById("year").value;
        let rating = document.getElementById("rating").value;
        let genre = document.getElementById("genre").value;
        let poster = document.getElementById("poster").value;
        
        let movies = JSON.parse(localStorage.getItem("movies")) || [];
        movies.push({ name, description, year, rating, genre, poster });
        localStorage.setItem("movies", JSON.stringify(movies));
        alert("Movie Added!");
        movieForm.reset();
    }

    function displayMovies() {
        let movies = JSON.parse(localStorage.getItem("movies")) || [];
        movieList.innerHTML = "";
        movies.forEach((movie, index) => {
            let row = `<tr>
                <td>${movie.name}</td>
                <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + "... <button onclick='alert(\"" + movie.description + "\")'>Read More</button>" : movie.description}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><img src="${movie.poster}" alt="Movie Poster"></td>
                <td><button onclick="deleteMovie(${index})">Delete</button></td>
            </tr>`;
            movieList.innerHTML += row;
        });
    }

    window.deleteMovie = function(index) {
        let movies = JSON.parse(localStorage.getItem("movies")) || [];
        movies.splice(index, 1);
        localStorage.setItem("movies", JSON.stringify(movies));
        displayMovies();
    }

    window.filterMovies = function() {
        let query = document.getElementById("search").value.toLowerCase();
        let rows = document.querySelectorAll("tbody tr");
        rows.forEach(row => {
            let text = row.innerText.toLowerCase();
            row.style.display = text.includes(query) ? "" : "none";
        });
    }

    if (movieForm) {
        movieForm.addEventListener("submit", saveMovie);
    }
    if (movieList) {
        displayMovies();
    }
});
