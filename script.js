// jQuery & js

$(document).ready(function(){

  $('main').hide();

  $('h1').click(function () {
    $('.entrance').fadeOut("slow", function() {
      $('main').slideDown("slow");
    });
  });

  $('#ecrire').click(function() {
    var nom = $('#nom').val();
    var valeur = $('#valeur').val();

    if (nom.length > 0 && valeur.length > 0) {
      sessionStorage.setItem(nom, valeur);
      alert("Données écrites !");
    } else {
      alert("Les champs sont vides !");
    }

  });

  $('#lire').click(function() {
    var nom = $('#nom').val();

    if (nom.length > 0) {
        if (sessionStorage.getItem(nom)) {
          $('#whiteZone').animate({width :'80%'}, "slow", function () {
            $('#whiteZone').html(nom + " : " + sessionStorage.getItem(nom));
          });
        }
        else {
          alert("Aucune donnée correspondante n'a été trouvée dans le session storage");
        }
    } else {
      alert("Veuillez renseigner le nom de la donnée !");
    }

  });

  $('#effacer').click(function() {
    var nom = $('#nom').val();

    if (nom.length > 0) {
        if (sessionStorage.getItem(nom)) {
          sessionStorage.removeItem(nom);
          alert('La donnée a été supprimée.');
          $('#whiteZone').html("");
          // $('#whiteZone').animate({width :'0%'}, "slow");


        }
        else {
          alert("Aucune donnée correspondante n'a été trouvée dans le session storage");
        }
    } else {
      alert("Veuillez renseigner le nom de la donnée !");
    }

  });

  $('#reinit').click(function() {
    sessionStorage.clear();
    $('#whiteZone').html("");
    alert("Toutes les données du session storage ont été effacées.");
    $('#whiteZone').animate({width :'0%'}, "slow");
  });


});
