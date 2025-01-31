(function(back) {
  var FILE = "dtlaunch.json";
  
  var settings = Object.assign({
    showClocks: true,
    showLaunchers: true,
    direct: false,
    oneClickExit:false,
    swipeExit: false
  }, require('Storage').readJSON(FILE, true) || {});

  function writeSettings() {
    require('Storage').writeJSON(FILE, settings);
  }

  E.showMenu({
    "" : { "title" : "Desktop launcher" },
    "< Back" : () => back(),
    'Show clocks': {
      value: settings.showClocks,
      format: v => v?"On":"Off",
      onchange: v => {
        settings.showClocks = v;
        writeSettings();
      }
    },
    'Show launchers': {
      value: settings.showLaunchers,
      format: v => v?"On":"Off",
      onchange: v => {
        settings.showLaunchers = v;
        writeSettings();
      }
    },
    'Direct launch': {
      value: settings.direct,
      format: v => v?"On":"Off",
      onchange: v => {
        settings.direct = v;
        writeSettings();
      }
    },
    'Swipe Exit': {
      value: settings.swipeExit,
      format: v => v?"On":"Off",
      onchange: v => {
        settings.swipeExit = v;
        writeSettings();
      }
    },
    'One click exit': {
      value: settings.oneClickExit,
      format: v => v?"On":"Off",
      onchange: v => {
        settings.oneClickExit = v;
        writeSettings();
      }
    }
  });
})
