function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("API Key");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.search.list({
    "part": "snippet",
    "q": "New York Times"
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              parseVideos(response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "ID"});
});


function parseVideos(response) {
  var tempPath = response.result;
  var html = "";

  for (var i = 0, len = tempPath.items.length; i < len; ++i) {
    console.log(tempPath.items[i].id.videoId);
    html += "</br><h5>" + tempPath.items[i].snippet.title + "</h5>";
    html += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + tempPath.items[i].id.videoId + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></br>';
}
document.getElementById("videos-container").innerHTML = html;

}
