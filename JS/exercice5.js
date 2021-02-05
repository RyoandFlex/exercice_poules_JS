var chicken = [];
var salesT = 0;

function addC() {

  document.getElementById('container').style.display = "block";
  document.getElementById('viewer').style.display = "none";

  var race = document.getElementById('race').value;
  var name = document.getElementById('name').value;
  var colorC = document.getElementById('colorC').value;
  var colorE = document.getElementById('colorE').value;
  var eggD = document.getElementById('eggD').value;
  var eggW;
  var eggM;
  var eggY;
  var sales;

  if (race == '') {
    document.getElementById('errorRace').style.display = "inline-block";
  } else {
    document.getElementById('errorRace').style.display = "none";
  }

  if (name == '') {
    document.getElementById('errorName').style.display = "inline-block";
  } else {
    document.getElementById('errorName').style.display = "none";
  }

  if (colorC == '') {
    document.getElementById('errorColorC').style.display = "inline-block";
  } else {
    document.getElementById('errorColorC').style.display = "none";
  }

  if (colorE == '') {
    document.getElementById('errorColorE').style.display = "inline-block";
  } else {
    document.getElementById('errorColorE').style.display = "none";
  }

  if (eggD == '') {
    document.getElementById('errorED').style.display = "inline-block";
  } else {
    document.getElementById('errorED').style.display = "none";
  }

  if ((race != '') && (name != '') && (colorC != '') && (colorE != '') && (eggD != '')) {

    var getC = chicken.find(alias => alias.name === name);
    if (getC) {
      document.getElementById('errorName').style.display = "inline-block";
      document.getElementById('errorName').innerHTML = " *Cette poule est déjà enregistrée";
      document.getElementById('GG').innerHTML = '';
    } else {

      eggW = eggD * 7;
      eggM = Math.ceil((eggD * 7 * 4.33) - ((eggD * 7 * 4.33) * 0.05));
      eggY = eggM * 12;

      if (colorE == 'Beige') {
        sales = eggY;
      }

      if (colorE == 'Bleu') {
        sales = eggY * 1.2;
      }

      if (colorE == 'Vert') {
        sales = eggY * 1.3;
      }

      if (colorE == 'Brun') {
        sales = eggY * 2;
      }

      if (colorE == 'Blanc') {
        sales = eggY * 1.6;
      }

      chicken.push({
        race: race,
        name: name,
        colorC: colorC,
        colorE: colorE,
        eggD: eggD,
        eggW: eggW,
        eggM: eggM,
        eggY: eggY,
        sales: sales.toFixed(2)
      });

      salesT = salesT + sales;
      document.getElementById('GG').style.display = "block";
    }
  }
}


function viewC() {
  document.getElementById('container').style.display = "none";
  document.getElementById('viewer').style.display = "block";

  var text = '';

  chicken.sort((a, b) => b.sales - a.sales);

  for (res of chicken) {
    text += '<tr>';
    text += '<td>' + res.race + '</td>';
    text += '<td>' + res.name + '</td>';
    text += '<td>' + res.colorC + '</td>';
    text += '<td>' + res.colorE + '</td>';
    text += '<td>' + res.eggD + '</td>';
    text += '<td>' + res.eggW + '</td>';
    text += '<td>' + res.eggM + '</td>';
    text += '<td>' + res.eggY + '</td>';
    text += '<td>' + res.sales + '</td>';
    text += '</tr>';
  }


  document.getElementById('newChicken').innerHTML = text;
  document.getElementById('money').innerHTML = "Le C.A. de votre pool : <br><span>" +salesT.toFixed(2)+ "</span> € / an";

}