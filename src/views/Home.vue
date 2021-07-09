<template>
  <v-row class="mt-5">
    <v-col align="center">
      <v-card height="100%" width="20%">
        <v-card-title class="justify-center">
          <h2>Status</h2>
        </v-card-title>
        <v-card-text v-if="monitors === null">
          <v-skeleton-loader type="article"></v-skeleton-loader>
        </v-card-text>
        <v-card-text>
          <v-list-item two-line v-for="monitor in monitors" :key="monitor.id">
            <v-list-item-content>
              <v-list-item-title>{{ monitor.friendly_name }}</v-list-item-title>
              <v-list-item-subtitle v-if="monitor.status == 2"
                >Online</v-list-item-subtitle
              >
              <v-list-item-subtitle v-else>Offline</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { request } from "../scripts/api.js";
export default {
  name: "Home",
  data() {
    return {
      monitors: null,
    };
  },
  mounted() {
    request().then((res) => (this.monitors = res.data.monitors));
  },
};
</script>
