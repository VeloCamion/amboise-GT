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
var format_PointsnoirsCCVA_1 = new ol.format.GeoJSON();
var features_PointsnoirsCCVA_1 = format_PointsnoirsCCVA_1.readFeatures(json_PointsnoirsCCVA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsnoirsCCVA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsnoirsCCVA_1.addFeatures(features_PointsnoirsCCVA_1);cluster_PointsnoirsCCVA_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PointsnoirsCCVA_1
});
var lyr_PointsnoirsCCVA_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PointsnoirsCCVA_1, 
                style: style_PointsnoirsCCVA_1,
                popuplayertitle: "Points noirs CCVA",
                interactive: true,
                title: '<img src="styles/legend/PointsnoirsCCVA_1.png" /> Points noirs CCVA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PointsnoirsCCVA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PointsnoirsCCVA_1];
lyr_PointsnoirsCCVA_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', 'status': 'status', 'ouvert': 'ouvert', });
lyr_PointsnoirsCCVA_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', 'status': 'ValueMap', 'ouvert': 'DateTime', });
lyr_PointsnoirsCCVA_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'desc': 'inline label - always visible', 'type': 'inline label - always visible', 'status': 'inline label - always visible', 'ouvert': 'inline label - always visible', });
lyr_PointsnoirsCCVA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});