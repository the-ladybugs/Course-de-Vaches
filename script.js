var credit = 500;
document.getElementById("credits").innerHTML = credit;

function countdown() {
  document.getElementById("counter").style.visibility = "visible";
  var count = document.getElementById("count").innerHTML;
  console.log(count);
  while (count) {
    setTimeout(function() {
      document.getElementById("count").innerHTML = count;
    }, 4000);
    count--;
    document.getElementById("count").innerHTML = count;
    console.log(count);
  }
}

function start() {
  countdown();
  var bet = parseInt(document.getElementById("bet").value);
  var left = credit - parseInt(bet);
  var radios = document.getElementsByName("cow");
  var start_button = document.getElementById("launch");
  var epo_stat = document.querySelector("#epo").checked;
  var epo = 500;
  if (bet > credit) {
    alert("You can't play");
  } else if (epo_stat && epo + bet > credit) {
    alert("remove the epo");
  } else {
    if (bet + credit >= epo) {
      document.getElementById("epo").disabled = true;
    }
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        var selectedCow = radios[i].value;
        break;
      }
    }

    run();

    setTimeout(function() {
      // Something you want delayed.
      if (selectedCow == winner) {
        alert("You have won!, Congratulations!");
        credit = credit + 2 * bet;
      } else {
        alert(
          "You have lost, the " +
            winner +
            " was faster. You have " +
            left +
            " points left"
        );
        credit = credit - bet;
        if (credit == 0) {
          document.getElementById("zeroscore").innerHTML =
            "Gaies meuh au vert, les vaches retournent regarder passer les trains.";
          start_button.disabled = true;
        }
      }
      document.getElementById("credits").innerHTML = credit;
      $("#circle-pimprenelle").animate({ svgCx: 50 }, 5);
      $("#circle-marguerite").animate({ svgCx: 50 }, 5);
      $("#circle-paquerette").animate({ svgCx: 50 }, 5);
      $("#circle-paulette").animate({ svgCx: 50 }, 5);
    }, 4000);
  }
}

function speed() {
  return Math.random() * 2000 + 2500;
}

function run() {
  var speeds = {
    red: speed(),
    blue: speed(),
    yellow: speed(),
    green: speed()
  };
  $("#circle-pimprenelle").animate({ svgCx: 710 }, speeds.red);
  $("#circle-marguerite").animate({ svgCx: 710 }, speeds.blue);
  $("#circle-paquerette").animate({ svgCx: 710 }, speeds.yellow);
  $("#circle-paulette").animate({ svgCx: 710 }, speeds.green);

  winner = Object.keys(speeds).reduce(function(a, b) {
    return speeds[a] < speeds[b] ? a : b;
  });
  return winner;
}
