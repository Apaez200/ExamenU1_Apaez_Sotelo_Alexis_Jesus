
const imagenes = [
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Nissan-GTR/744/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2024_Nissan_GT-R_Premium_edition_T-Spec.jpg/2560px-2024_Nissan_GT-R_Premium_edition_T-Spec.jpg",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1673606479/evo/2023/01/NISSAN-GT-R-NISMO-Special-edition-MY2024_02_eunxbr.jpg",
    "https://cdn.motor1.com/images/mgl/Av02V/s1/2022-nissan-gt-r-nismo-special-edition.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-49SbR9rdY3myKzkKn2crZTf2zMP-K62F_uwrqznN6QS-ozj7wD-eEbCVDLowFMp8so&usqp=CAU",
    "img/apaez1.jpg",
    "img/apaez2.jpg",
    "img/apaez3.jpg",
    "img/apaez4.jpg",
    "img/apaez5.jpg"
];
    let indiceActual = 0;

const imagen = document.getElementById("imagen");
      const anterior = document.getElementById("anterior");
      const siguiente = document.getElementById("siguiente");

      function imagenActual() {
        imagen.src = imagenes[indiceActual];
      }

      anterior.addEventListener("click", () => {
        if (indiceActual > 0) {
          indiceActual--;
        } else {
          indiceActual = imagenes.length - 1;
        }
        imagenActual();
      });

      siguiente.addEventListener("click", () => {
        if (indiceActual < imagenes.length - 1) {
          indiceActual++;
        } else {
          indiceActual = 0;
        }
        imagenActual();
      });


    imagenActual();