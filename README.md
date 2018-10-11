# vue-inline-text-editor

> An inline text editor for VueJS.

Displays as standard text. Clicking the text opens an editor. Also supports various formatting and validation features.

## Demo

[Demo](./demo/index.html)

## Usage

### Install

```bash
npm install inline-text-editor --save
```

### CommonJS

```javascript
var InlineTextEditor = require('inline-text-editor');

new Vue({
    components: {
        'inline-text-editor': InlineTextEditor
    },
    data: function () {
        return {
            value: ''
        };
    },
    methods: {
        onBlur: function() {
            console.log('text blur:');
        },
        onClose: function() {
            console.log('text close:');
        },
        onChange: function () {
            console.log('text change:');
        },
        onOpen: function () {
            console.log('text open:');
        },
        onUpdate: function() {
            console.log('text update:');
        }
    },
    template: '<inline-text-editor :value="value" @blur="onBlur" @close="onClose" @change="onChange" @open="onOpen" @update="onUpdate"></inline-text-editor>'
});
```

### ES6
```javascript
import InlineTextEditor from 'inline-text-editor';

new Vue({
    components: {
        'inline-text-editor': InlineTextEditor
    },
    data: function () {
        return {
            value: ''
        };
    },
    methods: {
        onBlur: function() {
            console.log('text blur:');
        },
        onClose: function() {
            console.log('text close:');
        },
        onChange: function () {
            console.log('text change:');
        },
        onOpen: function () {
            console.log('text open:');
        },
        onUpdate: function() {
            console.log('text update:');
        }
    },
    template: '<inline-text-editor :value="value" @blur="onBlur" @close="onClose" @change="onChange" @open="onOpen" @update="onUpdate"></inline-text-editor>'
})
```

### Props
| Property | Type | Description | Default |
|:--|:--|:--|:--|
| autofocus | boolean | Set focus to the control once it is displayed | false |
| close-on-blur | boolean | Automatically close the control and save changes on blur | false |
| currency-decimal-places | integer | For currency values, the number of decimal places to display | 2 |
| currency-symbol | string | For currency values, the symbol to display | $ |
| disabled | boolean | If true, the field cannot be edited | false |
| hover-effects | boolean | If true, display a hover state | false |
| max-length | integer | The maximum string length to allow | null |
| min-length | integer | The minimum string length to allow | null |
| placeholder | string | Placeholder text to display | null |
| required | boolean | If true, a value is required | false |
| type | string | The type of control. Options include: 'text', 'number', 'currency', 'percentage' | text |
| value.sync | mixed | The value to bind to. Be sure to include the sync modifier |  |

## Contribution
First, install dependencies
```
npm install
```
Second, setup development environment
```
vue serve main.js
```

## License

[MIT](http://opensource.org/licenses/MIT)

## Author

[Rick Sharp](mailto:rick@causelabs.com) for [CauseLabs](https://www.causelabs.com)