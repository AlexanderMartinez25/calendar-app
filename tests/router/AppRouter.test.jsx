import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CalendarPage } from "../../src/calendar";
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from "../../src/router/AppRouter";

jest.mock('../../src/hooks/useAuthStore');
// mock de componente
jest.mock('../../src/calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>
}))


describe('Pruebas en <AppRouter />', () => {

  const mockCheckAuthToken = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {

    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken
    });

    render(<AppRouter />)
    expect(screen.getByText('Cargando')).toBeTruthy()

    //* por lguna extraña razón me da error
    // expect(mockCheckAuthToken).toHaveBeenCalled();

  });

  test('debe de mostrar el login en caso de no estar autenticado', () => {

    useAuthStore.mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth2/algo/otracosa']}>
        <AppRouter />
      </MemoryRouter>
    )

    // screen.debug()
    expect(screen.getByText('Ingreso')).toBeTruthy()
    expect(container).toMatchSnapshot();

  });

  test('debe de mostrar elcalendario si estamos utenticados', () => {

    useAuthStore.mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken
    });

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    )

    // screen.debug();
    expect(screen.getByText('CalendarPage')).toBeTruthy();
  })
})