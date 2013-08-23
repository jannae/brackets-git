/*global brackets, define */

define(function (require, exports, module) {
    "use strict";
    
    // Default preferences are different for platforms
    var defaultPreferences = {
        "lastVersion":        null,
        "panelEnabled":       true,
        // these are set by platform
        "gitIsInSystemPath":  null,
        "gitPath":            null,
        "msysgitPath":        null
    };
    if (brackets.platform === "win") {
        defaultPreferences.gitIsInSystemPath = false;
        defaultPreferences.gitPath           = "C:\\Program Files (x86)\\Git\\bin\\git.exe";
        defaultPreferences.msysgitPath       = "C:\\Program Files (x86)\\Git\\";
    } else {
        // Mac (Linux?)
        defaultPreferences.gitIsInSystemPath = false;
        defaultPreferences.gitPath           = "/usr/local/git/bin/git";
        defaultPreferences.msysgitPath       = "";
    }
    
    module.exports = defaultPreferences;
});