document.addEventListener("DOMContentLoaded", () => {
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const runtime = document.getElementById("runtime");
const description = document.getElementById("film-info");
const showtime = document.getElementById("showtime");
const remainingTickets = document.getElementById("ticket-num");
function showCaseDetails(id) {
    fetch(`http://localhost:3000/films/${id}`)
    .then((response) => response.json())
    .then((data) => {
        filmDetails(data) 
    })
    .catch((error) => console.error(error))
}
function filmDetails(data) {
    poster.src = data.poster
    title.textContent = data.title
    runtime.textContent = data.runtime
    showtime.textContent = data.showtime
    description.textContent = data.description
    const availableTickets = data.capacity - data.tickets_sold
    remainingTickets.textContent = availableTickets 
}
showCaseDetails(1);

const ul = document.getElementById("films");

function moviesList(films) {
    fetch('http://localhost:3000/films')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((film) => createMovieList(film));
    })
    .catch((error) => console.error(error));
}

function createMovieList(data) {
    const list = document.createElement("li");
    list.textContent = data.title;
    list.className = "menu";
    list.setAttribute("data-id", data.id);
    ul.appendChild(list); 
}
moviesList();

const buyTicketsBtn = document.getElementById("buy-ticket");
const soldTickets = data.tickets_sold + 1;
function buyTickets(id) {
    fetch('http://localhost:3000/films')
    .then((response) => response.json())
    .then((data) => {
        if(availableTickets > 0) {
            updateTicketsAvailable(id.ticketsSold)
        } else{buyTicketsBtn.textContent = 'Sold-Out'}
    })
}
function updateTicketsSold(id, newTicketsSold) {
    fetch(`http://localhost:3000/films/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tickets_sold: newTicketsSold,
        }),
    }).then(() => {
        showTicketsRemained(id);
    } ) .catch((error) => console.error(error));
}
function showTicketsRemained() {
    fetch('http://localhost:3000/films')
    .then((response) => response.json())
    .then((data) => {
        remainingTickets.textContent = data.capacity - data.tickets_sold
    }).catch((error) => console.error(error));
}
buyTicketsBtn.addEventListener("click", () => {
    
})

function deleteMovies(id) {
    return fetch(`http://localhost:3000/films/${id}`,  {
        method: "DELETE",
    }).then(()=> {
        const list = document.getElementById(`film-${id}`);
        if (list) {
            list.remove();
        }
    })
}
const deleteButton = document.createElement("button");
deleteButton.textContente = "Delete";
deleteButton.addEventListener("click",  () => {
  deleteFilm(film.id);
});
//append delete button
list.appendChild(deleteButton);
});



