// Navbar scroll
window.addEventListener('scroll',()=>{
  document.querySelector('.navbar')
  ?.classList.toggle('scrolled',window.scrollY>50);
});

// Envio WhatsApp + Email
function enviarContato(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

  // WhatsApp
  window.open(
    `https://wa.me/5567998381660?text=${encodeURIComponent(texto)}`,
    "_blank"
  );

  // Email
  window.location.href =
    `mailto:contato@advocaciacanela.com.br?subject=Contato Site&body=${encodeURIComponent(texto)}`;
}
