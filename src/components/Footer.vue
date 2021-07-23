<template>
  <v-row class="mt-5 mb-5">
    <v-col>
      <v-card height="100%" width="20%">
        <v-btn @click="reload()" class="ma-2" text icon color="blue darken-1">
          <v-icon>mdi-reload</v-icon>
        </v-btn>

        <v-btn
          class="ma-2"
          href="https://github.com/Gamerminze/status"
          text
          icon
          color="grey lighten-1"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Footer",
  props: ["monitors"],
  data() {
    return {
      //
    };
  },
  methods: {
    reload() {
      this.$emit("reloadMonitors");
    },
  },
};
</script>
