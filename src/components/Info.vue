<template>
  <v-row class="mt-2">
    <v-col>
      <v-card
        v-if="monitors === null"
        color="rgb(255, 0, 0, 0)"
        height="100%"
        width="20%"
      >
        <v-skeleton-loader type="list-item-avatar"></v-skeleton-loader>
      </v-card>
      <v-card v-else color="rgb(255, 0, 0, 0)" height="100%" width="20%">
        <v-alert
          v-if="activeMonitors.length === monitors.length"
          dismissible
          color="cyan"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-information-outline"
        >
          Es sind alle Server aktiv
        </v-alert>
        <v-alert
          v-else-if="activeMonitors.length !== monitors.length"
          dismissible
          color="#C51162"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-information-outline"
        >
          Einige Server sind offline
        </v-alert>
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
    monitors: function() {
      this.activeMonitors = [];
      for (var i = 0; i < this.monitors.length; i++) {
        if (this.monitors[i].status === 2) {
          this.activeMonitors.push(this.monitors[i]);
        }
      }
    },
  },
};
</script>
