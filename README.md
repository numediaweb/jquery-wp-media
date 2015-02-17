# jquery-wp-media

### Easy WordPress media popup triger

This plugin adds the possibility to open WordPress's media iframe and returns the attached media.

## Install

To get going with the plugin you can:

  * [Download the latest release](https://github.com/numediaweb/jquery-wp-media/archive/master.zip)
  * [Install with Bower](http://bower.io): `bower install jquery-wp-media`

## Usage

```javascript
$('.nw_ncs_set_post_pdf_url').nw_add_media({
    trigger: "click",
    title: "Insert Media",
    button_text: "Insert into page",
    functionAfter: function(attachment) {
        console.log(attachment);
    }
});
```

## Options

### trigger

type: **String** / default: `click`

Which event shpuld triger the WordPress media popup to open.

### title

type: **String** / default: `Insert Media`

The title of the WordPress media popup. 

### button_text

type: **String** / default: `Insert into page`

The button text of the WordPress media popup. 

### functionAfter

type: **Function** / default: `null` / return: object

The callback function that returns the attachement object.

