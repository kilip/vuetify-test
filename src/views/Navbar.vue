<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            app
        >
            <v-list>
                <v-list-tile
                    v-for="item in items"
                    :key="item.name"
                    @click="navigate(item)"
                >
                    <v-list-tile-action v-if="item.icon">
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.label }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>SIAP</v-toolbar-title>
        </v-toolbar>
    </div>

</template>

<script>
    export default {
        name: 'navbar',
        props: {
        },
        created(){
            this.$router.options.routes.forEach(route => {
                let meta = {
                    label: route.name,
                    icon: null
                };
                if(route.meta){
                    meta = {
                        ...meta,
                        ...route.meta
                    }
                }
                let item = {
                    name: route.name,
                    path: route.path,
                    ...meta
                };
                this.items.push(item);
            })
        },
        data(){
            return {
                items: [],
                drawer: null
            }
        },
        methods: {
            navigate(item){
                //console.log(item.path);
                this.$router.push(item.path);
            }
        }
    }
</script>
