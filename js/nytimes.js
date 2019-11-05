var selectedSource = "";

$( document ).ready(function() {
    loadNewsData();
});



function loadNewsData(){
  $.ajax({
    type:"GET",
    url:"https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=apikey",
    dataType:"json",
    success: parseNewsData
});


}

function parseNewsData(data){
  console.log(data);

  var sources = [];
  var tempPath = data["results"];
  var html = "";

  for (var i = 0, len = tempPath.length; i < 10; ++i) {
        //console.log(i);
         //sets data to arrays
         //sources.push(tempPath[i]["name"]);
        sources.push(tempPath[i]);

        html += '<li><a href="' + sources[i]["url"] + '" target="_blank">' + sources[i]["title"] + '</a><br>' + sources[i]["abstract"] + '</br></li></br>';


          // html += '<li class="nav-item"><a class="nav-link" href="#" onclick="loadArticles(\''  + sources[i]["id"] + '\')">' + sources[i]["name"] + '</a></li>'
          //html += '<li class="nav-item"><a class="nav-link" href="#" onclick="loadArticles('  + String(sources[i]["id"]) + ')">' + sources[i]["name"] + '</a></li>'

  }
  $("#news-container").html(html);

}
