<template>
  <v-row>
    <v-col align="center">
      <Info :monitors="monitors" />
      <v-card height="70%" width="20%">
        <v-card-text v-if="monitors === null">
          <v-skeleton-loader type="article"></v-skeleton-loader>
        </v-card-text>
        <v-card-text v-else>
          <v-list-item two-line v-for="monitor in monitors" :key="monitor.id">
            <v-list-item-content>
              <v-list-item-title>{{ monitor.friendly_name }}</v-list-item-title>
              <v-list-item-subtitle v-if="monitor.status == 2"
                ><v-chip class="ma-2" color="success" outlined>
                  <v-icon left>
                    mdi-cloud-check
                  </v-icon>
                  Online
                </v-chip></v-list-item-subtitle
              >
              <v-list-item-subtitle v-else
                ><v-chip class="ma-2" color="error" outlined>
                  <v-icon left>
                    mdi-cloud-question
                  </v-icon>
                  Offline
                </v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Info from "../components/Info.vue";
import { request } from "../scripts/api.js";

export default {
  name: "Home",
  components: { Info },
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
