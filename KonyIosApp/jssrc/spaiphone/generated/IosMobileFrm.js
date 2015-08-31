//Form JS File
function addWidgetsIosMobileFrm() {
    var label5917763383 = new kony.ui.Label({
        "id": "label5917763383",
        "isVisible": true,
        "text": "Welcome to Kony Ios Application!!!",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    IosMobileFrm.add(
    label5917763383);
};

function IosMobileFrmGlobals() {
    var MenuId = [];
    IosMobileFrm = new kony.ui.Form2({
        "id": "IosMobileFrm",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsIosMobileFrm
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};