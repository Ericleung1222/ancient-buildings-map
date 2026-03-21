var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test4_1 = new ol.format.GeoJSON();
var features_test4_1 = format_test4_1.readFeatures(json_test4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test4_1.addFeatures(features_test4_1);
var lyr_test4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test4_1, 
                style: style_test4_1,
                popuplayertitle: 'test4',
                interactive: true,
                title: '<img src="styles/legend/test4_1.png" /> test4'
            });

lyr_google_0.setVisible(true);lyr_test4_1.setVisible(true);
var layersList = [lyr_google_0,lyr_test4_1];
lyr_test4_1.set('fieldAliases', {'地區': '地區', '國家': '國家', '名稱': '名稱', '材料': '材料', '功能': '功能', '類型': '類型', '風格': '風格', '外形': '外形', '檐': '檐', '頂': '頂', '面寬': '面寬', '面寬數': '面寬數', '結構2': '結構2', '斗拱': '斗拱', '宗教': '宗教', '等級': '等級', '公元': '公元', '年份': '年份', '政權': '政權', '時代': '時代', '地址': '地址', '經度': '經度', '緯度': '緯度', });
lyr_test4_1.set('fieldImages', {'地區': 'TextEdit', '國家': 'TextEdit', '名稱': 'TextEdit', '材料': 'TextEdit', '功能': 'TextEdit', '類型': 'TextEdit', '風格': 'TextEdit', '外形': 'TextEdit', '檐': 'Range', '頂': 'TextEdit', '面寬': 'TextEdit', '面寬數': 'TextEdit', '結構2': 'TextEdit', '斗拱': 'TextEdit', '宗教': 'TextEdit', '等級': 'TextEdit', '公元': 'TextEdit', '年份': 'TextEdit', '政權': 'TextEdit', '時代': 'TextEdit', '地址': 'TextEdit', '經度': 'TextEdit', '緯度': 'TextEdit', });
lyr_test4_1.set('fieldLabels', {'地區': 'no label', '國家': 'no label', '名稱': 'no label', '材料': 'no label', '功能': 'no label', '類型': 'no label', '風格': 'no label', '外形': 'no label', '檐': 'no label', '頂': 'no label', '面寬': 'no label', '面寬數': 'no label', '結構2': 'no label', '斗拱': 'no label', '宗教': 'no label', '等級': 'no label', '公元': 'no label', '年份': 'no label', '政權': 'no label', '時代': 'no label', '地址': 'no label', '經度': 'no label', '緯度': 'no label', });
lyr_test4_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});