<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center" class="text-center">
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="12">
            <!-- 404 Error Text -->
            <v-sheet
              color="secondary"
              class="text-white display-2 font-weight-bold py-4"
              elevation="4"
            >
              404
            </v-sheet>
          </v-col>

          <!-- Error Description and Navigation -->
          <v-col cols="12">
            <v-sheet class="px-6 py-4">
              <h2 class="display-1 text-secondary">Page Not Found</h2>
              <p class="text-body-1 mt-2">
                Please check the URL in the address bar and try again.
              </p>

              <!-- Button to go back home -->
              <v-btn
                :to="'/'"
                color="secondary"
                class="mt-4"
                large
                elevation="2"
              >
                Go Back Home
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
