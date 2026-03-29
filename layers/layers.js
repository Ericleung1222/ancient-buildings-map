var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JPLv1_1 = new ol.format.GeoJSON();
var features_JPLv1_1 = format_JPLv1_1.readFeatures(json_JPLv1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JPLv1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JPLv1_1.addFeatures(features_JPLv1_1);
var lyr_JPLv1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JPLv1_1, 
                style: style_JPLv1_1,
                popuplayertitle: 'JP Lv.1',
                interactive: false,
                title: '<img src="styles/legend/JPLv1_1.png" /> JP Lv.1'
            });
var format_CNLv2_2 = new ol.format.GeoJSON();
var features_CNLv2_2 = format_CNLv2_2.readFeatures(json_CNLv2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNLv2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNLv2_2.addFeatures(features_CNLv2_2);
var lyr_CNLv2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNLv2_2, 
                style: style_CNLv2_2,
                popuplayertitle: 'CN Lv.2',
                interactive: false,
                title: '<img src="styles/legend/CNLv2_2.png" /> CN Lv.2'
            });
var format_CNLv1_3 = new ol.format.GeoJSON();
var features_CNLv1_3 = format_CNLv1_3.readFeatures(json_CNLv1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNLv1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNLv1_3.addFeatures(features_CNLv1_3);
var lyr_CNLv1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNLv1_3, 
                style: style_CNLv1_3,
                popuplayertitle: 'CN Lv.1',
                interactive: false,
                title: '<img src="styles/legend/CNLv1_3.png" /> CN Lv.1'
            });
var format_test43_4 = new ol.format.GeoJSON();
var features_test43_4 = format_test43_4.readFeatures(json_test43_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test43_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test43_4.addFeatures(features_test43_4);
var lyr_test43_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test43_4, 
                style: style_test43_4,
                popuplayertitle: 'test4.3',
                interactive: true,
    title: 'test4.3<br />\
    <img src="styles/legend/test43_4_0.png" /> 7.5<br />\
    <img src="styles/legend/test43_4_1.png" /> 8 <br />\
    <img src="styles/legend/test43_4_2.png" /> 8.5<br />\
    <img src="styles/legend/test43_4_3.png" /> 9<br />\
    <img src="styles/legend/test43_4_4.png" /> 9.5<br />\
    <img src="styles/legend/test43_4_5.png" /> 10<br />\
    <img src="styles/legend/test43_4_6.png" /> 10.5 <br />\
    <img src="styles/legend/test43_4_7.png" /> 11<br />\
    <img src="styles/legend/test43_4_8.png" /> 11.5<br />\
    <img src="styles/legend/test43_4_9.png" /> 12 <br />\
    <img src="styles/legend/test43_4_10.png" /> 12.5<br />\
    <img src="styles/legend/test43_4_11.png" /> 13<br />\
    <img src="styles/legend/test43_4_12.png" /> 13.5<br />\
    <img src="styles/legend/test43_4_13.png" /> 14 <br />\
    <img src="styles/legend/test43_4_14.png" /> 14.5<br />\
    <img src="styles/legend/test43_4_15.png" /> 15 <br />\
    <img src="styles/legend/test43_4_16.png" /> 15.5<br />\
    <img src="styles/legend/test43_4_17.png" /> 16 <br />\
    <img src="styles/legend/test43_4_18.png" /> 16.5<br />\
    <img src="styles/legend/test43_4_19.png" /> 17<br />\
    <img src="styles/legend/test43_4_20.png" /> 17.5 <br />\
    <img src="styles/legend/test43_4_21.png" /> 18 <br />\
    <img src="styles/legend/test43_4_22.png" /> 18.5<br />\
    <img src="styles/legend/test43_4_23.png" /> 19 <br />\
    <img src="styles/legend/test43_4_24.png" /> 19.5<br />\
    <img src="styles/legend/test43_4_25.png" /> <br />' });

lyr_google_0.setVisible(true);lyr_JPLv1_1.setVisible(true);lyr_CNLv2_2.setVisible(true);lyr_CNLv1_3.setVisible(true);lyr_test43_4.setVisible(true);
var layersList = [lyr_google_0,lyr_JPLv1_1,lyr_CNLv2_2,lyr_CNLv1_3,lyr_test43_4];
lyr_JPLv1_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_CNLv2_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_CNLv1_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_test43_4.set('fieldAliases', {'地區': '地區', '國家': '國家', '名稱': '名稱', '材料': '材料', '功能': '功能', '類型': '類型', '風格': '風格', '外形': '外形', '檐': '檐', '頂': '頂', '面寬': '面寬', '面寬數': '面寬數', '結構2': '結構2', '斗拱': '斗拱', '宗教': '宗教', '等級': '等級', '公元': '公元', '年份': '年份', '政權': '政權', '時代': '時代', '地址': '地址', '注(現存)': '注(現存)', '經度': '經度', '緯度': '緯度', });
lyr_JPLv1_1.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_CNLv2_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_CNLv1_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_test43_4.set('fieldImages', {'地區': '', '國家': '', '名稱': '', '材料': '', '功能': '', '類型': '', '風格': '', '外形': '', '檐': '', '頂': '', '面寬': '', '面寬數': '', '結構2': '', '斗拱': '', '宗教': '', '等級': '', '公元': '', '年份': '', '政權': '', '時代': '', '地址': '', '注(現存)': '', '經度': '', '緯度': '', });
lyr_JPLv1_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_CNLv2_2.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_CNLv1_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_test43_4.set('fieldLabels', {'地區': 'no label', '國家': 'no label', '名稱': 'no label', '材料': 'no label', '功能': 'no label', '類型': 'no label', '風格': 'no label', '外形': 'no label', '檐': 'no label', '頂': 'no label', '面寬': 'no label', '面寬數': 'no label', '結構2': 'no label', '斗拱': 'no label', '宗教': 'no label', '等級': 'no label', '公元': 'no label', '年份': 'no label', '政權': 'no label', '時代': 'no label', '地址': 'no label', '注(現存)': 'no label', '經度': 'no label', '緯度': 'no label', });
lyr_test43_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});