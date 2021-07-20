<template>
  <v-row class="mt-5 mb-5">
    <v-col align="center">
      <v-card height="100%" width="20%">
        <v-card-text v-if="monitors === null">
          <v-skeleton-loader type="article"></v-skeleton-loader>
        </v-card-text>
        <v-card-text v-else>
          <h2>There are {{ activeMonitors.length }} out of {{ monitors.length }} monitors active</h2>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Info",
  props: ["monitors"],
  data() {
    return {
      activeMonitors: [],
    };
  },
    watch: {
    monitors: function () {
      for (var i = 0; i < this.monitors.length; i++) {
        if (this.monitors[i].status === 2) {
          this.activeMonitors.push(this.monitors[i])
        }
      }
    }
  },
};
</script>