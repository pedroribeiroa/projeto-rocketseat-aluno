function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')  // Faz a mesma coisa do condição acima, mas é usado em coisas de css (Módulo 5 | Aula 6).

  // pegar a imagem
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil do Maik Brito de óculos e camisa preta.")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil do Maik Brito sorrindo, com óculos e camisa preta.")
  }
}