
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, afterEach, expect } from "vitest";

import { Calculator, operations, numbers, equalSign } from '../src/Calculator';


//Para simular eventos de usuarios, mejor usar la librería user-event en lugar de fireEvent ->
//https://github.com/testing-library/user-event


describe('Calculator', () => {

  afterEach(cleanup);

  it('should render component', () => {

    render(<Calculator />)
  });

  it('should render tittle correctly', () => {

    render(<Calculator />);
    screen.getByText('Calculator')
  });

  it('should render numbers', () => {

    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getByText(number)
    })
  });

  it('should render 4 rows', () => {

    render(<Calculator />);
    const rowsScreen = screen.getAllByRole('row');
    expect(rowsScreen.length).toBe(4);
  });

  it('should render operations', () => {

    render(<Calculator />);
    operations.forEach((operation) => {
      screen.getByText(operation)
    })
  });

  it('should render equal sign', () => {
    render(<Calculator />);
    screen.getByText('=');
  });

  it('should render an input to show numbers and operation', () => {
    render(<Calculator />);
    screen.getByRole('textbox');
  });

  it('should user input after clicking a number', () => {
    render(<Calculator />);

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1')
  });

  it('should user input after clicking several numbers', () => {
    render(<Calculator />);

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('123')
  });

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />);

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1+1')
  });

  it('should calculate based on user input and show the result', () => {
    render(<Calculator />);

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2')
  })
})