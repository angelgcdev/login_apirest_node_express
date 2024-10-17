document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  //Obtener los valores de los campos de entrada
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //Verificar que los campos no esten vacíos
  if (!email || !password) {
    document.getElementById("message").innerText =
      "Por favor, completa todos los campos.";
    return;
  }

  try {
    //Realizar la solicitud de inicio de sesión
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    //Manejar la respuesta de la API
    if (response.ok) {
      //Guarda el token en el localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("userEmail", data.user.email);
      //Redirigir a la página principal o donde desees
      window.location.href = "../main.html";
    } else {
      //Mostrar el mensaje de error
      document.getElementById("message").innerText = data.message;
    }
  } catch (error) {
    //Manejo de errores de red o de otro tipo
    console.error("Error al iniciar sesión:", error);
    document.getElementById("message").innerText =
      "Error al iniciar sesión. Inténtalo de nuevo más tarde.";
  }
});
