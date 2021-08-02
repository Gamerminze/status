<template>
  <v-row class="mt-5 mb-5">
    <v-col>
      <v-card height="100%" width="20%">
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
                ><v-chip class="ma-2" color="#C51162" outlined>
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
export default {
  name: "List",
  props: ["monitors"],
  data() {
    return {
      //
    };
  },
};
</script>
