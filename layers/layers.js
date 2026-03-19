var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test2_1 = new ol.format.GeoJSON();
var features_test2_1 = format_test2_1.readFeatures(json_test2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test2_1.addFeatures(features_test2_1);
var lyr_test2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test2_1, 
                style: style_test2_1,
                popuplayertitle: 'test2',
                interactive: true,
                title: '<img src="styles/legend/test2_1.png" /> test2'
            });

lyr_google_0.setVisible(true);lyr_test2_1.setVisible(true);
var layersList = [lyr_google_0,lyr_test2_1];
lyr_test2_1.set('fieldAliases', {'地區': '地區', '國家': '國家', '名稱': '名稱', '功能': '功能', '類型': '類型', '外形': '外形', '面寬': '面寬', '斗拱': '斗拱', '宗教': '宗教', '等級': '等級', '公元': '公元', '年份': '年份', '政權': '政權', '時代': '時代', '地址': '地址', '經度': '經度', '緯度': '緯度', });
lyr_test2_1.set('fieldImages', {'地區': '', '國家': '', '名稱': '', '功能': '', '類型': '', '外形': '', '面寬': '', '斗拱': '', '宗教': '', '等級': '', '公元': '', '年份': '', '政權': '', '時代': '', '地址': '', '經度': '', '緯度': '', });
lyr_test2_1.set('fieldLabels', {'地區': 'no label', '國家': 'no label', '名稱': 'no label', '功能': 'no label', '類型': 'no label', '外形': 'no label', '面寬': 'no label', '斗拱': 'no label', '宗教': 'no label', '等級': 'no label', '公元': 'no label', '年份': 'no label', '政權': 'no label', '時代': 'no label', '地址': 'no label', '經度': 'no label', '緯度': 'no label', });
lyr_test2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});