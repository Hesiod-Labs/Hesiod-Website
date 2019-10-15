function initApp() {
  console.log('init');
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
  // drawChart();
};



//Chart data
google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawSheetName);

//Spreadsheet
function drawSheetName() {
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ64irmLoTxLYYqlfDtizTK4KilcotAta14TapSWITPhJwy17BqSlPL83maYlPbAgSr37rCSElVXFZk/pubhtml?gid=0&single=true');
  query.send(handleSampleDataQueryResponse);
}

function handleSampleDataQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, { height: 400 });
}
