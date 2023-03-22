(function($R)
{
    $R.add('plugin', 'textdirection', {
        translations: {
    		en: {
    			"change-text-direction": "RTL-LTR",
    			"left-to-right": "Left to Right",
    			"right-to-left": "Right to Left"
    		}
        },
        init: function(app)
        {
            this.app = app;
            this.lang = app.lang;
            this.block = app.block;
            this.editor = app.editor;
            this.toolbar = app.toolbar;
            this.selection = app.selection;
        },
        // public
        start: function()
        {
            var dropdown = {};

    		dropdown.ltr = { title: redactorTranslations.vendor_left_to_right, api: 'plugin.textdirection.set', args: 'ltr' };
    		dropdown.rtl = { title: redactorTranslations.vendor_right_to_left, api: 'plugin.textdirection.set', args: 'rtl' };

            var $button = this.toolbar.addButton('textdirection', { title: redactorTranslations.vendor_change_text_direction });
            $button.setIcon('<i class="re-icon-textdirection"></i>');
			$button.setDropdown(dropdown);
        },
        set: function(type)
		{
    		var block = this.selection.getBlock();
    		if (block && block.tagName === 'LI') {
        		var list = $R.dom(block).parents('ul, ol', this.editor.getElement()).last();
        		this.block.add({ attr: { dir: type }}, false, list);
    		}
            else {
                this.block.add({ attr: { dir: type }});
            }
		}
    });
})(Redactor);