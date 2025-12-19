// js/debug.js
const debugMembers = {
  enabled: true,
  log: function (message, data) {
    if (this.enabled && window.console) {
      console.log(`[KPYA Debug] ${message}`, data);
    }
  },
  error: function (message, error) {
    if (this.enabled && window.console) {
      console.error(`[KPYA Error] ${message}`, error);
    }
  },
};
