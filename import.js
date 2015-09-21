
  function updateMe(var filename){
    var x = 0;
    var activity=jsonstr;
    foreach (i in activity) {
        date = document.getElementById(i.date).innerHTML = activity.date;
        event = document.getElementById(i.event).innerHTML = activity.event;
    }
  }
