import { defineStore } from "pinia";

export const usePassListStore = defineStore("PassList", {
  state: () => ({
    PassList: [
      {
        id: 456496,
        fio: "Игорь Васильевич Иванов",
        vehicle: "Т 400 ТХ 71",
        idType: "QR",
        kpp: ["КПП 8 Меньшино"],
      },
      {
        id: 75576,
        fio: "Игорь Васильевич Иванов",
        vehicle: "Т 400 ТХ 71",
        idType: "RFID",
        kpp: ["КПП 8 Меньшино", "КПП6", "КПП Стрельно"],
      },
      {
        id: 785664,
        fio: "Игорь Васильевич Иванов",
        vehicle: "Т 400 ТХ 71",
        idType: "Обычный",
        kpp: ["КПП 8 Меньшино", "КПП6", "КПП Стрельно"],
      },
    ],
  }),
});
