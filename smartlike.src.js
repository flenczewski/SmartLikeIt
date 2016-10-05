(function(w,d){

    var loadedAllButtons = false;
    var likeButtons = d.querySelectorAll('.fb-like');
    var facebookDomain = 'https://www.facebook.com';
    var config = {
        'buttonWidth': 75,
        'buttonHeight': 20
    };

    function setStyle() {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".fb-like{background:#4267b2 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMA8PwB/iHFXDT14frmdqsbMqj46CkU2e6g+37e/eseQ0l9HQAAAFtJREFUeNqVzUcKwDAMRFG5pffe5/63DI6xsQNZZHb/IRB9L2rDFjnGAGJA+Z2kyITXdQGU5K3Cs7nRwcCoM9APGgCQNDCRBW5gcbAa2F4XXDnYcUjgvMh++bMbX5wJSDyqfBcAAAAASUVORK5CYII=') 3px 2px no-repeat;overflow:hidden;color:#fff;cursor:pointer;-webkit-font-smoothing:antialiased;-webkit-user-select:none;white-space:nowrap;font-family:helvetica,arial,sans-serif;border-radius:3px;font-size:11px;padding:0;height:20px;display:inline-block}.fb-like:after{content:'Lubię to!';font-weight:700;padding:4px 4px 4px 23px;display:block}.fb-like-loaded{background:none}";
        document.body.appendChild(sheet);
    }

    // facebook like url
    function getFacebookLikeUrl(siteUrl) {
        return facebookDomain
            + '/plugins/like.php?href='
            + siteUrl
            +'&layout=button&action=like&size=small&show_faces=false&share=false';
    }

    // facebook share url
    function getFacebookShareUrl(siteUrl) {
        return facebookDomain +'/sharer/sharer.php?u='+ encodeURI(siteUrl);
    }

    // facebook like button
    function getFacebookLikeButton(siteUrl) {
        return '<iframe class="fb-like-iframe" src="'
            + getFacebookLikeUrl(siteUrl)
            + '" width="'+ config.buttonWidth +'" height="'+ config.buttonHeight +'" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
    }

    // facebook preconnect
    function _preconnect(domain) {
        var res = document.createElement("link");
        res.rel = "preconnect";
        res.href = domain;
        document.head.appendChild(res);
    }

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
                window.open(getFacebookShareUrl(node.getAttribute('data-href')), '_blank',
                    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no," +
                    "width="+ 500 +", height="+ 400 +", top="+ (screen.height/2 - 400/2) +", left="+ (screen.width/2 - 500/2));
            });

            // trigger: hover
            if(node.getAttribute('data-trigger').toLowerCase() == 'hover') {
                node.addEventListener('mouseover', function () {
                    loadButton(node);
                });
            }

            // trigger: visible
            if(node.getAttribute('data-trigger').toLowerCase() == 'visible') {
                loadButton(node);
            }


        });
    }

    function init() {
        _preconnect(facebookDomain);
        setStyle();
        makeStaticShareButtons();
    }

    init();

})(window,document);