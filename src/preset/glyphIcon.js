/**
 * @fileOverview
 *
 */
ymaps.modules.define('preset.glyphIcon', [
    'option.presetStorage',
    'preset.layout.GlyphIconContent',
    'theme.islands.geoObject.preset.blankIcon.standard'
], function (provide, presets) {

    presets.add('preset#glyphIcon', {
        preset: 'islands#icon',
        iconContentLayout: 'geoObject#GlyphIconContent'
    });

    provide(true);
});
