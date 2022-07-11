import { reactive } from "vue";
import { useGenerateID } from "./useGenerateID";

export const useID = reactive({
  load: true,
  value: null,
});

useGenerateID().then((res) => {
  useID.load = false;
  useID.value = res;
});
