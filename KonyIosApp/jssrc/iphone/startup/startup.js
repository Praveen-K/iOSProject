//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "KonyIosApp",
    appName: "KonyIosApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.100.234",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://192.168.100.234:80/middleware/MWServlet",
    secureurl: "https://192.168.100.234:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    IosMobileFrmGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            IosMobileFrm.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();