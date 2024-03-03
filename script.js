
const fetchButton = document.getElementById('fetchButton');
const toggleButton = document.getElementById('toggleButton');
const contentDiv = document.getElementById('content');
const frameDiv = document.getElementById('frame');
const array = [];

// Event listener for Button 1 (Fetch Content)
fetchButton.addEventListener('click', () => {
    // Fetch data from an external source
    fetch('https://dummyjson.com/products/1')
        .then(response => response.json())
        .then(data => {
            // Display the fetched content in the contentDiv
            console.log(data);
            contentDiv.innerHTML = generateContentHTML(data);

            // Make the container and frame visible
            contentDiv.style.display = 'block';
            frameDiv.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Event listener for Button 2 (Toggle Content Visibility)
toggleButton.addEventListener('click', () => {
    frameDiv.style.display = (frameDiv.style.display === 'none' || frameDiv.style.display === '') ? 'block' : 'none';
    contentDiv.style.display = (contentDiv.style.display === 'none' || contentDiv.style.display === '') ? 'block' : 'none';
});

// Function to generate HTML for all fetched content
function generateContentHTML(data) {
    //Clear the array and insert new data
    array.splice(0, array.length);
    array.push(data);

    return array.map(item => `
        <div>
            <p><strong>ID:</strong> ${item.id}</p>
            <p><strong>Title:</strong> ${item.title}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Discount Percentage:</strong> ${item.discountPercentage}</p>
            <p><strong>Rating:</strong> ${item.rating}</p>
            <p><strong>Stock:</strong> ${item.stock}</p>
            <p><strong>Brand:</strong> ${item.brand}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Thumbnail:</strong> <img src="${item.thumbnail}" alt="${item.thumbnail}" style="max-width: 50%; height: auto; object-fit: cover;"></p>

            <p><strong>Images:</strong> </p>
            ${item.images.map(image => `
                <img src="${image}" alt="${image}" style="max-width: 50%; height: auto; object-fit: cover;">
            `)}
            
            <hr>
        </div>
    `).join('');
}