# vue-inline-text-editor

> An inline text editor for VueJS.

Displays as standard text. Clicking the text opens an editor. Also supports various formatting and validation features.

## Demo

[View the demo here](https://causelabs.github.io/vue-inline-text-editor/index.html).

## Usage

```javascript
<vue-inline-text-editor
    :value.sync="value1"
    placeholder="Enter something here">
</vue-inline-text-editor>
```

### Install

```bash
npm install vue-inline-text-editor --save
```

### CommonJS

```javascript
var VueInlineTextEditor = require('vue-inline-text-editor');

new Vue({
    components: {
        'vue-inline-text-editor': VueInlineTextEditor
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
    template: '<vue-inline-text-editor :value="value" @blur="onBlur" @close="onClose" @change="onChange" @open="onOpen" @update="onUpdate"></vue-inline-text-editor>'
});
```

### ES6
```javascript
import VueInlineTextEditor from 'inline-text-editor';

new Vue({
    components: {
        'inline-text-editor': VueInlineTextEditor
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
Third, run tests as you develop. Please provide tests for any new features.
```
npm run test
```
Fourth, check inting
```
npm run lint
```
Fifth, build the dist files
```
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)

## Author

[Rick Sharp](mailto:rick@causelabs.com) for [CauseLabs](https://www.causelabs.com)