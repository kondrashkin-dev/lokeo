<template lang="pug">
LoginLayout
  FormKit(
    type="form" 
    submit-label="Login"
    @submit="onSubmit"
  )
    FormKitSchema(:schema="schema")
</template>

<script setup>
import LoginLayout from "@/layouts/LoginLayout.vue";
import { useLoginStore } from "@/stores/login";
import { useFetchUser } from "@/use/useFetchUser";
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
const schema = [
  { $el: "h1", children: "Login" },
  {
    $formkit: "text",
    name: "phone",
    label: "Phone",
    validation: "required|phone",
  },
  {
    $formkit: "password",
    name: "password",
    label: "Password",
    validation: "required",
  },
];
const router = useRouter();
const store = useLoginStore();
const onSubmit = async (data) => {
  try {
    const { token, refreshToken, userData } = await useFetchUser(data);
    const localStorage = useLocalStorage("login", {
      token,
      refreshToken,
    });
    store.userData = userData;
    router.push({ name: "PassList" });
  } catch (e) {
    alert(e);
  }
};
</script>

<style lang="stylus" scoped></style>
