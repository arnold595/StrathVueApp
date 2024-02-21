<template>
    <div id = 'courses'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                        <v-card
                                width="400"
                                title="This is a title"
                                subtitle="This is a subtitle"
                                text="This is content"
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                    <v-card-title>{{componentTitle}}</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                            

                                <v-card-text>
                                    
                                        <v-list
                                            :items="courses"
                                            item-title="coursename"
                                            item-value="id"
                                            ></v-list>
                                </v-card-text>
                            
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      courses:[
        {
            id: 1,
            coursename: 'Financial Economics'
        },
        {
            id: 2,
            coursename: 'Psychology'
        },
        {
            id: 3,
            coursename: 'Computer Science'
        },
        {
            id: 4,
            coursename: 'Financial Engineering'
        },
        {
            id: 5,
            coursename: 'Medicine'
        },
        {
            id: 6,
            coursename: 'Hospitality and Tourism'
        },
        {
            id: 7,
            coursename: 'Architecture'
        },
        {
            id: 8,
            coursename: 'Law'
        },
        {
            id: 9,
            coursename: 'Education'
        },
        {
            id: 10,
            coursename: 'Forestry'
        },
      ],
      componentTitle: 'Courses at Strath Uni'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
