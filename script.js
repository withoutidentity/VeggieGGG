const apiUrl = 'http://localhost:8000/products';
const main = document.querySelector('main');
const search = document.querySelector('#search');
const form = document.querySelector('form');

// Function to fetch data from the API.

// Function to fetch data from the API and filter results based on search term.
function searchProfile(searchTerm) {
    sessionStorage.setItem('searchTerm', searchTerm);
    window.location.href = 'Content.html';
}

function displaySearchResults(data, searchTerm) {
    const searchResults = document.getElementById('searchResults');
    if (Array.isArray(data) && data.length === 0) {
        searchResults.innerHTML = 'No results found.';
        return;
    }

            // Clear the previous content in the main element.
        searchResults.innerHTML = '';

            //const searchProfile = sessionStorage.getItem('searchTerm');
            // Filter the data based on the search term.
        const filteredData = data.filter(item => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (filteredData.length === 0) {
            searchResults.innerHTML = 'No results found for the search term.';
            return;
        }

            // Loop through the filtered data and create elements for each item.
        filteredData.forEach(item => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const h3 = document.createElement('h3');
            const h4 = document.createElement('h4');

                // Set the src attribute of the image element.
            img.src = item.image;

                // Set the content of the h3 and p elements.
            p.innerText = `Name: ${item.name}`;
            h3.innerHTML = `Benefit: ${item.benefit}`;
            h4.innerHTML = `Plant: ${item.plant}`;

                // Append the elements to the main div.
            div.appendChild(p);
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(h4);

                // Append the main div to the main element.
            searchResults.appendChild(div);
        });     
}

const saveProfile = sessionStorage.getItem('searchTerm');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // แสดงผลลัพธ์ค้นหาในหน้าค้นหา
        displaySearchResults(data, saveProfile);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        searchResults.innerHTML = 'An error occurred while fetching data.';
    });
// Search form submission.
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const search = document.getElementById('search');
    const searchTerm = search.value.trim();
    if (searchTerm) {
        searchProfile(searchTerm);
        window.location.href = 'Content.html';
    }
});
function goToHomePage() {
    window.location.href = 'VeggieGGG.html'; // แทน 'หน้าหลัก.html' ด้วย URL ของหน้าหลักของคุณ
  }
function goToContactPage() {
    window.location.href = 'Contact.html'; // แทน 'หน้าติดต่อ.html' ด้วย URL ของหน้าหลักของคุณ
  }



      
