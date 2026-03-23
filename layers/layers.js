var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JPlv1_1 = new ol.format.GeoJSON();
var features_JPlv1_1 = format_JPlv1_1.readFeatures(json_JPlv1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JPlv1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JPlv1_1.addFeatures(features_JPlv1_1);
var lyr_JPlv1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JPlv1_1, 
                style: style_JPlv1_1,
                popuplayertitle: 'JP-lv1',
                interactive: false,
                title: '<img src="styles/legend/JPlv1_1.png" /> JP-lv1'
            });
var format_CNlv2_2 = new ol.format.GeoJSON();
var features_CNlv2_2 = format_CNlv2_2.readFeatures(json_CNlv2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNlv2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNlv2_2.addFeatures(features_CNlv2_2);
var lyr_CNlv2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNlv2_2, 
                style: style_CNlv2_2,
                popuplayertitle: 'CN-lv2',
                interactive: false,
                title: '<img src="styles/legend/CNlv2_2.png" /> CN-lv2'
            });
var format_CNlv1_3 = new ol.format.GeoJSON();
var features_CNlv1_3 = format_CNlv1_3.readFeatures(json_CNlv1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNlv1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNlv1_3.addFeatures(features_CNlv1_3);
var lyr_CNlv1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNlv1_3, 
                style: style_CNlv1_3,
                popuplayertitle: 'CN-lv1',
                interactive: false,
                title: '<img src="styles/legend/CNlv1_3.png" /> CN-lv1'
            });
var format_test42_4 = new ol.format.GeoJSON();
var features_test42_4 = format_test42_4.readFeatures(json_test42_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test42_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test42_4.addFeatures(features_test42_4);
var lyr_test42_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test42_4, 
                style: style_test42_4,
                popuplayertitle: 'test4.2',
                interactive: true,
    title: 'test4.2<br />\
    <img src="styles/legend/test42_4_0.png" /> 7.5<br />\
    <img src="styles/legend/test42_4_1.png" /> 8 <br />\
    <img src="styles/legend/test42_4_2.png" /> 8.5<br />\
    <img src="styles/legend/test42_4_3.png" /> 9<br />\
    <img src="styles/legend/test42_4_4.png" /> 9.5<br />\
    <img src="styles/legend/test42_4_5.png" /> 10<br />\
    <img src="styles/legend/test42_4_6.png" /> 10.5 <br />\
    <img src="styles/legend/test42_4_7.png" /> 11<br />\
    <img src="styles/legend/test42_4_8.png" /> 11.5<br />\
    <img src="styles/legend/test42_4_9.png" /> 12 <br />\
    <img src="styles/legend/test42_4_10.png" /> 12.5<br />\
    <img src="styles/legend/test42_4_11.png" /> 13<br />\
    <img src="styles/legend/test42_4_12.png" /> 13.5<br />\
    <img src="styles/legend/test42_4_13.png" /> 14 <br />\
    <img src="styles/legend/test42_4_14.png" /> 14.5<br />\
    <img src="styles/legend/test42_4_15.png" /> 15 <br />\
    <img src="styles/legend/test42_4_16.png" /> 15.5<br />\
    <img src="styles/legend/test42_4_17.png" /> 16 <br />\
    <img src="styles/legend/test42_4_18.png" /> 16.5<br />\
    <img src="styles/legend/test42_4_19.png" /> 17<br />\
    <img src="styles/legend/test42_4_20.png" /> 17.5 <br />\
    <img src="styles/legend/test42_4_21.png" /> 18 <br />\
    <img src="styles/legend/test42_4_22.png" /> 18.5<br />\
    <img src="styles/legend/test42_4_23.png" /> 19 <br />\
    <img src="styles/legend/test42_4_24.png" /> 19.5<br />\
    <img src="styles/legend/test42_4_25.png" /> <br />' });

lyr_google_0.setVisible(true);lyr_JPlv1_1.setVisible(true);lyr_CNlv2_2.setVisible(true);lyr_CNlv1_3.setVisible(true);lyr_test42_4.setVisible(true);
var layersList = [lyr_google_0,lyr_JPlv1_1,lyr_CNlv2_2,lyr_CNlv1_3,lyr_test42_4];
lyr_JPlv1_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_CNlv2_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_CNlv1_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_test42_4.set('fieldAliases', {'地區': '地區', '國家': '國家', '名稱': '名稱', '材料': '材料', '功能': '功能', '類型': '類型', '風格': '風格', '外形': '外形', '檐': '檐', '頂': '頂', '面寬': '面寬', '面寬數': '面寬數', '結構2': '結構2', '斗拱': '斗拱', '宗教': '宗教', '等級': '等級', '公元': '公元', '年份': '年份', '政權': '政權', '時代': '時代', '地址': '地址', '經度': '經度', '緯度': '緯度', });
lyr_JPlv1_1.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_CNlv2_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_CNlv1_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_test42_4.set('fieldImages', {'地區': 'TextEdit', '國家': 'TextEdit', '名稱': 'TextEdit', '材料': 'TextEdit', '功能': 'TextEdit', '類型': 'TextEdit', '風格': 'TextEdit', '外形': 'TextEdit', '檐': 'Range', '頂': 'TextEdit', '面寬': 'TextEdit', '面寬數': 'TextEdit', '結構2': 'TextEdit', '斗拱': 'TextEdit', '宗教': 'TextEdit', '等級': 'TextEdit', '公元': 'TextEdit', '年份': 'TextEdit', '政權': 'TextEdit', '時代': 'TextEdit', '地址': 'TextEdit', '經度': 'TextEdit', '緯度': 'TextEdit', });
lyr_JPlv1_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_CNlv2_2.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_CNlv1_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_test42_4.set('fieldLabels', {'地區': 'no label', '國家': 'no label', '名稱': 'no label', '材料': 'no label', '功能': 'no label', '類型': 'no label', '風格': 'no label', '外形': 'no label', '檐': 'no label', '頂': 'no label', '面寬': 'no label', '面寬數': 'no label', '結構2': 'no label', '斗拱': 'no label', '宗教': 'no label', '等級': 'no label', '公元': 'no label', '年份': 'no label', '政權': 'no label', '時代': 'no label', '地址': 'no label', '經度': 'no label', '緯度': 'no label', });
lyr_test42_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});