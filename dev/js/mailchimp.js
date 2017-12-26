<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>

<script type="text/javascript">

	// Wait for the page to load first
	window.onload = function() {

	  //Get a reference to the link on the page
	  // with an id of "mylink"
	  var a = document.getElementById("begineer-popup");

	  //Set code to run when the link is clicked
	  // by assigning a function to "onclick"
	  a.onclick = function() {

		  alert("hello");
		  require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us17.list-manage.com","uuid":"8136e0b48a3c717acea9a1ee3","lid":"b249200b99"}) })
		  document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
		  document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
		return false;
	  }
	}
</script>