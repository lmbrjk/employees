const initialState = [
  { typeField: "text", nameField: "name", labelField: "Имя", hidden: true },
  {
    typeField: "text",
    nameField: "middlename",
    labelField: "Отчество",
    hidden: true,
  },
  {
    typeField: "text",
    nameField: "surname",
    labelField: "Фамилия",
    hidden: false,
  },
  {
    typeField: "date",
    nameField: "birthday",
    labelField: "Дата рождения",
    hidden: true,
  },
  {
    typeField: "number",
    nameField: "number",
    labelField: "Табельный номер",
    hidden: false,
  },
  {
    typeField: "select",
    nameField: "post",
    labelField: "Должность",
    labels: ["менеджер", "кассир", "экономист", "начальник отдела"],
    hidden: true,
  },
  {
    typeField: "select",
    nameField: "division",
    labelField: "Подразделение",
    labels: [
      "кассовых операций",
      "кредитный отдел",
      "по работе с юрлицами",
      "корпоративный отдел",
      "финансового анализа",
    ],
    hidden: true,
  },
];

export default {
  state: initialState,
  reducers: {
    CHANGE_FIELDS_LIST: (state, payload) => {
      const changedState = state.map((field) => {
        payload.fields.includes(field.nameField)
          ? (field.hidden = true)
          : (field.hidden = false);

        return field;
      });
      return changedState;
    },
  },
  effects: (dispatch) => ({
    changeFieldsList: (payload, rootState) => {
      dispatch.inputs.CHANGE_FIELDS_LIST(payload);
    },
  }),
};
