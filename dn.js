//this for slider based - setting up slider
document.addEventListener("DOMContentLoaded", function () {
  let slider = document.getElementById("myRange");
  let output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };

  //Get time funtion - it passes time to the animation control function gettimeofday
  function updatetime() {
    let now = new Date();
    gettimeofday(now.getHours());
    //reset the slider to the actual time
    slider.value = now.getHours();
    output.innerHTML = now.getHours();
  }

  //Animation control function - you could split these into rise and set funtions but I have'nt done that yet
  function gettimeofday(now) {
    let hour = 12;
    if (hour >= 0 && hour < 5) {
      timeofdaypercent = hour - 0;
      timeofdaypercent = (timeofdaypercent / 4) * 100;
      let moon = document.getElementById("moon");
      let moonheight = timeofdaypercent * 2.5 + 50;
      moon.style.top = moonheight + "px";
      let sun = document.getElementById("sun");
      sun.style.top = "450px";
      document.body.style.backgroundColor = "#002551";
      let world = document.getElementById("world");
      world.style.borderBottom = "5px solid #67a8f1";
      document.getElementsByClassName("simtime")[0].style.color = "#d3d3d3";
    }
    if (hour >= 5 && hour < 12) {
      timeofdaypercent = hour - 5;
      timeofdaypercent = (timeofdaypercent / 7) * 100;
      let sun = document.getElementById("sun");
      let sunheight = 300 - timeofdaypercent * 2.9;
      sun.style.top = sunheight + "px";
      let moon = document.getElementById("moon");
      moon.style.top = "400px";
      document.body.style.backgroundColor = "#f4c042";
      let world = document.getElementById("world");
      world.style.borderBottom = "5px solid #7a6021";
      document.getElementsByClassName("simtime")[0].style.color = "#7a6021";
    }
    if (hour >= 12 && hour < 19) {
      timeofdaypercent = hour - 12;
      timeofdaypercent = (timeofdaypercent / 7) * 100;
      let sun = document.getElementById("sun");
      let sunheight = timeofdaypercent * 2.9 + 50;
      sun.style.top = sunheight + "px";
      let moon = document.getElementById("moon");
      moon.style.top = "400px";
      document.body.style.backgroundColor = "#f4c042";
      let world = document.getElementById("world");
      world.style.borderBottom = "5px solid #7a6021";
      document.getElementsByClassName("simtime")[0].style.color = "#7a6021";
    }
    if (hour >= 19 && hour <= 24) {
      document.body.style.color = "azure";

      timeofdaypercent = hour - 20;
      timeofdaypercent = (timeofdaypercent / 5) * 100;
      let moon = document.getElementById("moon");
      let moonheight = 200 - timeofdaypercent * 2.5 + 50;
      moon.style.top = moonheight + "px";
      let sun = document.getElementById("sun");
      sun.style.top = "450px";
      document.body.style.backgroundColor = "#002551";
      let world = document.getElementById("world");
      world.style.borderBottom = "5px solid #67a8f1";
      document.getElementsByClassName("simtime")[0].style.color = "#d3d3d3";
    }
  }

  //Start the loop going based of real time
  updatetime();
  let timeloop = setInterval(updatetime, 1000);
  updatetime();
  timeloop = setInterval(updatetime, 1000);
  slider.oninput = null;
  document.getElementById("slidecontainer").style.maxHeight = "0px";
});
