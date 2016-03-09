# Yandex Maps API glyphIcon preset
Support for bootstrap glyph icons in YMaps GeoObject

Loading
-------

1. Put module source code (`glyphIcon-preset.min.js`) on your CDN.

2. Load both [Yandex Maps JS API 2.1](https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/general-docpage/) and module source code by adding following code
```html
<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
<script src="glyphIcon-preset.min.js"></script>
```

3. Get access to module functions by using [ymaps.modules.require](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/modules.require-docpage/) method
```js
ymaps.modules.require(['preset.glyphIcon'], function () {

    var placemark = new ym.Placemark(
        map.getCenter(),
        null,
        {
            preset: 'preset#glyphIcon',
            iconGlyph: 'play'
        });

    map.geoObjects.add(placemark);
});
```

Params
----

| Parameter | Default value | Decription |
|---------|-----------------------|----------|
| `iconGlyph` | - | glyph name, see [BOOTSTRAP GLYPHICONS](http://glyphicons.bootstrapcheatsheets.com/)) |
| `iconGlyphColor` | inherited | color, supports HEX, RGB notation |
| `iconGlyphSize` | inherited | size number |

Demo
----

http://effrenus.github.io/glyphicon-preset/

Building
--------
Use [ymb](https://www.npmjs.com/package/ymb) if re-build is needed.
