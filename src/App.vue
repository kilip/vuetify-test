<template>
    <v-app id="inspire">
        <c-navbar></c-navbar>

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
    export default {
        data(){
            return {
                drawer: true
            }
        }
    }
</script>
