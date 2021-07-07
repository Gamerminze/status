<template>
  <v-row class="mt-5">
    <v-col align="center">
      <v-card height="100%" width="15%">
        <v-card-title class="justify-center">
          <h2>Status</h2>
        </v-card-title>
        <v-card-text v-if="monitors.length == 0">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-card-text>
        <v-card-text v-else>
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
import axios from "axios";

export default {
  name: "Api",
  data() {
    return {
      monitors: [],
    };
  },
  methods: {
    request() {
      const config = {
        method: "get",
        url: "https://jannes-backend.herokuapp.com/uptimeRobot",
      };
      axios(config)
        .then((response) => {
          this.handling(response.data.monitors);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handling(monitors) {
      for (let monitor of monitors) this.monitors.push(monitor);
    },
  },
  mounted() {
    this.request();
  },
};
</script>
