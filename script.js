const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -0.5 : 0.5;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider);

const Slider = () =>{
    const imageList = document.querySelector(".list-arrow .container-menu");
    const slideButtons = document.querySelectorAll(".list-arrow .slider-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -0.5 : 0.5;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", Slider);



const menuContainer = document.getElementById('menu');
const mainCourse = document.getElementById('main-course');
const snack = document.getElementById('snack');
const dimsum = document.getElementById('dimsum');
const nonCoffee = document.getElementById('non-coffee');
const coffee = document.getElementById('coffee');


// Fetch data from JSON
fetch('./asset/menu.json')
  .then(response => response.json())
  .then(data => {
    // Function to filter data by category
    const filterByCategory = (kategori) => {
      const filteredCategory = data.filter(item => item.kategori === kategori);
      menuContainer.innerHTML = filteredCategory.map(item => `
        <div class="fade-in">
          <img src="${item.gambar}" alt="${item.gambar}">
          <p>${item.nama}</p>
          <p>Rp. ${item.harga.toLocaleString('id-ID')}</p>
        </div>
      `).join('');
    };

    const resetSlider = () =>{
        menuContainer.scrollLeft = 0;
    };

    const initializeMenu = () => {
        filterByCategory('Main Course'); // Menampilkan kategori 'Drink' secara otomatis
      };

    // Event listener for drink menu click
    mainCourse.addEventListener('click', () => {
      filterByCategory('Main Course');
      resetSlider();
    });

    // Event listener for food menu click (Tambahkan ini)
    snack.addEventListener('click', () => {
      filterByCategory('Snack');
      resetSlider();
    });

    dimsum.addEventListener('click', () => {
        filterByCategory('Dimsum');
        resetSlider();
    });

    nonCoffee.addEventListener('click', () => {
        filterByCategory('Non Coffee');
        resetSlider();
    });

    coffee.addEventListener('click', () => {
        filterByCategory('Coffee');
        resetSlider();
    });

    // Initial rendering without filtering
    initializeMenu(); // To display all items initially
  });



