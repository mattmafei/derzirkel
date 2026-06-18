var routes = ['home','philosophie','zirkel6','fuerwen','ubermich','kontakt'];
  var titles = {
    home: 'Der Zirkel — Der persönliche Beirat',
    philosophie: 'Philosophie — Der Zirkel',
    zirkel6: 'Zirkel 6 — Der Zirkel',
    fuerwen: 'Für wen — Der Zirkel',
    ubermich: 'Über uns — Der Zirkel',
    kontakt: 'Kontakt — Der Zirkel'
  };

  function showRoute(route){
    if(routes.indexOf(route) === -1){ route = 'home'; }
    document.querySelectorAll('.page').forEach(function(sec){
      sec.classList.toggle('active', sec.id === route);
    });
    document.querySelectorAll('[data-route]').forEach(function(link){
      link.classList.toggle('is-active', link.dataset.route === route);
    });
    document.title = titles[route] || titles.home;
    window.scrollTo(0,0);
    var nav = document.getElementById('primaryNav');
    nav.classList.remove('nav-open');
    document.getElementById('navToggle').setAttribute('aria-expanded','false');
  }

  function routeFromHash(){
    var h = window.location.hash.replace('#','') || 'home';
    showRoute(h);
  }

  window.addEventListener('hashchange', routeFromHash);
  document.addEventListener('DOMContentLoaded', function(){
    routeFromHash();
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('primaryNav');
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
