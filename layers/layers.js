var wms_layers = [];


        var lyr_aaa_0 = new ol.layer.Tile({
            'title': 'aaa',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.502000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_POIlayer_2 = new ol.format.GeoJSON();
var features_POIlayer_2 = format_POIlayer_2.readFeatures(json_POIlayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIlayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIlayer_2.addFeatures(features_POIlayer_2);
var lyr_POIlayer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POIlayer_2, 
                style: style_POIlayer_2,
                interactive: true,
                title: '<img src="styles/legend/POIlayer_2.png" /> POI layer'
            });

lyr_aaa_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_POIlayer_2.setVisible(true);
var layersList = [lyr_aaa_0,lyr_OpenStreetMap_1,lyr_POIlayer_2];
lyr_POIlayer_2.set('fieldAliases', {'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_POIlayer_2.set('fieldImages', {'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_POIlayer_2.set('fieldLabels', {'id': 'no label', 'origin_id': 'no label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_POIlayer_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});