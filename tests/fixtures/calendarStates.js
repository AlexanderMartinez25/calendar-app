export const events = [
  {
    id: "1",
    start: new Date("2022-10-08 15:12:00"),
    end: Date("2022-10-08 17:12:00"),
    title: "Cumpleaños de Alex",
    notes: "Alguna nota",
  },
  {
    id: "2",
    start: new Date("2022-11-02 15:12:00"),
    end: Date("2022-11-02 17:12:00"),
    title: "Cumpleaños de Fátima",
    notes: "Alguna nota Fátima",
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWidthEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWidthActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
