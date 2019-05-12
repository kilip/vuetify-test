<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-form>

        <template v-for="field in fields">
            <div :key="field.name">
                <v-text-field
                    :label="field.label"
                    :name="field.name"
                    :placeholder="field.placeholder"
                    v-model="item[field.name]"
                    v-if="field.type === 'text'"
                ></v-text-field>
                <v-text-field
                    :label="field.label"
                    :name="field.name"
                    :placeholder="field.placeholder"
                    type="password"
                    v-model="item[field.name]"
                    v-if="field.type === 'password'"
                ></v-text-field>

                <!-- @todo formatting date -->
                <c-datepicker
                    v-if="field.type === 'date'"
                    :name="field.name"
                    :label="field.label"
                    :format="field.format"
                    :data="item"
                ></c-datepicker>
                <!--
                <v-menu
                    :v-model="field.name"
                    :close-on-content-click="true"
                    :nudge-right="40"
                    :return-value.sync="field.name"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    v-if="field.type === 'date'"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="item[field.name]"
                            :label="field.label"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="item[field.name]" @input="handleDateSave(field, $event)" no-title scrollable autosave>
                    </v-date-picker>
                </v-menu>
                -->
                <v-radio-group
                    v-model="field.name"
                    v-if="field.type === 'radio'"
                    :label="field.label"
                >
                    <v-radio
                        v-for="(option, index) in field.options"
                        :key="index"
                        :label="option.label"
                        :value="option.value"
                    ></v-radio>
                </v-radio-group>

                <v-item-group
                    v-if="field.type === 'array-checkbox'"
                >
                    {{field.label}}
                    <v-checkbox
                        v-for="(option, index) in field.options"
                        v-model="item[field.name]"
                        :key="`${field.name}_${index}`"
                        :label="option.label"
                        :value="option.value"
                    ></v-checkbox>
                </v-item-group>
            </div>
        </template>
    </v-form>
</template>

<script>
    export default {
        name: 'c-form',
        props: {
            fields: {
                type: [Array, Object],
                default: () => []
            },
            values: {
                type: [Array, Object],
                required: true
            },
            errors: {
                type: Object,
                default: () => {}
            },
            initialValues: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            // eslint-disable-next-line
            item () {
                return this.initialValues || this.values
            },
            violations () {
                return this.errors || {}
            }
        },
        methods: {
            isInvalid (key) {
                return Object.keys(this.violations).length > 0 && this.violations[key]
            },
            getItem(item, name){
                const ret = item ? item[name]: () => {};
                return ret;
            },
            toISO (date) {
                if (!date) return null

                const [year, month, day] = date.split('-')
                return `${month}/${day}/${year}`
            },
            toDisplay (date) {
                if (!date) return null

                const [month, day, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
            genDateMenu(field){
                let name = field.name;
                return 'fr'+name+'Menu';
            },
            handleDateSave(field, event){
                this.item[field.name] = event;
            }
        }

    }
</script>
