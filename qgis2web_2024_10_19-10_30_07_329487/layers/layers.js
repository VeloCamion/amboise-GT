var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pointsnoirs_1 = new ol.format.GeoJSON();
var features_pointsnoirs_1 = format_pointsnoirs_1.readFeatures(json_pointsnoirs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointsnoirs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsnoirs_1.addFeatures(features_pointsnoirs_1);
var lyr_pointsnoirs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointsnoirs_1, 
                style: style_pointsnoirs_1,
                popuplayertitle: "points-noirs",
                interactive: true,
                title: '<img src="styles/legend/pointsnoirs_1.png" /> points-noirs'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_pointsnoirs_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pointsnoirs_1];
lyr_pointsnoirs_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', });
lyr_pointsnoirs_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', });
lyr_pointsnoirs_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', 'desc': 'no label', 'type': 'hidden field', });
lyr_pointsnoirs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});