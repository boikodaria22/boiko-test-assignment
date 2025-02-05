<template>
  <v-card max-width="800" outlined class="pa-4 pa-md-8 mx-auto">
    <v-row class="pb-8">
      <v-col
        cols="12"
        class="d-flex justify-between align-center pt-4 px-4 pt-md-4"
      >
        <v-skeleton-loader
          class="mr-4"
          loading
          height="100"
          width="100"
          type="image"
        />
        <div>
          <v-skeleton-loader loading height="18" width="150" class="mb-2" />
          <v-skeleton-loader loading height="14" width="100" />
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-4 my-md-8" />

    <v-row class="d-flex justify-between align-center">
      <v-col
        v-for="i in 2"
        :key="'personal-' + i"
        cols="12"
        md="6"
        class="py-1 px-4 py-md-2"
      >
        <v-skeleton-loader loading height="12" width="120" class="mb-2" />
        <v-skeleton-loader loading height="14" width="100" />
      </v-col>
    </v-row>

    <v-divider class="my-4 my-md-8" />

    <v-row class="d-flex justify-between align-center">
      <v-col
        v-for="i in 2"
        :key="'contact-' + i"
        cols="12"
        md="6"
        class="py-1 px-4 py-md-2"
      >
        <v-skeleton-loader loading height="12" width="120" class="mb-2" />
        <v-skeleton-loader loading height="14" width="200" />
      </v-col>
    </v-row>

    <v-divider class="my-4 my-md-8" />

    <v-row>
      <v-col cols="12" class="py-1 px-4 py-md-2">
        <v-skeleton-loader loading height="12" width="120" class="mb-2" />
        <v-skeleton-loader loading height="14" width="300" />
      </v-col>
    </v-row>

    <v-divider class="my-4 my-md-8" />

    <v-row class="d-flex justify-between align-center">
      <v-col
        v-for="i in 2"
        :key="'company-' + i"
        cols="12"
        md="6"
        class="py-1 px-4 py-md-2"
      >
        <v-skeleton-loader loading height="12" width="120" class="mb-2" />
        <v-skeleton-loader loading height="14" width="150" />
      </v-col>
    </v-row>
  </v-card>
</template>
