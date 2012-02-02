/**
 * XULMzTnChrome namespace.
 */
if ("undefined" == typeof(XULMzTnChrome)) {
  var XULMzTnChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
XULMzTnChrome.BrowserOverlay = {
  /**
   * Open a Dialog window
   */
  tweet : function(aEvent) {
    let stringBundle = document.getElementById("mztnTweet-string-bundle");
    let message = stringBundle.getString("mztnTweet.greeting.label");
    
    

    var tab_title = gBrowser.selectedTab.getAttribute('label');
    var url = gBrowser.currentURI.spec;
    var twitter_req = "https://twitter.com/intent/tweet?original_referer=&source=TweetMozAddon&text="+encodeURI(tab_title)+"&url="+encodeURI(url)+"&via=MozillaTunisia";
    window.alert(twitter_req);
    //window.openDialog(twitter_req); 
    openUILinkIn(twitter_req,"tab");
  }
};
