import { defineStore } from "pinia";
import { User, UserListItem } from "../types/users";
import { useUsersApi } from "@/composables/useUsersApi";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  // State
  const users = ref<UserListItem[]>([]);
  const singleUser = ref<User | null>(null);

  //actions
  async function getUsers(): Promise<UserListItem[]> {
    try {
      const response = await useUsersApi("/users");
      users.value = Array.isArray(response)
        ? response.map((user: User) => ({
            id: user.id,
            name: user.name,
            email: user.email.toLowerCase(),
            phone: user.phone,
            company_name: user.company?.name || "N/A",
          }))
        : [];
      return users.value;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return [];
    }
  }

  async function getSingleUser(id: number | string): Promise<User | null> {
    try {
      const response = await useUsersApi(`/users/${id}`);
      if (response && typeof response === "object") {
        singleUser.value = response as User;
        return singleUser.value;
      }
      return null;
    } catch (error) {
      console.error(`Failed to fetch user with ID ${id}:`, error);
      return null;
    }
  }

  return {
    users,
    singleUser,
    getUsers,
    getSingleUser,
  };
});
