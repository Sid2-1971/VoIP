/*
# Copyright 2017 Oleksandr Komarov (https://modool.pro)
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).
*/

odoo.define('web.audio_field', function (require) {
"use strict";

var QWeb = require('web.core').qweb;
var field_registry = require('web.field_registry');

var FieldChar = field_registry.get('char');


var AudioField = FieldChar.extend({
    // this func is fix error when click on player
    _onInput: function () {
        if (this.el.localName != 'audio') {
            this._super.apply(this, arguments);
        }
    },
    // this func is fix error when click on player
    _getValue: function () {
        if (this.el.localName != 'audio') {
            this._super.apply(this, arguments);
        }
    },
    _renderPlayer: function () {
        this.replaceElement(QWeb.render('audio_field', {'widget':this, 'options': this.nodeOptions}));
    },
    _renderReadonly: function () {
        this._renderPlayer();
    },
    _render: function () {
        if (this.getParent().mode === "edit" && !this.nodeOptions.show_on_edit_mode) {
            this._renderEdit();
        }else{
            this._renderReadonly();
        };
        return;
    },
});

field_registry.add('audio_field', AudioField);

});
