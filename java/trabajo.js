// HTML ==============================================================================================

let foot = document.getElementById("footerF");
let footer1 = document.createElement("footer");
foot.innerHTML = `        
<p>
Esta pagina solo cumple proposito de practica (creada por:Juan Ignacio Errecart). 
</p>

</svg>
<div class="reds">
<a href="https://www.instagram.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#fd0061" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
</a>
<a href="https://www.facebook.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
</a>

<a href="">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
</a>
</div>`

// Libreria ======================================================================================

const borrarC = document.getElementById("borrarCuenta");
borrarC.addEventListener('click', completeBorrar);

function completeBorrar() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cuenta Borrada!',
        'Tu Cuenta a sido borrada.',
        'success'
      )
    }
  })
}

// API ===========================================================================================
const enviarEmail = document.getElementById("enviar");
enviarEmail.addEventListener('click', emailEnviar);

function emailEnviar() {

  fetch("https://formsubmit.co/ajax/juanerrecart100@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS"
      })
    })
    .then(response => response.json())
    .then(data => console.log(data),
      Swal.fire({
        title: 'Felicitaciones',
        text: "el email se a verificado",
        icon: 'success',
      }))
    .catch(error => console.log(error),
      Swal.fire({
        title: 'error',
        text: "No se pudo verificar el email",
        icon: 'warning',
      })
    );

}


// Storage =======================================================================================

const enviarCuenta = document.getElementById("enviar");
enviarCuenta.addEventListener('click', guardaraContenido);

function guardaraContenido() {
  let dato1 = document.getElementById("usuario").value;
  let dato2 = document.getElementById("email").value;
  localStorage.setItem('usuario', dato1);
  localStorage.setItem('email', dato2);
}

const borrarCuenta = document.getElementById("borrarCuenta");
borrarCuenta.addEventListener('click', borrarContenido);

function borrarContenido() {
  localStorage.clear();
}

// Juego =========================================================================================


const respuestaA = document.getElementById("resultado1");
respuestaA.addEventListener('click', test);

function test() {
  let pregunta1 = +document.getElementById("pA1").value;
  let pregunta2 = +document.getElementById("pA2").value;
  let pregunta3 = +document.getElementById("pA3").value;
  let pregunta4 = +document.getElementById("pA4").value;
  let resultadoA1 = document.getElementById("resultado1").innerHTML = pregunta1 + pregunta2 + pregunta3 + pregunta4;
  resultadoA1 > 70 && Swal.fire({
    title: "Sos una Patty",
    imageUrl: 'https://pbs.twimg.com/media/Dj60GorW0AA4pSH.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    timer: 2500
  });
  resultadoA1 < 70 && Swal.fire({
    title: "Sos una Selma",
    imageUrl: 'https://pbs.twimg.com/profile_images/470910067080826881/McGMgCep_400x400.png',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image',
    timer: 2500
  });

}

const respuestaB = document.getElementById("resultado2");
respuestaB.addEventListener('click', testB);

function testB() {
  let pregunta1b = +document.getElementById("pB1").value;
  let pregunta2b = +document.getElementById("pB2").value;
  let pregunta3b = +document.getElementById("pB3").value;
  let pregunta4b = +document.getElementById("pB4").value;
  let pregunta5b = +document.getElementById("pB5").value;
  let pregunta6b = +document.getElementById("pB6").value;
  let resultadoB1 = document.getElementById("resultado2").innerHTML = pregunta1b + pregunta2b + pregunta3b + pregunta4b + pregunta5b + pregunta6b;
  if (resultadoB1 <= 50) {
    Swal.fire({
      title: "Hulk",
      imageUrl: 'https://i.pinimg.com/736x/e8/91/e5/e891e502d8a64009614d63cce8adc76b.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 2500
    });
  } else if (resultadoB1 < 50 && resultadoB1 <= 70) {
    Swal.fire({
      title: "Hawkeye",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlxvwBlB4ovMoXelG0Syl-tGPz_Sd2pa5-A&usqp=CAU',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 2500
    });
  } else if (resultadoB1 < 70 && resultadoB1 <= 95) {
    Swal.fire({
      title: "Black Widow",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbw4QSqbvt5ozuD3U0pzsGdN5TSmne1Nnyw&usqp=CAU',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 2500
    });
  } else if (resultadoB1 < 95 && resultadoB1 <= 115) {
    Swal.fire({
      title: "Thor",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ3kEqGqbPELj7-1_qw1XeodnP07J25K_Gw&usqp=CAU',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 2500
    });
  } else if (resultadoB1 < 125 && resultadoB1 <= 135) {
    Swal.fire({
      title: "Iron-Man",
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 2500
    });
  } else if (resultadoB1 < 135 && resultadoB1 <= 155) {
    Swal.fire({
      title: "Capitan America",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXQBX6aEyCxqvHWE_TwHWZQ-XfuSPzsWjjUsVlQwjESrzQsT0NzYhu9_Md7IxBglAFQk&usqp=CAU',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 2500
    });
  }
}

// RESULTADOS1 =======================================================================================================

document.getElementById('result1').addEventListener('click', primerResultado);

function primerResultado() {
  fetch('json/resultadoA.json')
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach(function (result1) {

        html += `<div class="resultP card" style="width: 13rem;">
        <img src="${result1.img}" class="imgR" alt="fotos de los resultados del juego1">
        <div class="text2 card-body">
        <h4>${result1.nombre}</h4>
          <p>${result1.text}</p>
        </div>
      </div>`;
      });
      document.getElementById('contenedorResultadoA').innerHTML = html
    })
    .catch(function (error) {
      console.log(error);
    })
}

document.getElementById('result2').addEventListener('click', segundoResultado);

function segundoResultado() {
  fetch('json/resultadoB.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach(function (result2) {
        html += `<div class="resultP card" style="width: 13rem;">
        <img src="${result2.img}" class="imgR" alt="fotos de los resultados del juego2">
        <div class="text2 card-body">
        <h4>${result2.nombre}</h4>
          <p>${result2.text}</p>
        </div>
      </div>`;
      });
      document.getElementById('contenedorResultadoB').innerHTML = html
    })
    .catch(function (error) {
      console.log(error);
    })
}

setTimeout(()=> {
  swal({
    title: "La estas pasando bien?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Que alegria", {
      });
    } else {
      swal("que malo");
    }
  });
}, 40000)

