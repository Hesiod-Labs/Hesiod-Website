function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('body').display = true;
      document.getElementById('adminTag').display = false;
      // User is signed in.
      if (user.email == 'danysoares27@gmail.com') {
        godMode = true;
        // document.getElementById('adminTag').display = true;
        // alert('You are in god mode.');
      } else {
        alert('Welcome ' + user.email);
        // document.getElementById('adminTag').display = false;
      }
    } else {
      // User is signed out.
      document.getElementById('body').display = false;
      window.location.pathname = '../index.html';
    }
  });
}

window.onload = function() {
  initApp();
};


google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1veKg0NhIg5f2dkpvIkGTKl_3VwqKpZfXa3TCDrLFlNk/edit#gid=0/gviz/tq?tq=select%20*%20');
  query.send(handleSampleDataQueryResponse);

  function handleSampleDataQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    var data = response.getDataTable();
    // Instantiate and draw the chart.
    var options = {title:'Portfolio Value', 
                    animation:{
                      duration: 1000,
                      startup: true,
                      easing: 'out',
                    },
                    height: 600};
    var chart = new google.visualization.LineChart(document.getElementById('entireFundChart'));
    chart.draw(data, options);
  }

}