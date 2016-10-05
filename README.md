# SmartLikeIt
Smart Facebook "Like" button

Demo: 
http://fabian.art.pl/smartlike/example/

# Sample usage

HTML like normal Facebook Like Button: https://developers.facebook.com/docs/plugins/like-button 

```html
<div class="fb-like" data-href="https://www.facebook.com/fanpage" data-trigger="hover" data-layout="button" data-send="false" data-show-faces="false"></div>
```

and load SmartLikeIt library:
```javascript
<script>
    function atOnload(){var smartlike = document.createElement("script");smartlike.src = "../smartlike.src.min.js";smartlike.async=1;document.body.appendChild(smartlike);}
    window.addEventListener?window.addEventListener("load",atOnload,!1):window.attachEvent?window.attachEvent("onload",atOnload):window.onload=atOnload;
</script>
```

additional "smart" params:

* data-trigger="hover" - load facebook like button on hover 
* data-trigger="visible" - default load