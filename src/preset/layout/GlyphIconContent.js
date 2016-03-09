ymaps.modules.define({
  name: 'preset.layout.GlyphIconContent',
  key: 'geoObject#GlyphIconContent',
  storage: 'layout',
  depends: ['templateLayoutFactory'],
  declaration: function (provide, templateLayoutFactory) {
    var GlyphIconContent = templateLayoutFactory.createClass(
      '<span style="{% if options.glyphSize %}font-size: {{ options.glyphSize }}px;{% endif %}{% if options.glyphColor %}color: {{ options.glyphColor }}{% endif %}" class="glyphicon glyphicon-{{ options.glyph }}"></span>'
    );

    provide(GlyphIconContent);
  }
});
