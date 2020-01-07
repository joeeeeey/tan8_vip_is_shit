// this is the code which will be injected into a given page...

(function() {
  // <body> => <div class="bg_top_owner"> => <div class="column_wrapper">
  // 获取外层 div
  var wrapper = document.getElementsByClassName("column_wrapper")[0];
  if (wrapper) {
    // extract flash id from url => "/yuepu-xxxx.html"
    if (window.location.pathname.includes("yuepu")) {
      // 钢琴谱
      var flashId = window.location.pathname.split("-")[1].split(".")[0];
      flashHtmlStr = `
        <div id="flash_container123" class="" style="width:711px;height:848px;padding:0px;border:0px;overflow:hidden;zoom:1;">
          <object type="application/x-shockwave-flash" data="https://www.tan8.com/newFlash/player.swf?id=${flashId}" width="100%"
            height="100%" id="divflash" style="visibility: visible;">
            <param name="wmode" value="Opaque">
            <param name="allowNetworking" value="all">
            <param name="allowFullScreen" value="true"></object>
        </div>
        `;

      wrapper.innerHTML = flashHtmlStr;
    }
    // TODO 吉他谱
  }
})();
