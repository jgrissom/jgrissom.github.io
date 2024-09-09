document.addEventListener("DOMContentLoaded", function() {
  // randomize attention seeker
  const seekers = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];
  const seeker = seekers[Math.floor(Math.random() * seekers.length)];
  document.getElementById('greeting').classList.add("animate__animated", "animate__" + seeker);
  
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault()
    const x = [...document.querySelectorAll('.form-check-input')].filter(c => c.checked).length;
    x === 0 && bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
  document.getElementById('checkbox-card').addEventListener('mouseover', function(e){
    if (e.target.classList.contains('form-check-label')) {
      document.getElementById('greeting').style.color = e.target.dataset['color'];
    }
  });
  document.getElementById('checkbox-card').addEventListener('mouseout', function(e){
    if (e.target.classList.contains('form-check-label')) {
      document.getElementById('greeting').style.color = 'slategray';
    }
  });

  document.getElementById('check-all').addEventListener('click', function(e) {
    document.querySelectorAll('.form-check-input').forEach(c => {
      c.checked = true
      const elem = document.getElementById(c.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      elem.classList.add("animate__animated", "animate__bounceInDown");
    });
  })
  document.getElementById('uncheck-all').addEventListener('click', function(e) {
    document.querySelectorAll('.form-check-input').forEach(c => {
      c.checked = false
      const elem = document.getElementById(c.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      elem.classList.add("animate__animated", "animate__bounceOutUp");
    });
  })
});
