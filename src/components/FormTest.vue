<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-title>
                    <span class="headline">Form List</span>
                </v-card-title>
                <v-card-text>
                    <c-form
                        :fields="fields"
                        :values="values"
                    ></c-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        data(){
            return {
                fields: [
                    {
                        name: 'fullname',
                        type: 'text',
                        label: 'Enter your Full Name without title',
                    },
                    {
                        name: 'username',
                        type: 'text',
                        label: 'Type your desired username',
                    },
                    {
                        name: 'sex',
                        type: 'radio',
                        label: 'Choose your sex',
                        options: [
                            {label: 'Male', value: 'M'},
                            {label: 'Female', value: 'F'}
                        ]
                    },
                    {
                        name: 'password',
                        type: 'password',
                        label: 'Password'
                    },
                    {
                        name: 'haveValue',
                        type: 'text',
                        label: 'This input should show value'
                    },
                    {
                        name: 'date',
                        type: 'date',
                        label: 'Enter your birthday'
                    },
                    {
                        name: 'anotherDate',
                        type: 'date',
                        label: 'Enter your another date'
                    },
                    {
                        name: 'roles',
                        type: 'array-checkbox',
                        label: 'Checked your desired user roles',
                        options: [
                            {label: 'User', value: 'ROLE_USER'},
                            {label: 'Admin', value: 'ROLE_ADMIN'},
                            {label: 'Super Admin', value: 'ROLE_SUPER_ADMIN'}
                        ]
                    }
                ],
                values: {
                    haveValue: "Some value here",
                    roles: ['ROLE_USER']
                }
            }
        }
    }
</script>
