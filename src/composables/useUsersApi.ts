import { User } from "../types/users";

export const useUsersApi = async (
  apiKey: string
): Promise<User[] | User | null> => {
  const apiUrl = `https://jsonplaceholder.typicode.com${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
    }

    const data: User[] | User = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching data from API: ${error.message}`);
    } else {
      console.error("Unknown error occurred", error);
    }
    return null;
  }
};
