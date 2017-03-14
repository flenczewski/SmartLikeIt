# SmartLikeIt
Smart Facebook "Like" button

Demo: 
http://fabian.art.pl/smartlike/example/

# Sample usage

HTML is like normal Facebook Like Button: https://developers.facebook.com/docs/plugins/like-button 

```html
<div class="fb-like" data-href="https://www.facebook.com/fanpage" data-trigger="hover" data-layout="button" data-send="false" data-show-faces="false"></div>
```

and next load SmartLikeIt library:
```javascript
<script>
    function atOnload(){var smartlike = document.createElement("script");smartlike.src = "../smartlike.min.js";smartlike.async=1;document.body.appendChild(smartlike);}
    window.addEventListener?window.addEventListener("load",atOnload,!1):window.attachEvent?window.attachEvent("onload",atOnload):window.onload=atOnload;
</script>
```

Additional "smart" params:

* data-trigger="hover" - load facebook like button on hover 
* data-trigger="visible" - default load

Benchmark

![alt tag](http://fabian.art.pl/smartlike/example/smartlike-bench.png)
