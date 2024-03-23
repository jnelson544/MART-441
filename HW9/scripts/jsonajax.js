/* I wanted to display my data in a specific way so I did some research online along with getting ChatGPT's assistance
to create a sorting data function. The dataset file I chose was rather large so I made my queries return only a 
condensed number of movies rather than the entire data set. If the button is pushed, it will display the entire 
set but now you can narrow the set down with the Slinky plugin that I implmented and choose the one of the menu options.
I also found a way to prevent displaying movie information types that did have information stored inside. The 
dataset that I chose did not contain cast or genres for some of the movies listed. Therefore, I made it look more
organized instead of simply displaying all the empty arrays. 
*/
$(document).ready(function () {
    $("#btnSubmit").click(function () {
        // Load movie data when the button is clicked
        $.getJSON("data/movie.json", function(data) {
            var movies = data; // Assuming data is an array of movies
            var movieInfo = "";
            $.each(movies, function(index, movie) {
                movieInfo += "<div>";
                movieInfo += "Title: " + movie.title + "<br>";
                movieInfo += "Year: " + movie.year + "<br>";
                if (movie.cast.length > 0) {
                    movieInfo += "Cast: " + movie.cast.join(", ") + "<br>";
                }
                if (movie.genres.length > 0) {
                    movieInfo += "Genres: " + movie.genres.join(", ") + "<br>";
                }
                movieInfo += "Link: <a href='" + movie.href + "'>" + movie.href + "</a><br>";
                movieInfo += "</div><br>";
            });
            $("#movieInformation").html(movieInfo);
        });
    });

    // Function to sort movie data and display only the first 10 items
    function sortAndDisplayTop10(attribute) {
        $.getJSON("data/movie.json", function (data) {
            var filteredData = data.filter(movie => movie[attribute] !== null && movie[attribute].length !== 0);
            filteredData.sort((a, b) => a[attribute] > b[attribute] ? 1 : -1);
            var top10 = filteredData.slice(0, 100); // Extract the first 10 items
            displayMovieData(top10);
        });
    }

    // Function to display movie data
    function displayMovieData(movies) {
        var movieInfo = "";
        $.each(movies, function (index, movie) {
            movieInfo += "<div>";
            movieInfo += "Title: " + movie.title + "<br>";
            movieInfo += "Year: " + movie.year + "<br>";
            movieInfo += "Cast: " + movie.cast.join(", ") + "<br>";
            movieInfo += "Genres: " + movie.genres.join(", ") + "<br>";
            movieInfo += "Link: <a href='" + movie.href + "'>" + movie.href + "</a><br>";
            movieInfo += "</div><br>";
        });
        $("#movieInformation").html(movieInfo);
    }

    // Event listener for menu item clicks
    $('#myMenu a').click(function (e) {
        e.preventDefault(); // Prevent default link behavior
        var sortAttribute = $(this).data('sort'); // Get the sorting attribute from data-sort attribute
        sortAndDisplayTop10(sortAttribute); // Sort movie data based on the selected attribute and display only the first 10 items
    });
});
