<template>
  <v-row>
    <v-col align="center">
      <Info :monitors="monitors" />
      <List :monitors="monitors" />
    </v-col>
  </v-row>
</template>

<script>
import Info from "../components/Info.vue";
import List from "../components/List.vue";
import { request } from "../scripts/api.js";

export default {
  name: "Home",
  components: { Info, List },
  data() {
    return {
      monitors: null,
    };
  },
  methods: {
    getMonitors() {
      request()
        .then((res) => (this.monitors = res.data.monitors))
        .catch((err) => console.log(err));
      console.log("[App]: Monitors received!");
    },
  },
  mounted() {
    this.getMonitors();
  },
};
</script>
