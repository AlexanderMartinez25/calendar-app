import {
  calendarSlice,
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../../../src/store/calendar/calendarSlice";
import {
  calendarWidthEventsState,
  events,
  initialState,
} from "../../fixtures/calendarStates";

describe("Pruebas en calendarSlice", () => {
  test("debe de regresar el estado por defecto", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test("onSetActiveEvent debe de activar el evento", () => {
    const state = calendarSlice.reducer(
      calendarWidthEventsState,
      onSetActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test("onAddNewEvent debe de agregar el evento", () => {
    const newEvent = {
      id: "3",
      start: new Date("2022-11-08 15:12:00"),
      end: new Date("2022-11-08 17:12:00"),
      title: "Cumpleaños de Alex",
      notes: "Alguna nota",
    };

    const state = calendarSlice.reducer(
      calendarWidthEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events).toEqual([...events, newEvent]);
  });

  test("onUpdateEvent debe de agregar el evento", () => {
    const updatedEvent = {
      id: "1",
      start: new Date("2022-20-05 12:00:00"),
      end: new Date("2022-20-05 23:00:00"),
      title: "Cumpleaños de Alex actualizado!!",
      notes: "Alguna nota actualizado!!",
    };

    const state = calendarSlice.reducer(
      calendarWidthEventsState,
      onUpdateEvent(updatedEvent)
    );
    expect(state.events).toContain(updatedEvent);
  });
});
