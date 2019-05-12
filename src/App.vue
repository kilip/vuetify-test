<template>
    <v-app id="inspire">
        <c-navbar
            :config="config"
        ></c-navbar>

        <v-content>
            <v-container fluid fill-height>
                <v-layout
                    justify-center
                    align-left
                >
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import nav from './config/nav';

    export default {
        data(){
            return {
                drawer: true,
                config: nav
            }
        }
    }
</script>
