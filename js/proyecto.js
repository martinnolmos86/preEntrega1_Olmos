let nombre = prompt(
  "Bienvenido a adopciones de mascotas , ¿ como es tu nombre ?"
);

// funcion eleccion
const select = () => {
  let seleccion = prompt(`${nombre},¿que desea hacer ?¿ adoptar o donar ?`);
  if (seleccion === "donar") {
    donate();
  } else if (seleccion === "adoptar") {
    adopt();
  } else if (seleccion === null) {
    alert(`¡Hasta luego!`);
    return;
  }
  // si el usuario no coloca adoptar ni donar
  while (
    seleccion.toLowerCase() !== "adoptar" &&
    seleccion.toLowerCase() !== "donar"
  ) {
    seleccion = prompt(
      "Por favor, ingrese una opción válida: ¿desea adoptar o donar?"
    );

    if (seleccion === null) {
      alert("¡Hasta luego!");
      return;
    }
  }
};
// funcion donar
const donate = () => {
  let amount = prompt("Ingrese el monto a donar");

  // si el usuario ingresa cancelar
  if (amount === null) {
    alert("¡Hasta luego!");
    return;
  }
  // Convertir a número y verificar si es válido
  amount = Number(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Monto inválido");
    return;
  }
  alert(
    `Gracias ${nombre} por la colaboracion de $${amount} para apoyar nuestra causa `
  );
};

// funcion adoptar
const adopt = () => {
  let eleccion = prompt(
    `${nombre} ¿quien queres que sea tu nuevo compañero de vida? ¿perros o gatos ?`
  );
  // si coloca cancelar muestra este mensaje
  if (eleccion === null) {
    alert("¡Hasta luego!");
    return;
  } else if (eleccion === "perros") {
    adoptDogs();
    return;
  } else if (eleccion === "gatos") {
    adoptCats();
    return;
  }
};
// funcion perros
const adoptDogs = () => {
  let dogSelecction = prompt(
    "Ingrese el nombre del perro a adoptar: Luna, Lolla, Zeus o Rocky"
  ).toLowerCase();
  let mensaje;
  let correo;

  switch (dogSelecction) {
    case "luna":
      correo = prompt(
        "Usted eligio a Luna, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
      }
      break;
    case "lolla":
      mensaje = prompt(
        "Usted eligio a Lolla, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
        break;
      }
    case "zeus":
      mensaje = prompt(
        "Usted eligio a Zeus, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
        break;
      }
    case "rocky":
      mensaje = prompt(
        "Usted eligio a Rocky, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
        break;
      }
    default:
      mensaje = "El animal que ha ingresado no está disponible para adopción";
  }

  // alert(mensaje);
};

// funcion gatos
const adoptCats = () => {
  let catSelecction = prompt(
    "Ingrese el nombre del gato a adoptar: Clara, Henry, Simba, Misha."
  ).toLowerCase();
  let mensaje;
  let correo;

  switch (catSelecction) {
    case "clara":
      mensaje =
        "Usted eligio a Clara, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    case "henry":
      mensaje =
        "Usted eligio a Henry, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    case "simba":
      mensaje =
        "Usted eligio a Simba, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    case "misha":
      mensaje =
        "Usted eligio a Misha, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    default:
      mensaje = "El animal que ha ingresado no está disponible para adopción";
  }

  alert(mensaje);
  correo = prompt(`su correo es :`);
  if (correo != null) {
    alert(`${nombre} pronto nos comunicaremos a su correo, gracias.`);
  }
};

// Llamado a funciones
select();
