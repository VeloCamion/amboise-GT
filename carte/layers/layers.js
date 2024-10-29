var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Divers_1 = new ol.format.GeoJSON();
var features_Divers_1 = format_Divers_1.readFeatures(json_Divers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divers_1.addFeatures(features_Divers_1);
var lyr_Divers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Divers_1, 
                style: style_Divers_1,
                popuplayertitle: "Divers",
                interactive: true,
                title: 'Divers'
            });
var format_Nonrglementaire_2 = new ol.format.GeoJSON();
var features_Nonrglementaire_2 = format_Nonrglementaire_2.readFeatures(json_Nonrglementaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nonrglementaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nonrglementaire_2.addFeatures(features_Nonrglementaire_2);
var lyr_Nonrglementaire_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nonrglementaire_2, 
                style: style_Nonrglementaire_2,
                popuplayertitle: "Non réglementaire",
                interactive: true,
                title: 'Non réglementaire'
            });
var format_Amliorations_3 = new ol.format.GeoJSON();
var features_Amliorations_3 = format_Amliorations_3.readFeatures(json_Amliorations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amliorations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amliorations_3.addFeatures(features_Amliorations_3);
var lyr_Amliorations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amliorations_3, 
                style: style_Amliorations_3,
                popuplayertitle: "Améliorations",
                interactive: true,
                title: 'Améliorations'
            });
var format_Discontinuitcyclable_4 = new ol.format.GeoJSON();
var features_Discontinuitcyclable_4 = format_Discontinuitcyclable_4.readFeatures(json_Discontinuitcyclable_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Discontinuitcyclable_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Discontinuitcyclable_4.addFeatures(features_Discontinuitcyclable_4);
var lyr_Discontinuitcyclable_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Discontinuitcyclable_4, 
                style: style_Discontinuitcyclable_4,
                popuplayertitle: "Discontinuité cyclable",
                interactive: true,
                title: 'Discontinuité cyclable'
            });
var format_Dangers_5 = new ol.format.GeoJSON();
var features_Dangers_5 = format_Dangers_5.readFeatures(json_Dangers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dangers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dangers_5.addFeatures(features_Dangers_5);
var lyr_Dangers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dangers_5, 
                style: style_Dangers_5,
                popuplayertitle: "Dangers",
                interactive: true,
                title: 'Dangers'
            });
var format_presqueaccidents_6 = new ol.format.GeoJSON();
var features_presqueaccidents_6 = format_presqueaccidents_6.readFeatures(json_presqueaccidents_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_presqueaccidents_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_presqueaccidents_6.addFeatures(features_presqueaccidents_6);cluster_presqueaccidents_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_presqueaccidents_6
});
var lyr_presqueaccidents_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_presqueaccidents_6, 
                style: style_presqueaccidents_6,
                popuplayertitle: "(presque)accidents",
                interactive: true,
                title: '<img src="styles/legend/presqueaccidents_6.png" /> (presque)accidents'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Divers_1.setVisible(true);lyr_Nonrglementaire_2.setVisible(true);lyr_Amliorations_3.setVisible(true);lyr_Discontinuitcyclable_4.setVisible(true);lyr_Dangers_5.setVisible(true);lyr_presqueaccidents_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Divers_1,lyr_Nonrglementaire_2,lyr_Amliorations_3,lyr_Discontinuitcyclable_4,lyr_Dangers_5,lyr_presqueaccidents_6];
lyr_Divers_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', 'status': 'status', 'ouvert': 'ouvert', });
lyr_Nonrglementaire_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', 'status': 'status', 'ouvert': 'ouvert', });
lyr_Amliorations_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', 'status': 'status', 'ouvert': 'ouvert', });
lyr_Discontinuitcyclable_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', 'status': 'status', 'ouvert': 'ouvert', });
lyr_Dangers_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'desc': 'desc', 'type': 'type', 'status': 'status', 'ouvert': 'ouvert', });
lyr_presqueaccidents_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'date': 'date', 'desc': 'desc', });
lyr_Divers_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', 'status': 'ValueMap', 'ouvert': 'DateTime', });
lyr_Nonrglementaire_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', 'status': 'ValueMap', 'ouvert': 'DateTime', });
lyr_Amliorations_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', 'status': 'ValueMap', 'ouvert': 'DateTime', });
lyr_Discontinuitcyclable_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', 'status': 'ValueMap', 'ouvert': 'DateTime', });
lyr_Dangers_5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'type': 'TextEdit', 'status': 'ValueMap', 'ouvert': 'DateTime', });
lyr_presqueaccidents_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'date': 'DateTime', 'desc': 'TextEdit', });
lyr_Divers_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'desc': 'inline label - always visible', 'type': 'inline label - always visible', 'status': 'inline label - always visible', 'ouvert': 'inline label - always visible', });
lyr_Nonrglementaire_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'desc': 'inline label - always visible', 'type': 'inline label - always visible', 'status': 'inline label - always visible', 'ouvert': 'inline label - always visible', });
lyr_Amliorations_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'desc': 'inline label - always visible', 'type': 'inline label - always visible', 'status': 'inline label - always visible', 'ouvert': 'inline label - always visible', });
lyr_Discontinuitcyclable_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'desc': 'inline label - always visible', 'type': 'inline label - always visible', 'status': 'inline label - always visible', 'ouvert': 'inline label - always visible', });
lyr_Dangers_5.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'desc': 'inline label - always visible', 'type': 'inline label - always visible', 'status': 'inline label - always visible', 'ouvert': 'inline label - always visible', });
lyr_presqueaccidents_6.set('fieldLabels', {'fid': 'no label', 'name': 'inline label - always visible', 'date': 'inline label - always visible', 'desc': 'inline label - always visible', });
lyr_presqueaccidents_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});