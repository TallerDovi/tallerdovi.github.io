// Carga el mapa de Google solo cuando el visitante lo pide (sin cookies de terceros antes del clic)
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-mapa]');
  if (!b) return;
  var box = b.closest('.map');
  var f = document.createElement('iframe');
  f.title = 'Mapa de Taller Dovi en Sax';
  f.src = b.getAttribute('data-mapa');
  f.referrerPolicy = 'no-referrer-when-downgrade';
  box.replaceChildren(f);
});
