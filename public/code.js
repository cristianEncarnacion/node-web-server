document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("postContent").value;

  const imgInput = document.getElementById("file");
  const img = imgInput.files[0];

  if (img) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const post = document.createElement("div");
      post.classList.add("post");
      const postTitle = document.createElement("h2");
      postTitle.textContent = titulo;

      const postContent = document.createElement("p");
      postContent.textContent = contenido;

      const postImg = document.createElement("img");
      postImg.src = e.target.result;

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";

      const botonEditar = document.createElement("button");
      botonEditar.textContent = "Editar";

      post.appendChild(postTitle);
      post.appendChild(postContent);
      post.appendChild(postImg);
      post.appendChild(botonEliminar);
      post.appendChild(botonEditar);

      const postsContainer = document.getElementById("postsContainer");
      postsContainer.appendChild(post);

      botonEliminar.addEventListener("click", function () {
        post.remove();
      });

      botonEditar.addEventListener("click", function () {
        const newTitle = prompt("Nuevo título");
        const newImg = document.createElement(
          "input type='file' id='file' name='file' accept='image/*'"
        );
        const nuevaImagen = newImg.files[0];
        const reader2 = new FileReader();
        reader2.onload = function (e) {
          postImg.src = e.target.result;
        };
        reader2.readAsDataURL(nuevaImagen);
        const newContent = prompt("Nuevo contenido");
        postTitle.textContent = newTitle;
        postContent.textContent = newContent;
      });
      document.getElementById("postForm").reset();
    };
    reader.readAsDataURL(img);
  }
});
