<template>
  <div class="bg-secondary h-screen overflow-hidden w-full">
    <v-container fluid class="pt-4 overflow-hidden" max-width="1600">
      <!-- Search Field -->
      <v-text-field
        :model-value="userSearch"
        hide-details
        label="Search by name or email"
        outlined
        clearable
        class="pb-4 pb-md-12"
        @update:model-value="handleUpdateSearch"
      >
      </v-text-field>

      <!-- Loading Spinner -->
      <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="accent"
        size="100"
        class="spinner"
      ></v-progress-circular>

      <!-- Data Table -->
      <v-data-table
        v-else
        :headers="headers"
        :items="filteredUserList"
        :items-per-page="10"
        :mobile-breakpoint="800"
        dense
        fixed-header
        height="70vh"
        width="500px"
        class="elevation-1 overflow-x-auto custom-table"
      >
        <template #item="{ item }">
          <tr
            class="cursor-pointer custom-hover"
            @click="goToUserPage(item.id)"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.company_name }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUsersStore } from "@/store/users";
import { UserListItem } from "@/types/users";
import { useRouter } from "vue-router";

const usersStore = useUsersStore();
const router = useRouter();

// Headers for the data table
const headers = ref([
  {
    title: "Name",
    align: "start",
    sortable: false,
    key: "name",
    minWidth: "200px",
  },
  {
    title: "Email",
    sortable: false,
    key: "email",
    minWidth: "150px",
  },
  {
    title: "Phone",
    sortable: false,
    key: "phone",
    minWidth: "120px",
  },
  {
    title: "Company Name",
    sortable: false,
    key: "company_name",
    minWidth: "150px",
  },
]);

const isLoading = ref<boolean>(false);
const filteredUserList = ref<UserListItem[]>([] as UserListItem[]);

//search
const userSearch = ref<string>("");

function handleUpdateSearch(val: string) {
  userSearch.value = val;

  if (val) {
    filteredUserList.value =
      (usersStore.users as UserListItem[]).filter((user) => {
        if (
          user.name.toLowerCase().includes(userSearch.value.toLowerCase()) ||
          user.email.toLowerCase().includes(userSearch.value.toLowerCase())
        ) {
          return user;
        } else {
          return;
        }
      }) || ([] as UserListItem[]);
  } else {
    filteredUserList.value = usersStore.users as UserListItem[];
  }
}

// Redirect to single user page
function goToUserPage(id: number) {
  if (!isNaN(+id) && id !== null) {
    router.push({ name: "user", params: { id } });
  } else {
    router.push({ name: "notFoundPage" });
  }
}

// Fetching user data
onMounted(async () => {
  if (!usersStore.users?.length) {
    isLoading.value = true;
    await usersStore.getUsers();
  }
  filteredUserList.value = usersStore.users as UserListItem[];

  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<style scoped>
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.custom-table {
  border-radius: 8px;
  overflow: hidden;
  color: black;
}

.custom-hover:hover {
  background-color: rgb(72, 169, 166, 0.3);
}

::v-deep(.v-data-table thead th) {
  background-color: rgb(126, 185, 183) !important;
  font-weight: bold !important;
  color: white;
}

@media screen and (max-width: 800px) {
  .v-data-table-header__content {
    font-size: 12px;
  }
  .v-data-table {
    font-size: 12px;
  }
}
</style>
