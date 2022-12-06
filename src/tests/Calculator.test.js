import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  
  it('should be able to add values together', ()=> {
    const button1 = container.getByTestId('number1')
    const add = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add)
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5')

  })

  it('Should be able to subtract provided values', ()=> {
    const button7 = container.getByTestId('number7')
    const subtract = container.getByTestId('operator-subtract')
    const button4 = container.getByTestId('number4')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract)
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3')

  })

  it('Should be able to multiply provided values', ()=> {
    const button3 = container.getByTestId('number3')
    const multiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply)
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15')

  })

  it('Should be able to divide provided values', ()=> {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide)
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3')
    
  })
  it('Should be able to concatenate multiple button clicks', ()=> {
    const button1 = container.getByTestId('number1')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(button1)
    fireEvent.click(button1)
    
    expect(runningTotal.textContent).toEqual('111')

  })

  it('Should be able chain multiple operations together', ()=> {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const multiply = container.getByTestId('operator-multiply')

    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide)
    fireEvent.click(button7);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('6')
    
  })
  it('Should be able chain multiple operations together', ()=> {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const multiply = container.getByTestId('operator-multiply')

    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide)
    fireEvent.click(button7);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('6')
    
  })

  it('Should be able to clear the running total but still allow for operations to be performed on previous value', ()=> {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const multiply = container.getByTestId('operator-multiply')
    const clear = container.getByTestId('clear')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    fireEvent.click(clear);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('6')
    
  })


})

