const date = new Date();
const minDate = new Date();
const maxDate = new Date();
maxDate.setFullYear(date.getFullYear() + 1);

export const options = {
  format: "dd/mm/yyyy",
  minDate,
  defaultDate: date,
  yearRange: [minDate.getFullYear(), maxDate.getFullYear()],
  i18n: {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ],
    weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    weekdaysAbbrev: ["D", "S", "T", "Q", "Q", "S", "S"],
    cancel: "Cancelar",
    clear: "Limpar",
  },
};
