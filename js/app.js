
/* =====================================================
   CONFIGURACIÓN DEL HOTEL
===================================================== */

const hotel = {

    nombre: "Hotel mily",

    telefono: "+51 969 664 024",

    whatsapp: "51969664024",

    email: "reservas@hotelCarlosPio.com",

    direccion:
        "Carretera central kilometro 42 al costado del club kancasica",

    mapa:
        "https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d673.9561127896092!2d-76.63188837540133!3d-11.922687354099049!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105faafbae4d0b7%3A0x4c52720f6921404b!2sRestaurant%20-%20Hospedaje%20-%20Piscina%20MILY!5e1!3m2!1ses!2spe!4v1789328995817!5m2!1ses!2spe",

    mapaUrl:
        "https://www.google.com/maps/place/Restaurant+-+Hospedaje+-+Piscina+MILY/@-11.9226874,-76.6318884,155m/data=!3m1!1e3!4m12!1m5!3m4!2zMTHCsDU1JzIxLjYiUyA3NsKwMzcnNTUuMCJX!8m2!3d-11.9226667!4d-76.6319444!3m5!1s0x9105faafbae4d0b7:0x4c52720f6921404b!8m2!3d-11.9228674!4d-76.6319605!16s%2Fg%2F11c2nc8jgx?hl=es&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"

};



/* =====================================================
   SERVICIOS
===================================================== */

const servicios = [

   // {
     //     icono: "♨",
     //     titulo: "Jacuzzi",
    //      descripcion:
    //          "Relájate y disfruta de un momento especial."
    //  },

    {
        icono: "🏊",
        titulo: "Piscina",
        descripcion:
            "Disfruta de nuestra piscina durante tu estadía."
    },

    {
        icono: "Wi",
        titulo: "WiFi Gratis",
        descripcion:
            "Mantente conectado durante toda tu visita."
    },

    {
        icono: "TV",
        titulo: "Entretenimiento",
        descripcion:
            "Disfruta de televisión y entretenimiento."
    },

    {
        icono: "🔥",
        titulo: "Zona de Parrilla",
        descripcion:
            "Comparte momentos especiales con amigos."
    },

     // {
     //     icono: "♥",
     //     titulo: "Experiencias",
     //     descripcion:
     //         "Creamos momentos especiales para ti."
     // }

];



/* =====================================================
   HABITACIONES
===================================================== */

const habitaciones = [

    {
        id: 1,

        nombre:
            "Habitación Individual",

        categoria:
            "INDIVIDUAL",

        imagenes: [
            "img/individual-1.jpeg",
            "img/individual-2.jpeg"
        ],

        descripcion:
            "Pensada para quienes buscan máxima comodidad y confort con un estilo único.",

        caracteristicas: [
            "Cama de 2 plazas",
            "TV Smart con Netflix",
            "Baño privado",
            "Closet",
            "Room service",
            "Internet WiFi"
        ],

        especial: false
    },


    {
        id: 2,

        nombre:
            "Habitación Matrimonial",

        categoria:
            "MATRIMONIAL",

        imagenes: [
            "img/matrimonial-1.jpeg",
            "img/matrimonial-2.jpeg"
        ],

        descripcion:
            "Un espacio cómodo y acogedor diseñado para disfrutar de una estadía agradable en pareja.",

        caracteristicas: [
            "Cama de 2 plazas",
            "TV Smart con Netflix",
            "Baño privado",
            "Closet",
            "Room service",
            "Internet WiFi"
        ],

        especial: false
    },


    {
        id: 3,

        nombre:
            "Habitación Matrimonial Premium",

        categoria:
            "MATRIMONIAL",

        imagenes: [
            "img/matrimonial-premium-1.jpeg",
            "img/matrimonial-premium-2.jpeg"
        ],

        descripcion:
            "Una habitación confortable equipada con servicios adicionales para una estadía más placentera.",

        caracteristicas: [
            "Cama Queen",
            "Frigobar",
            "TV Smart con Netflix",
            "Baño privado",
            "Closet",
            "Room service",
            "Internet WiFi"
        ],

        especial: false
    },


    {
        id: 4,

        nombre:
            "Habitación Doble",

        categoria:
            "DOBLE",

        imagenes: [
            "img/doble-1.jpeg",
            "img/doble-2.jpeg"
        ],

        descripcion:
            "Amplia y cómoda habitación ideal para compartir, con dos camas y una agradable terraza.",

        caracteristicas: [
            "2 camas de 2 plazas",
            "TV Smart con Netflix",
            "Baño privado",
            "Closet",
            "Room service",
            "Internet WiFi",
            "Terraza"
        ],

        especial: false
    }

];


/* =====================================================
   GALERÍA
===================================================== */



const galeria = [

    {
        imagen: "img/1.jpeg",
        titulo: "1"
    },

    {
        imagen: "img/2.jpeg",
        titulo: "2"
    },

    {
        imagen: "img/3.jpeg",
        titulo: "3"
    },

    {
        imagen: "img/4.jpeg",
        titulo: "4"
    },

    {
        imagen: "img/5.jpeg",
        titulo: "5"
    },

    {
        imagen: "img/6.jpeg",
        titulo: "6"
    },

    {
        imagen: "img/7.jpeg",
        titulo: "7"
    },

    {
        imagen: "img/8.jpeg",
        titulo: "8"
    },

    {
        imagen: "img/9.jpeg",
        titulo: "9"
    },

    {
        imagen: "img/10.jpeg",
        titulo: "10"
    },

    {
        imagen: "img/11.jpeg",
        titulo: "11"
    },

    {
        imagen: "img/12.jpeg",
        titulo: "12"
    },

    {
        imagen: "img/13.jpeg",
        titulo: "13"
    },

    {
        imagen: "img/14.jpeg",
        titulo: "14"
    },

    {
        imagen: "img/15.jpeg",
        titulo: "15"
    },

    {
        imagen: "img/16.jpeg",
        titulo: "16"
    },

    {
        imagen: "img/17.jpeg",
        titulo: "17"
    },

    {
        imagen: "img/18.jpeg",
        titulo: "18"
    },

    {
        imagen: "img/19.jpeg",
        titulo: "19"
    },

    {
        imagen: "img/20.jpeg",
        titulo: "20"
    },

    {
        imagen: "img/21.jpeg",
        titulo: "21"
    },

    {
        imagen: "img/22.jpeg",
        titulo: "22"
    },

    {
        imagen: "img/23.jpeg",
        titulo: "23"
    },

    {
        imagen: "img/24.jpeg",
        titulo: "24"
    },

    {
        imagen: "img/25.jpeg",
        titulo: "25"
    },

    {
        imagen: "img/26.jpeg",
        titulo: "26"
    },

    {
        imagen: "img/27.jpeg",
        titulo: "27"
    },

    {
        imagen: "img/28.jpeg",
        titulo: "28"
    },

    {
        imagen: "img/29.jpeg",
        titulo: "29"
    },

    {
        imagen: "img/30.jpeg",
        titulo: "30"
    },

    {
        imagen: "img/31.jpeg",
        titulo: "31"
    },

    {
        imagen: "img/32.jpeg",
        titulo: "32"
    },

    {
        imagen: "img/33.jpeg",
        titulo: "33"
    },

    {
        imagen: "img/34.jpeg",
        titulo: "34"
    },

    {
        imagen: "img/35.jpeg",
        titulo: "35"
    },

    {
        imagen: "img/36.jpeg",
        titulo: "36"
    },

    {
        imagen: "img/37.jpeg",
        titulo: "37"
    },

    {
        imagen: "img/38.jpeg",
        titulo: "38"
    },

    {
        imagen: "img/39.jpeg",
        titulo: "39"
    },

    {
        imagen: "img/40.jpeg",
        titulo: "40"
    },

    {
        imagen: "img/41.jpeg",
        titulo: "41"
    },

    {
        imagen: "img/42.jpeg",
        titulo: "42"
    },

    {
        imagen: "img/43.jpeg",
        titulo: "43"
    },

    {
        imagen: "img/44.jpeg",
        titulo: "44"
    },

    {
        imagen: "img/45.jpeg",
        titulo: "45"
    },

    {
        imagen: "img/46.jpeg",
        titulo: "46"
    },

    {
        imagen: "img/47.jpeg",
        titulo: "47"
    },

    {
        imagen: "img/48.jpeg",
        titulo: "48"
    },

    {
        imagen: "img/49.jpeg",
        titulo: "49"
    },

    {
        imagen: "img/50.jpeg",
        titulo: "50"
    },

    {
        imagen: "img/51.jpeg",
        titulo: "51"
    },

    {
        imagen: "img/52.jpeg",
        titulo: "52"
    }

];



/* =====================================================
   CARGAR DATOS DEL HOTEL
===================================================== */

document.getElementById(
    "telefonoHotel"
).textContent = hotel.telefono;


document.getElementById(
    "emailHotel"
).textContent = hotel.email;


document.getElementById(
    "direccionHotel"
).textContent = hotel.direccion;


document.getElementById(
    "footerTelefono"
).textContent = hotel.telefono;


document.getElementById(
    "footerEmail"
).textContent = hotel.email;


document.getElementById(
    "footerDireccion"
).textContent = hotel.direccion;


document.getElementById(
    "year"
).textContent = new Date().getFullYear();



/* =====================================================
   MAPA
===================================================== */

document.getElementById(
    "mapaHotel"
).src = hotel.mapa;


document.getElementById(
    "rutaMapa"
).href = hotel.mapaUrl;



/* =====================================================
   RENDER SERVICIOS
===================================================== */

function renderServicios() {

    const container =
        document.getElementById(
            "serviciosContainer"
        );


    container.innerHTML = "";


    servicios.forEach(
        servicio => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "service-card";


            card.innerHTML = `

                <div class="service-icon">

                    ${servicio.icono}

                </div>

                <h3>

                    ${servicio.titulo}

                </h3>

                <p>

                    ${servicio.descripcion}

                </p>

            `;


            container.appendChild(card);

        }
    );

}



/* =====================================================
   RENDER HABITACIONES
===================================================== */

function renderHabitaciones() {

    const container =
        document.getElementById(
            "habitacionesContainer"
        );


    container.innerHTML = "";


    habitaciones.forEach(
        habitacion => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "room-card";


            let caracteristicas = "";


            habitacion.caracteristicas
                .forEach(
                    item => {

                        caracteristicas += `

                            <span>
                                ${item}
                            </span>

                        `;

                    }
                );


            card.innerHTML = `

                <div class="room-image">

                    <img
                        id="room-image-${habitacion.id}"
                        src="${habitacion.imagenes[0]}"
                        alt="${habitacion.nombre}"
                        loading="lazy"
                    >

                    ${
                        habitacion.imagenes.length > 1
                        ?
                        `
                        <button
                            class="image-prev"
                            onclick="cambiarImagen(${habitacion.id}, -1)"
                            aria-label="Imagen anterior">

                            ‹

                        </button>

                        <button
                            class="image-next"
                            onclick="cambiarImagen(${habitacion.id}, 1)"
                            aria-label="Imagen siguiente">

                            ›

                        </button>

                        <div class="image-counter"
                             id="image-counter-${habitacion.id}">

                            1 / ${habitacion.imagenes.length}

                        </div>
                        `
                        :
                        ""
                    }


                    ${
                        habitacion.especial
                        ?
                        `
                        <span class="room-special">
                            ESPECIAL
                        </span>
                        `
                        :
                        ""
                    }

                </div>


                <div class="room-content">

                    <small>
                        ${habitacion.categoria}
                    </small>

                    <h3>
                        ${habitacion.nombre}
                    </h3>

                    <p>
                        ${habitacion.descripcion}
                    </p>


                    <div class="room-features">

                        ${caracteristicas}

                    </div>


                    <button
                        class="room-button"
                        onclick="consultarHabitacion(${habitacion.id})">

                        Consultar

                        <span>
                            →
                        </span>

                    </button>

                </div>

            `;


            container.appendChild(card);

        }
    );

}

function cambiarImagen(id, direccion) {

    const habitacion =
        habitaciones.find(
            habitacion => habitacion.id === id
        );


    if (!habitacion || !habitacion.imagenes) {
        return;
    }


    const imagen =
        document.getElementById(
            `room-image-${id}`
        );


    const contador =
        document.getElementById(
            `image-counter-${id}`
        );


    let indiceActual =
        habitacion.imagenes.indexOf(
            imagen.getAttribute("src")
        );


    indiceActual += direccion;


    if (
        indiceActual >=
        habitacion.imagenes.length
    ) {

        indiceActual = 0;

    }


    if (indiceActual < 0) {

        indiceActual =
            habitacion.imagenes.length - 1;

    }


    imagen.src =
        habitacion.imagenes[indiceActual];


    if (contador) {

        contador.textContent =
            `${indiceActual + 1} / ${habitacion.imagenes.length}`;

    }

}




/* =====================================================
   SELECT DE HABITACIONES
===================================================== */

function cargarSelectHabitaciones() {

    const select =
        document.getElementById(
            "habitacionSelect"
        );


    habitaciones.forEach(
        habitacion => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                habitacion.nombre;


            option.textContent =
                habitacion.nombre;


            select.appendChild(option);

        }
    );

}



/* =====================================================
   RENDER GALERÍA
===================================================== */

function renderGaleria() {

    const container =
        document.getElementById(
            "galeriaContainer"
        );


    container.innerHTML = "";


    galeria.forEach(
        (foto, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "gallery-item";


            item.innerHTML = `

                <img
                    src="${foto.imagen}"
                    alt="${foto.titulo}"
                    loading="lazy"
                >

            `;


            item.addEventListener(
                "click",
                () => {

                    abrirLightbox(index);

                }
            );


            container.appendChild(item);

        }
    );

}



/* =====================================================
   LIGHTBOX
===================================================== */

let imagenActual = 0;


function abrirLightbox(index) {

    imagenActual = index;


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const image =
        document.getElementById(
            "lightboxImage"
        );


    image.src =
        galeria[index].imagen;


    image.alt =
        galeria[index].titulo;


    lightbox.classList.add(
        "active"
    );

}


function cerrarLightbox() {

    document.getElementById(
        "lightbox"
    ).classList.remove(
        "active"
    );

}


function siguienteImagen() {

    imagenActual++;

    if (
        imagenActual >=
        galeria.length
    ) {

        imagenActual = 0;

    }


    document.getElementById(
        "lightboxImage"
    ).src =
        galeria[imagenActual].imagen;

}


function anteriorImagen() {

    imagenActual--;

    if (imagenActual < 0) {

        imagenActual =
            galeria.length - 1;

    }


    document.getElementById(
        "lightboxImage"
    ).src =
        galeria[imagenActual].imagen;

}



document.getElementById(
    "lightboxClose"
).addEventListener(
    "click",
    cerrarLightbox
);


document.getElementById(
    "lightboxNext"
).addEventListener(
    "click",
    siguienteImagen
);


document.getElementById(
    "lightboxPrev"
).addEventListener(
    "click",
    anteriorImagen
);



/* =====================================================
   WHATSAPP
===================================================== */

function abrirWhatsApp(mensaje) {

    const url =
        `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}



/* =====================================================
   CONTACTAR WHATSAPP
===================================================== */

function contactarWhatsApp() {

    const mensaje =
        `Hola ${hotel.nombre}, quisiera obtener información sobre sus habitaciones y disponibilidad.`;


    abrirWhatsApp(mensaje);

}



/* =====================================================
   RESERVAR WHATSAPP
===================================================== */

function reservarWhatsApp() {

    const mensaje =
        `Hola ${hotel.nombre}, quisiera realizar una reserva. ¿Podrían indicarme disponibilidad y precios?`;


    abrirWhatsApp(mensaje);

}



/* =====================================================
   CONSULTAR HABITACIÓN
===================================================== */

function consultarHabitacion(id) {

    const habitacion =
        habitaciones.find(
            item => item.id === id
        );


    if (!habitacion) {
        return;
    }


    const mensaje =
        `Hola ${hotel.nombre}, quisiera consultar disponibilidad para la ${habitacion.nombre}.`;


    abrirWhatsApp(mensaje);

}



/* =====================================================
   FORMULARIO → WHATSAPP
===================================================== */

document.getElementById(
    "contactForm"
).addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nombre =
            document.getElementById(
                "nombre"
            ).value.trim();


        const telefono =
            document.getElementById(
                "telefono"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const habitacion =
            document.getElementById(
                "habitacionSelect"
            ).value;


        const mensaje =
            document.getElementById(
                "mensaje"
            ).value.trim();


        const texto = `

Hola ${hotel.nombre}.

Quisiera realizar una consulta.

Nombre:
${nombre}

Teléfono:
${telefono}

Email:
${email}

Habitación:
${habitacion || "No especificada"}

Mensaje:
${mensaje}

        `;


        abrirWhatsApp(texto);

    }
);



/* =====================================================
   WHATSAPP FLOTANTE
===================================================== */

document.getElementById(
    "whatsappFloat"
).href =
    `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(
        "Hola Hotel mily, quisiera información."
    )}`;



/* =====================================================
   MENÚ MOBILE
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const nav =
    document.getElementById(
        "nav"
    );


menuButton.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "active"
        );

    }
);


nav.querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                }
            );

        }
    );



/* =====================================================
   HEADER SCROLL
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const header =
            document.getElementById(
                "header"
            );


        if (
            window.scrollY > 50
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =====================================================
   ESC PARA LIGHTBOX
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            cerrarLightbox();

        }


        if (
            event.key === "ArrowRight"
        ) {

            siguienteImagen();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            anteriorImagen();

        }

    }
);



/* =====================================================
   INICIALIZAR
===================================================== */

renderServicios();

renderHabitaciones();

renderGaleria();

cargarSelectHabitaciones();
