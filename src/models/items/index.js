const initialState = [
  {
    id: "123451899367450121",
    name: "Иван",
    middlename: "Иванович",
    surname: "Иванов",
    birthday: "1988-03-09",
    number: 333555,
    post: "менеджер",
    division: "корпоративный отдел",
  },
  {
    id: "123899899364440121",
    name: "Варвара",
    middlename: "Сергеевна",
    surname: "Плющ",
    birthday: "1963-06-18",
    number: 895122,
    post: "экономист",
    division: "финансового анализа",
  },
  {
    id: "123451899365450100",
    name: "Семен",
    middlename: "Семенович",
    surname: "Горбунков",
    birthday: "1977-11-21",
    number: 124899,
    post: "начальник отдела",
    division: "кредитный отдел",
  },
  // {
  //   id: "125961899365450100",
  //   name: "Петр",
  //   middlename: "Петрович",
  //   surname: "Петров",
  //   birthday: "1995-08-02",
  //   number: 542303,
  //   post: "кассир",
  //   division: "кассовых операций",
  // },
];

export default {
  state: initialState,
  reducers: {
    CREATE_ITEM: (state, payload) => {
      const changedState = state.concat([payload]);
      return changedState;
    },
    CHANGE_ITEM: (state, payload) => {
      const changedState = state.map((item) =>
        item.id === payload.id ? payload : item
      );

      return changedState;
    },
  },
  effects: (dispatch) => ({
    createItem: (payload, rootState) => {
      dispatch.items.CREATE_ITEM(payload);
    },
    changeItem: (payload, rootState) => {
      dispatch.items.CHANGE_ITEM(payload);
    },
  }),
};
