(function(w,d){

    var loadedAllButtons = false;
    var likeButtons = d.querySelectorAll('.fb-like');
    var facebookDomain = 'https://www.facebook.com';

    // facebook like url
    function getFacebookLikeUrl(siteUrl) {
        return facebookDomain
            + '/plugins/like.php?href='
            + siteUrl
            +'&layout=button_count&action=like&size=small&show_faces=false&share=false';
    }

    function getFacebookShareUrl(siteUrl) {
        return facebookDomain +'/sharer/sharer.php?u='+ encodeURI(siteUrl);
    }

    // facebook like button
    function getFacebookLikeButton(siteUrl) {
        return '<iframe class="fb-like-iframe" src="'
            + getFacebookLikeUrl(siteUrl)
            + '" width="113" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
    }

    // facebook preconnect
    function _preconnect(domain) {
        var res = document.createElement("link");
        res.rel = "preconnect";
        res.href = domain;
        document.head.appendChild(res);
    }
    _preconnect(facebookDomain);

    // change button status
    function setLoaded(node) {
        node.removeEventListener('click',  function(){});
        node.removeEventListener('mouseover', function(){});
        //node.firstChild.style.opacity=1;
        setTimeout(function(){
            node.className += " fb-like-loaded";
            //  node.style.opacity=1;
        }, 200);
        node.setAttribute('data-loaded', 'true');
    }

    function loadButton(node) {
        if(!node.getAttribute('data-loaded'))  {
            //node.style.opacity=0;
            node.innerHTML = getFacebookLikeButton(node.getAttribute('data-href'));
            setLoaded(node);
        }
    }

    // static "share button"
    function makeStaticShareButtons() {
        var nodes = Array.prototype.slice.call(likeButtons, 0);
        nodes.forEach(function(node) {
            node.addEventListener('click', function(){
                window.open(getFacebookShareUrl(node.getAttribute('data-href')), '_blank', "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=" + 500 + ", height=" + 400 + ", top=" + (screen.height / 2 - 400 / 2) + ", left=" + (screen.width / 2 - 500 / 2));
            });
            node.addEventListener('mouseover', function(){loadButton(node);});
        });
    }

    function loadFacebookLikeButtons() {

        if(!loadedAllButtons) {
            var nodes = Array.prototype.slice.call(likeButtons,0);
            nodes.forEach(function(node){
                loadButton(node);
            });

            loadedAllButtons = true;
        }
    }

    function init() {
        makeStaticShareButtons();
    }

    init();

    // if (window.addEventListener) {
    //    window.addEventListener("load", loadFacebookLikeButtons, false);
    // } else if (window.attachEvent) {
    //    window.attachEvent("onload", loadFacebookLikeButtons);
    // } else { window.onload = loadFacebookLikeButtons; }

})(window,document);