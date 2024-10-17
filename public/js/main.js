const texto = document.getElementById("texto");
const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const userEmail = localStorage.getItem("userEmail");

//Verificar si el usuario esta autenticado

texto.textContent = `Esta es la pagina de ${userEmail}`;

const obtenerUsuario = async () => {
  try {
    const response = await fetch(`/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const userData = await response.json();
      console.log(userData);
      document.querySelector("#userEmail").textContent = `Name: ${userData.name}
      Email: ${userData.email}
      Creacion: ${userData.created_at}
      `;
    }
  } catch (error) {}
};

obtenerUsuario();
