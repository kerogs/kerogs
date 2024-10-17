# JS WATERMARK
you can use it for your own projects if you wish.

## HTML
```html
<div id="watermark-ksjs"></div>
```

## JS
```js
<script src="https://kerogs.github.io/kerogs/watermark/watermark.js"></script>
<script>
    KerogsWatermark.init("#watermark-ksjs", {
        collaborator: true,
        collab: [
            {
                name: "ici japon corp",
                img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7a/Ici_Japon_Corp._Esportlogo_square.png",
                url: "https://x.com/icijaponcorp"
            }
        ]
    });
</script>
```