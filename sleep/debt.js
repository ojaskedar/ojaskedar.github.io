
function calculator() {

  const d1 = Number(document.getElementById('mon').value);
  const d2 = Number(document.getElementById('tue').value);
  const d3 = Number(document.getElementById('wed').value);
  const d4 = Number(document.getElementById('thur').value);
  const d5 = Number(document.getElementById('fri').value);
  const d6 = Number(document.getElementById('sat').value);
  const d7 = Number(document.getElementById('sun').value);

  const userSlept = d1 + d2 + d3 + d4 + d5 + d6 + d7

  const idealSleepHours = 8 * 7;
  if (userSlept < idealSleepHours) {
    document.getElementById("need").style.display = "inline-block";
    document.getElementById("message").innerHTML = "You have only slept " + userSlept + " hours this week. You need " + (idealSleepHours - userSlept) + " hours of sleep this weekend.";
    document.getElementById("message").style.display = "block";
    document.getElementById("myForm").reset();
  } else if (userSlept > idealSleepHours) {
    document.getElementById("message").style.display = "block";
    document.getElementById("over").style.display = "inline-block";
    document.getElementById("message").innerHTML = "You have over slept..";
    document.getElementById("myForm").reset();
  } else if (userSlept == idealSleepHours) {
    document.getElementById("perfect").style.display = "inline-block";
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = "You had a perfect sleep, you have no sleep debt!";
    document.getElementById("myForm").reset();
  } else{
    document.getElementById("fill").style.display = "inline-block";
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = "Please fill the data correctly!";
    document.getElementById("myForm").reset();
  }
}
