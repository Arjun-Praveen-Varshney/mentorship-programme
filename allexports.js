import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware";

export const createOrGetUser = async (response, addUser) => {
  var base64Url = response.credential.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const { name, picture, sub, email } = JSON.parse(jsonPayload);

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    loginemail: email,
    image: picture,
  };

  addUser(user);

  await axios.post(`/` + `api/auth`, user);
};

const authStore = (set) => ({
  userProfile: null,
  allUsers: [],

  addUser: (user) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),

  fetchAllUsers: async () => {
    const response = await axios.get(`/` + `api/users`);

    set({ allUsers: response.data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
