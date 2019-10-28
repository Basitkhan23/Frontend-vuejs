<template>
  <v-card>
    <v-toolbar
      color="deep-purple accent-4"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          background-color="transparent"
          fixed-tabs
          slider-color="white"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :href="'#tab-' + item"
          >
            {{ item }}
          </v-tab>

          <v-menu
            v-if="more.length"
            bottom
            left
          >
            <template v-slot:activator="{ on }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-on="on"
              >
                more
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentItem">
      <v-tab-item
        v-for="(item, index) in items.concat(more)"
        :key="(item, index)"
        :value="'tab-' + item" 
      >
        <v-card flat>
          <v-card-text>
            <h2>{{item}}</h2>
            <!-- inserting new components from contents-->
             <div v-if="item == 'Web'">
                 <h1>{{texts[0]}}</h1>
                 <h2>Web details</h2>
                <!-- <Map /> -->
            </div>
            <div v-if="item == 'Shopping'">
                 <h1>Shopping section</h1>
                <!-- <Map /> -->
            </div>
            <div v-else-if="item == 'Videos'">
                <h1>Videos section</h1>
            </div>
            <div v-else-if="item == 'Images'">
                <h1>Images section</h1>
            </div>
            <div v-else-if="item == 'Maps'">
                <Map />
            </div>
            <div v-else-if="item == 'Apps'">
                <h1>Apps section</h1>
            </div>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import Map from './contents/Map'
  export default {
    components: {Map},  
    data: () => ({ 
      currentItem: 'tab-Web',
      items: [
        'Web', 'Shopping', 'Videos', 'Images',
      ],
      more: [
        'Maps', 'Apps',
      ],
      texts: 
      [' w','s','v','i',],
    }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1) 
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1)
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
  }
</script>