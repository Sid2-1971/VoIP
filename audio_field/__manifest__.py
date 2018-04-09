# -*- coding: utf-8 -*-

{
    'name': 'Audio field',
    'version': '10.0.1.0.0',
    'category': 'Extra Tools',
    'summary': 'Audio player widget for char fields with url.',
    'author': 'Oleksandr Komarov',
    'website': 'https://modool.pro',
    'license': 'LGPL-3',
    'description': """
Audio player widget for fields with url to audio record.
========================================================

**Warning**: your browser must support HTML5.

**Contributions**:
    * Panarin Migel - author Odoo 9.0 module "Widget Player field"
    """,
    'depends': ['base', 'web'],
    'data': [
        'views/assets.xml',
    ],
    'qweb': [
        'static/src/xml/widget.xml',
    ],
    'images': [
        'static/description/main_screenshot.png',
    ],
    'application': False,
    'auto_install': False,
}
