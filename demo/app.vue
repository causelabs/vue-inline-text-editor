<template>
    <div>
        <div class="sample-container">
            <h3>Default Config</h3>
            <inline-text-editor
                :value="value1"
                class="my-test"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Add an Edit Icon</h3>
            <inline-text-editor
                :value="value2"
                class="my-test"
                placeholder="Enter something here">
                <span slot="edit-label" class="fa fa-pen"></span>
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Override the Action Icons</h3>
            <inline-text-editor
                :value="value3"
                class="my-test"
                placeholder="Enter something here">
                <span slot="confirm-label" class=" fa fa-ban"></span>
                <span slot="cancel-label" class=" fa fa-save"></span>
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Add Hover Effects</h3>
            <inline-text-editor
                :value="value3"
                :hover-effects="true"
                class="my-test"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Close and Save on Blur</h3>
            <inline-text-editor
                :value="value4"
                class="my-test"
                :close-on-blur="true"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Required</h3>
            <inline-text-editor
                :value="value5"
                class="my-test"
                :required="true"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Min/Max Length (3, 8)</h3>
            <inline-text-editor
                :value="value6"
                class="my-test"
                :min-length="3"
                :max-length="8"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Disabled</h3>
            <inline-text-editor
                :value="value7"
                class="my-test"
                :disabled="true"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>US Currency</h3>
            <inline-text-editor
                :value="value8"
                class="my-test"
                type="currency"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>UK Currency Without Pence</h3>
            <inline-text-editor
                :value="value9"
                class="my-test"
                type="currency"
                currency-symbol="£"
                :currency-decimal-places="0"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Number</h3>
            <inline-text-editor
                :value="value10"
                class="my-test"
                type="number"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>

        <div class="sample-container">
            <h3>Percentage</h3>
            <inline-text-editor
                :value="value11"
                class="my-test"
                type="percentage"
                placeholder="Enter something here">
            </inline-text-editor>
        </div>
    </div>
</template>

<script>

import InlineTextEditor from '../src/inline-text-editor.vue'
export default {
    name: 'App',

    data () {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: 'Some content here',
            value8: '1234.56',
            value9: '1234.56',
            value10: '5000',
            value11: '12.5',
        }
    },

    components: {
        InlineTextEditor
    }
}
</script>

<style>
    h3{
        padding:0;
        margin:0 0 15px;
    }
    .sample-container{
        margin-bottom:30px;
    }
</style>