<template>
    <div class="inline-editor" :class="classes">
        <div v-if="editingValue !== null">
            <input
                type="text"
                v-model="editingValue"
                :error-messages="textValidationErrors"
                @change="emitChange"
                @blur="emitBlur"
                @keypress="validateInput"
                @keyup.enter="updateValue"
                @keyup.esc="cancelEdit"
                :placeholder="placeholder"
                :required="required"
                ref="input"
                :autofocus="autofocus"
            >
            <button class="icon" @click="cancelEdit">
                <slot name="cancel-label">❌</slot>
            </button>
            <button class="icon" @click="updateValue">
                <slot name="confirm-label">✅</slot>
            </button>
            <div v-if="errorMessages" class="error">{{ errorMessages }}</div>
        </div>
        <div v-else @click.stop="editValue" class="value-display">
            <span>{{ formattedValue }} 
                <button slot="edit-button" @click.stop="editValue">
                    <slot name="edit-label"></slot>
                </button>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'InlineTextEditor',
    props: {
        autofocus: {
            type: Boolean,
            default: false
        },
        closeOnBlur: {
            type: Boolean,
            default: false
        },
        currencyDecimalPlaces: {
            type: Number,
            default: 2
        },
        currencySymbol: {
            default: '$'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hoverEffects: {
            type: Boolean,
            default: false
        },
        maxLength: {
            type: Number,
            default: null
        },
        minLength: {
            type: Number,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text',
            validator (value) {
                return ['text', 'number', 'currency', 'percentage'].indexOf(value) > -1
            }
        },
        value: {
            required: true
        }
    },
    data () {
        return {
            editingValue: null,
            internalValue: this.value,
            textValidationErrors: []
        }
    },
    computed: {
        classes () {
            let classNames = []
            if (this.hoverEffects) {
                classNames.push('hover-effects')
            }
            if (this.editingValue !== null) {
                classNames.push('editing')
            }
            if (this.disabled) {
                classNames.push('disabled')
            }
            classNames.push('type-' + this.type)
            return classNames.join(' ')
        },
        errorMessages () {
            if (this.textValidationErrors.length) {
                return this.textValidationErrors.join(', ')
            }
            return null
        },
        formattedValue () {
            if ((null === this.internalValue) || ('' === this.internalValue)) {
                return this.placeholder
            }
            if (this.type === 'currency') {
                return this.formatCurrency(this.internalValue, 0)
            }
            if (this.type === 'percentage') {
                return this.internalValue + '%'
            }
            return this.internalValue
        }
    },
    watch: {
        internalValue (newValue) {
            this.$emit('update:value', newValue)
        },
        selectValue (newValue) {
            this.internalSelectValue = newValue
        },
        value (newValue) {
            this.internalValue = newValue
        }
    },
    mounted () {
        // If this field is required, but is empty, open the editor
        if (this.required) {
            if ((this.internalValue === '') || (this.internalValue === null)) {
                this.editingValue = ''
                this.showSelect = true
            }
        }
    },
    methods: {
        cancelEdit () {
            this.internalSelectValue = this.originalSelectValue
            this.closeEditor()
        },
        closeEditor () {
            this.editingValue = null
            this.$emit('close')
            this.originalSelectValue = null
        },
        editValue () {
            if (this.disabled) {
                return
            }
            if (this.internalValue === null) {
                // Clicking into an empty editor, set to an empty string
                this.editingValue = ''
            } else {
                this.editingValue = this.internalValue
            }
            this.filterValue()
            this.originalSelectValue = this.internalSelectValue

            // Set the focus to the input
            window.setTimeout(() => {
                this.showSelect = true
                this.focus()
            }, 10)
            this.$emit('open')
        },
        emitBlur (e) {
            this.validate()
            this.$emit('blur', e)
            if (this.closeOnBlur === true) {
                this.updateValue()
            }
        },
        emitChange (e) {
            this.validate()
            this.$emit('change', e)
        },
        filterValue () {
            if (this.editingValue === null) {
                return
            }
            if (['number', 'currency', 'percentage'].indexOf(this.type) > -1) {
                this.editingValue = this.editingValue.toString().replace(/[^0-9.]/g, '')
            }
        },
        focus () {
            try {
                this.$nextTick(() => {
                    this.$refs.input.focus()
                })
            } catch (ignore) {
                // ignore
            }
        },
        /**
         * Takes a number and formats it as US currency
         * @param  {number} value The number to format
         * @return {string} The formatted value
         */
        formatCurrency (value) {
            try {
                const digitsRE = /(\d{3})(?=\d)/g
                // Strip out any non-numeric characters
                value = parseFloat(value.toString().replace(/[^0-9.-]/g, ''), 10)

                if (!isFinite(value) || (!value && value !== 0)) {
                    return ''
                }

                let stringified = Math.abs(value).toFixed(this.currencyDecimalPlaces)
                let _int = this.currencyDecimalPlaces ? stringified.slice(0, -1 - this.currencyDecimalPlaces) : stringified
                let i = _int.length % 3
                let head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
                let _float = this.currencyDecimalPlaces ? stringified.slice(-1 - this.currencyDecimalPlaces) : ''
                const sign = value < 0 ? '-' : ''
                return sign + this.currencySymbol + head + _int.slice(i).replace(digitsRE, '$1,') + _float
            } catch (e) {
                return ''
            }
        },
        updateValue () {
            this.validate()
            if (this.textValidationErrors.length) {
                return false
            }
            let isChanged = false
            if (this.internalValue !== this.editingValue) {
                this.internalValue = this.editingValue
                isChanged = true
            }
            if (isChanged) {
                this.$nextTick(() => {
                    this.$emit('update')
                })
            }
            this.closeEditor()
        },
        validate () {
            let errors = []
            this.filterValue()
            if (this.required && !this.editingValue) {
                errors.push('This value is required')
            } else if (this.minLength && this.editingValue && (this.editingValue.length < this.minLength)) {
                errors.push('Must be at least ' + this.minLength + ' characters')
            } else if (this.maxLength && this.editingValue && (this.editingValue.length > this.maxLength)) {
                errors.push('Max ' + this.maxLength + ' characters allowed')
            }
            this.textValidationErrors = errors
        },
        validateInput (evt) {
            // Only for number, currency, and percentage fields
            if (['number', 'currency', 'percentage'].indexOf(this.type) === -1) {
                return
            }

            // Get the key code
            evt = (evt) || window.event
            var charCode = (evt.which) ? evt.which : evt.keyCode

            // Verify that it's a number or control key
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault()
            } else {
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.inline-editor{

    display: inline-block;

    cursor: text;

    .btn--icon{
        margin: 20px 0 0;
        min-width: 24px;
        height:24px;
    }

    button{
        border:none;
        background-color:transparent;
        cursor:pointer;
    }

    &.type-number,
    &.type-currency,
    &.type-percentage{
        margin-left: 10px;

        .input-group{
            max-width:120px;

            input{
                text-align: right;
            }
        }
    }

    &.hover-effects:not(.disabled){
        border:dashed 1px transparent;
    }
    &.hover-effects:not(.editing):not(.disabled){
        &:hover{
            border-color: #aaa;
        }
    }

    &:not(.editing){
        max-width:100%;
    }

    .value-display{
        min-height:19px;
        min-width: 55px;
        width:100%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;

        .icon{
            opacity: 0;
            cursor: pointer;
        }

        &:hover{
            .icon{
                opacity: 1;
            }
        }
    }

    div.error{
        color:#ff0000;
        font-size:0.8em;
        font-weight:bold;
    }

    &.disabled{
        cursor:not-allowed;

        .value-display{
            cursor: not-allowed;
        }
    }
}
</style>