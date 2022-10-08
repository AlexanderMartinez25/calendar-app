import { authSlice } from "../../../src/store";
import { initialState } from "../../fixtures/authState";

describe("Pruebas en authSlice", () => {
  test("debe de regresar el estado inicial", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });
});
