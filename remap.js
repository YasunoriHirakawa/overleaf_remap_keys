// ==UserScript==
// @name         Overleaf Editor Custom VIM Keybindings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://www.overleaf.com/project/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // poll until editor is loaded
    const retry = setInterval(() => {
        if (window._debug_editors === undefined) return
        clearInterval(retry)
        // get current editor instance
        const editor = window._debug_editors[window._debug_editors.length -1]
        // vim keyboard plugin
        const vimKeyboard = window.ace.require("ace/keyboard/vim")
        // add custom keybindings
        vimKeyboard.Vim.map("jj", "<Esc>", "insert")
        // set the modified keyboard handler for editor
        editor.setKeyboardHandler(vimKeyboard.handler)
        console.log("Custom key bindings applied")
    }, 100)
})();
