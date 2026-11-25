// Esperamos a que todo el contenido HTML cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
 
  /* =====================================================
     1. MENÚ ADAPTABLE PARA DISPOSITIVOS MÓVILES
     ===================================================== */
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const navLinks = mainNav.querySelectorAll("a");
 
  // Abrir o cerrar el menú al presionar el botón
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
 
  // Cerrar el menú automáticamente al hacer clic en un enlace (en celular)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
 
 
  /* =====================================================
     2. TARJETAS DESPLEGABLES DE ESTILOS MUSICALES
     ===================================================== */
  const accordionHeaders = document.querySelectorAll(".accordion-header");
 
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.parentElement;
      const icon = header.querySelector(".accordion-icon");
      
      // Alterna la clase 'active' para mostrar u ocultar la información
      const isActive = card.classList.toggle("active");
      
      // Actualiza accesibilidad e ícono visual (+ o −)
      header.setAttribute("aria-expanded", isActive);
      icon.textContent = isActive ? "−" : "+";
    });
  });
 
 
  /* =====================================================
     3. GENERADOR ALEATORIO DE RECOMENDACIONES MUSICALES
     ===================================================== */
  // Lista con 12 canciones clásicas de jazz
  const jazzSongs = [
    {
      titulo: "So What",
      artista: "Miles Davis (1959)",
      url: "https://www.youtube.com/results?search_query=Miles+Davis+So+What"
    },
    {
      titulo: "Take Five",
      artista: "The Dave Brubeck Quartet (1959)",
      url: "https://www.youtube.com/results?search_query=Dave+Brubeck+Take+Five"
    },
    {
      titulo: "What a Wonderful World",
      artista: "Louis Armstrong (1967)",
      url: "https://www.youtube.com/results?search_query=Louis+Armstrong+What+a+Wonderful+World"
    },
    {
      titulo: "My Favorite Things",
      artista: "John Coltrane (1961)",
      url: "https://www.youtube.com/results?search_query=John+Coltrane+My+Favorite+Things"
    },
    {
      titulo: "Take the 'A' Train",
      artista: "Duke Ellington Orchestra (1941)",
      url: "https://www.youtube.com/results?search_query=Duke+Ellington+Take+the+A+Train"
    },
    {
      titulo: "Summertime",
      artista: "Ella Fitzgerald & Louis Armstrong (1957)",
      url: "https://www.youtube.com/results?search_query=Ella+Fitzgerald+Louis+Armstrong+Summertime"
    },
    {
      titulo: "Strange Fruit",
      artista: "Billie Holiday (1939)",
      url: "https://www.youtube.com/results?search_query=Billie+Holiday+Strange+Fruit"
    },
    {
      titulo: "Chameleon",
      artista: "Herbie Hancock (1973)",
      url: "https://www.youtube.com/results?search_query=Herbie+Hancock+Chameleon"
    },
    {
      titulo: "Goodbye Pork Pie Hat",
      artista: "Charles Mingus (1959)",
      url: "https://www.youtube.com/results?search_query=Charles+Mingus+Goodbye+Pork+Pie+Hat"
    },
    {
      titulo: "Autumn Leaves",
      artista: "Cannonball Adderley & Miles Davis (1958)",
      url: "https://www.youtube.com/results?search_query=Cannonball+Adderley+Autumn+Leaves"
    },
    {
      titulo: "Round Midnight",
      artista: "Thelonious Monk (1947)",
      url: "https://www.youtube.com/results?search_query=Thelonious+Monk+Round+Midnight"
    },
    {
      titulo: "Blue in Green",
      artista: "Miles Davis & Bill Evans (1959)",
      url: "https://www.youtube.com/results?search_query=Miles+Davis+Blue+in+Green"
    }
  ];
 
  const recommendBtn = document.getElementById("recommend-btn");
  const recommendationBox = document.getElementById("recommendation-box");
  let lastIndex = -1; // Para evitar que se repita exactamente la misma canción seguida
 
  recommendBtn.addEventListener("click", () => {
    let randomIndex;
    
    // Genera un índice aleatorio distinto al anterior
    do {
      randomIndex = Math.floor(Math.random() * jazzSongs.length);
    } while (randomIndex === lastIndex);
    
    lastIndex = randomIndex;
    const selectedSong = jazzSongs[randomIndex];
 
    // Inserta el resultado dentro del cuadro en HTML
    recommendationBox.innerHTML = `
      <h3 class="rec-title">«${selectedSong.titulo}»</h3>
      <p class="rec-artist">${selectedSong.artista}</p>
      <a href="${selectedSong.url}" target="_blank" rel="noopener noreferrer" class="rec-link">
        Escuchar en YouTube &nearr;
      </a>
    `;
  });
 
});
- YouTube
Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.
 
