<template>
  <v-container fluid class="overflow-hidden h-screen pt-12 w-full bg-secondary">
    <!-- Skeleton Loader -->
    <UserInfoSkeleton v-if="isLoading" />

    <!-- User Info Card -->
    <v-card
      v-else-if="!useIsEmpty(usersStore.singleUser) && !isLoading"
      max-width="800"
      outlined
      class="pa-4 pa-md-8 mx-auto"
    >
      <v-row class="d-flex justify-between align-center">
        <v-col cols="12" class="d-flex justify-between align-center">
          <v-avatar size="100" class="mr-4">
            <img
              src="@/assets/img/default-user.png"
              alt="User Avatar"
              width="100px"
              height="100px"
            />
          </v-avatar>
          <div>
            <h2 class="mb-1">{{ usersStore.singleUser?.name || "" }}</h2>
            <span>{{ usersStore.singleUser?.company?.name || "N/A" }}</span>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4 my-md-8"></v-divider>

      <v-row class="d-flex justify-between align-center">
        <UserInfo
          label="Name"
          :value="usersStore.singleUser?.name || ''"
          :md="6"
        />
        <UserInfo
          label="Username"
          :value="usersStore.singleUser?.username || ''"
          :md="6"
        />
      </v-row>

      <!-- User Info Rows -->
      <v-row class="d-flex justify-between align-center">
        <UserInfo
          label="Email"
          :value="usersStore.singleUser?.email?.toLowerCase() || ''"
          is-link
          :href="'mailto:' + usersStore.singleUser?.email"
          :md="6"
        />
        <UserInfo
          label="Website"
          :value="usersStore.singleUser?.website || ''"
          is-link
          :href="'http://' + usersStore.singleUser?.website"
          :md="6"
        />
      </v-row>

      <v-row class="d-flex justify-between align-center">
        <UserInfo
          label="Phone"
          :value="useFormatPhone(usersStore.singleUser?.phone || '')"
          :md="12"
        />
      </v-row>

      <v-divider class="my-4 my-md-8"></v-divider>

      <v-row class="d-flex justify-between align-center">
        <UserInfo label="Address" :value="fullAddress" :md="12" />
      </v-row>

      <v-divider class="my-4 my-md-8"></v-divider>

      <v-row class="d-flex justify-between align-center">
        <UserInfo
          label="Company"
          :value="usersStore.singleUser?.company?.name || ''"
          :md="6"
        />
        <UserInfo
          label="Catchphrase"
          :value="usersStore.singleUser?.company?.catchPhrase || ''"
          :md="6"
        />
      </v-row>
    </v-card>
  </v-container>
  <BackButton />
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useUsersStore } from "@/store/users";
import { useRoute } from "vue-router";
import { User } from "@/types/users";
import { useFormatPhone } from "@/composables/useFormatPhone";
import { useIsEmpty } from "@/composables/useIsEmpty";

// Import components
import UserInfoSkeleton from "@/components/UserInfoSkeleton.vue";
import UserInfo from "@/components/UserInfo.vue";
import BackButton from "@/components/BackButton.vue";

// Store and route setup
const usersStore = useUsersStore();
const route = useRoute();

const isLoading = ref<boolean>(true);

// Computed property for the full address
const fullAddress = computed<string>(() => {
  const address = usersStore.singleUser?.address;

  return address
    ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
    : "";
});

// Fetching user data
onMounted(async () => {
  isLoading.value = true;

  if (usersStore.singleUser?.id !== +route.params?.id) {
    usersStore.singleUser = {} as User;

    const res = await usersStore.getSingleUser(+route.params?.id);
    usersStore.singleUser = res as User;
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<style scoped>
.v-card {
  border-radius: 8px;
  color: black;
}
</style>
