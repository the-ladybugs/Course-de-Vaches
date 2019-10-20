function speed() {
  return Math.random() * 2000 + 2500;
}

function start() {
  var credit = 500;
  var bet = document.getElementById("bet").value;
  var left = credit - parseInt(bet);
  var radios = document.getElementsByName("cow");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      var selectedCow = radios[i].value;

      // only one radio can be logically checked, don't check the rest
      break;
    }
  }

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
  console.log(winner);

  setTimeout(function() {
    // Something you want delayed.
    if (selectedCow == winner) {
      alert("You have won!, Congratulations!");
    } else {
      alert(
        "You have lost, the " +
          winner +
          " was faster. You have " +
          left +
          " points left"
      );
    }
  }, 4000); // How long do you want the delay to be (in milliseconds)?
}
