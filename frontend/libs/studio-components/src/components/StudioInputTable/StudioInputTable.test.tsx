import type { ForwardedRef, ReactNode } from 'react';
import React from 'react';
import { StudioInputTable } from './';
import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { TestTable } from './test-data/TestTable';
import type { StudioInputTableProps } from './StudioInputTable';
import { expect } from '@storybook/test';
import { testRefForwarding } from '../../test-utils/testRefForwarding';
import { testRootClassNameAppending } from '../../test-utils/testRootClassNameAppending';
import { testCustomAttributes } from '../../test-utils/testCustomAttributes';
import {
  buttonLabel,
  checkboxLabel,
  headerCheckboxLabel,
  textareaLabel,
  textfieldLabel,
} from './test-data/testTableData';
import type { UserEvent } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import type { CellTextfieldProps } from './Cell/CellTextfield';
import type { CellTextareaProps } from './Cell/CellTextarea';
import type { CellCheckboxProps } from './Cell/CellCheckbox';
import type { CellButtonProps } from './Cell/CellButton';
import type { HTMLCellInputElement } from './types/HTMLCellInputElement';
import type { EventName } from './types/EventName';
import type { EventProps } from './types/EventProps';
import type { EventPropName } from './types/EventPropName';
import { StringUtils } from '@studio/pure-functions';

type ElementName = 'checkbox' | 'textfield' | 'textarea' | 'button';
type NativeElement<Name extends ElementName> = {
  checkbox: HTMLInputElement;
  textfield: HTMLInputElement;
  textarea: HTMLTextAreaElement;
  button: HTMLButtonElement;
}[Name];

// Test data:
const onChangeAny = jest.fn();
const onFocusAny = jest.fn();
const onBlurAny = jest.fn();
const defaultProps: StudioInputTableProps = { onChangeAny, onFocusAny, onBlurAny };

describe('StudioInputTable', () => {
  afterEach(jest.clearAllMocks);

  it('Renders a table', () => {
    renderStudioInputTable();
    expect(getTable()).toBeInTheDocument();
  });

  it('Forwards the ref if provided', () => {
    const renderTable = (ref: ForwardedRef<HTMLTableElement>) =>
      render(
        <StudioInputTable ref={ref}>
          <StudioInputTable.Body>
            <StudioInputTable.Row>
              <StudioInputTable.Cell />
            </StudioInputTable.Row>
          </StudioInputTable.Body>
        </StudioInputTable>,
      );
    testRefForwarding<HTMLTableElement>(renderTable, getTable);
  });

  it('Appends the given class to the table', () => {
    testRootClassNameAppending((className) => renderStudioInputTable({ className }));
  });

  it('Applies the given props to the table', () => {
    testCustomAttributes<HTMLTableElement>(renderStudioInputTable, getTable);
  });

  it('Renders all headers', () => {
    render(<TestTable />);
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(expectedNumberOfColumns);
  });

  it('Renders all rows', () => {
    render(<TestTable />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(expectedNumberOfRows);
  });

  it('Focuses on the first input element when the user tabs into the table', async () => {
    const user = userEvent.setup();
    render(<TestTable />);
    const firstInput = getCheckbox(headerCheckboxLabel);
    await user.tab();
    expect(firstInput).toHaveFocus();
  });

  it('Lets the user focus on the input elements using the arrow and enter keys', async () => {
    const user = userEvent.setup();
    render(<TestTable />);
    const headerCheckbox = getCheckbox(headerCheckboxLabel);
    await user.tab();
    expect(headerCheckbox).toHaveFocus();
    await user.keyboard('{ArrowRight}'); // No input elements to the right - keep in same position
    expect(headerCheckbox).toHaveFocus();
    await user.keyboard('{ArrowDown}'); // Move down to checkbox 1
    expect(getCheckboxInRow(1)).toHaveFocus();
    await user.keyboard('{ArrowRight}'); // Move right to textfield 1
    expect(getTextfieldInRow(1)).toHaveFocus();
    await user.keyboard('{Enter}'); // Move down to textfield 2
    expect(getTextfieldInRow(2)).toHaveFocus();
    await user.keyboard('{ArrowRight}'); // Move right to textarea 2
    expect(getTextareaInRow(2)).toHaveFocus();
    await user.keyboard('{ArrowRight}'); // Move right to button 2
    expect(getButtonInRow(2)).toHaveFocus();
    await user.keyboard('{ArrowUp}'); // Move up to button 1
    expect(getButtonInRow(1)).toHaveFocus();
    await user.keyboard('{ArrowLeft}'); // Move left to textarea 1
    expect(getTextareaInRow(1)).toHaveFocus();
  });

  type TextboxTestCase = () => HTMLInputElement | HTMLTextAreaElement;
  const textboxTestCases: { [key: string]: TextboxTestCase } = {
    textfield: () => getTextfieldInRow(2),
    textarea: () => getTextareaInRow(2),
  };
  type TextboxTestCaseName = keyof typeof textboxTestCases;
  const textboxTestCaseNames: TextboxTestCaseName[] = Object.keys(textboxTestCases);

  it.each(textboxTestCaseNames)(
    'Lets the user move the caret in %s elements using the arrow keys',
    async (key) => {
      const user = userEvent.setup();
      render(<TestTable />);
      const textbox = textboxTestCases[key]();
      await user.type(textbox, 'test');
      await user.keyboard('{ArrowLeft}'); // Text field should keep focus and move caret to the left
      expect(textbox).toHaveFocus();
      expectCaretPosition(textbox, 3);
      await user.keyboard('{ArrowRight}'); // Text field should keep focus and move caret to the right
      expect(textbox).toHaveFocus();
      expectCaretPosition(textbox, 4);
      await user.keyboard('{ArrowRight}'); // Focus should move to the next input element since the caret is at the end
      expect(textbox).not.toHaveFocus();
    },
  );

  it.each(textboxTestCaseNames)('Selects the text in %s elements on focus', async (key) => {
    const user = userEvent.setup();
    render(<TestTable />);
    const textbox = textboxTestCases[key]();
    await user.type(textbox, 'test');
    await user.keyboard('{ArrowRight}'); // Move focus out
    await user.keyboard('{ArrowLeft}'); // Move focus back in - now the text should be selected
    expect(textbox.selectionStart).toBe(0);
    expect(textbox.selectionEnd).toBe(4);
  });

  describe.each(textboxTestCaseNames)(
    'Does not move focus when text in a %s is selected and the user presses an arrow key',
    (key) => {
      const arrowKeys: ArrowKey[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

      test.each(arrowKeys)('%s', async (arrowKey) => {
        const user = userEvent.setup();
        render(<TestTable />);
        const textbox = textboxTestCases[key]();
        await user.type(textbox, 'test');
        selectAllText(textbox);
        await user.keyboard(`{${arrowKey}}`);
        expect(textbox).toHaveFocus();
      });
    },
  );

  describe.each(textboxTestCaseNames)(
    'Moves focus from %s when the user presses an arrow key and caret cannot be moved further',
    (key) => {
      const arrowKeysThatShouldMoveFocusWhenCaretIsAtStart: ArrowKey[] = ['ArrowUp', 'ArrowLeft'];
      const arrowKeysThatShouldMoveFocusWhenCaretIsAtEnd: ArrowKey[] = ['ArrowDown', 'ArrowRight'];

      it.each(arrowKeysThatShouldMoveFocusWhenCaretIsAtStart)(
        'Moves focus when caret is at start and user presses %s',
        async (arrowKey) => {
          const user = userEvent.setup();
          render(<TestTable />);
          const textbox = textboxTestCases[key]();
          await user.type(textbox, 'test');
          placeCaretAtStart(textbox);
          await user.keyboard(`{${arrowKey}}`);
          expect(textbox).not.toHaveFocus();
        },
      );

      it.each(arrowKeysThatShouldMoveFocusWhenCaretIsAtEnd)(
        'Moves focus when caret is at end and user presses %s',
        async (arrowKey) => {
          const user = userEvent.setup();
          render(<TestTable />);
          const textbox = textboxTestCases[key]();
          await user.type(textbox, 'test');
          placeCaretAtEnd(textbox);
          await user.keyboard(`{${arrowKey}}`);
          expect(textbox).not.toHaveFocus();
        },
      );
    },
  );

  describe.each(textboxTestCaseNames)(
    'Does not move focus when the user presses an arrow key and the caret is in the middle of the text in a %s',
    () => {
      const arrowKeys: ArrowKey[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

      test.each(arrowKeys)('%s', async (arrowKey) => {
        const user = userEvent.setup();
        render(<TestTable />);
        const textbox = textboxTestCases.textfield();
        await user.type(textbox, 'test');
        placeCaretAtPosition(textbox, 2);
        await user.keyboard(`{${arrowKey}}`);
        expect(textbox).toHaveFocus();
      });
    },
  );

  describe('Forwards the refs to the input elements', () => {
    type TestCase<Element extends HTMLElement = HTMLElement> = {
      render: (ref: ForwardedRef<Element>) => RenderResult;
      getElement: () => Element;
    };
    const testLabel = 'test';
    const testCases: {
      [Name in ElementName]: TestCase<NativeElement<Name>>;
    } = {
      checkbox: {
        render: (ref) => renderSingleCheckboxCell({ value: 'test', 'aria-label': testLabel }, ref),
        getElement: () => getCheckbox(testLabel),
      },
      textfield: {
        render: (ref) => renderSingleTextfieldCell({ label: testLabel }, ref),
        getElement: () => getTextbox(testLabel) as HTMLInputElement,
      },
      textarea: {
        render: (ref) => renderSingleTextareaCell({ label: testLabel }, ref),
        getElement: () => getTextbox(testLabel) as HTMLTextAreaElement,
      },
      button: {
        render: (ref) => renderSingleButtonCell({ children: testLabel }, ref),
        getElement: () => getButton(testLabel),
      },
    };

    test.each(Object.keys(testCases))('%s', (key) => {
      const { render: renderComponent, getElement } = testCases[key];
      testRefForwarding(renderComponent, getElement);
    });
  });

  describe('Triggers input level and table level event functions with the same events when the user performs a corresponding action', () => {
    type TestCase<Element extends HTMLCellInputElement, Event extends EventName> = {
      render: (mockFn: EventProps<Element>[EventPropName<Event>]) => RenderResult;
      action: (user: UserEvent) => Promise<void>;
    };

    const testCases: {
      [Name in ElementName]: {
        [Event in EventName]?: TestCase<NativeElement<Name>, Event>;
      };
    } = {
      textfield: {
        change: {
          render: (onChange) => renderSingleTextfieldCell({ label: 'test', onChange }),
          action: (user) => user.type(screen.getByRole('textbox'), 'a'),
        },
        focus: {
          render: (onFocus) => renderSingleTextfieldCell({ label: 'test', onFocus }),
          action: (user) => user.click(screen.getByRole('textbox')),
        },
        blur: {
          render: (onBlur) => renderSingleTextfieldCell({ label: 'test', onBlur }),
          action: async (user) => {
            await user.click(screen.getByRole('textbox'));
            await user.tab();
          },
        },
      },
      textarea: {
        change: {
          render: (onChange) => renderSingleTextareaCell({ label: 'test', onChange }),
          action: (user) => user.type(screen.getByRole('textbox'), 'a'),
        },
        focus: {
          render: (onFocus) => renderSingleTextareaCell({ label: 'test', onFocus }),
          action: (user) => user.click(screen.getByRole('textbox')),
        },
        blur: {
          render: (onBlur) => renderSingleTextareaCell({ label: 'test', onBlur }),
          action: async (user) => {
            await user.click(screen.getByRole('textbox'));
            await user.tab();
          },
        },
      },
      button: {
        focus: {
          render: (onFocus) => renderSingleButtonCell({ children: 'test', onFocus }),
          action: (user) => user.click(screen.getByRole('button')),
        },
        blur: {
          render: (onBlur) => renderSingleButtonCell({ children: 'test', onBlur }),
          action: async (user) => {
            await user.click(screen.getByRole('button'));
            await user.tab();
          },
        },
      },
      checkbox: {
        change: {
          render: (onChange) =>
            renderSingleCheckboxCell({ value: 'test', 'aria-label': 'test', onChange }),
          action: (user) => user.click(screen.getByRole('checkbox')),
        },
        focus: {
          render: (onFocus) =>
            renderSingleCheckboxCell({ value: 'test', 'aria-label': 'test', onFocus }),
          action: (user) => user.click(screen.getByRole('checkbox')),
        },
        blur: {
          render: (onBlur) =>
            renderSingleCheckboxCell({ value: 'test', 'aria-label': 'test', onBlur }),
          action: async (user) => {
            await user.click(screen.getByRole('checkbox'));
            await user.tab();
          },
        },
      },
    };

    describe.each(Object.keys(testCases))('%s', (key) => {
      const testCasesForElement = testCases[key];

      test.each(Object.keys(testCasesForElement))('%s', async (eventName) => {
        const user = userEvent.setup();
        const onEvent = jest.fn();
        const { render: renderComponent, action } = testCasesForElement[eventName];
        renderComponent(onEvent);
        await action(user);
        await expect(onEvent).toHaveBeenCalledTimes(1);

        const tablePropName = 'on' + StringUtils.capitalize(eventName) + 'Any';
        const tableProp = defaultProps[tablePropName];
        await expect(tableProp).toHaveBeenCalledTimes(1);
        const inputEvent = onEvent.mock.calls[0][0];
        const tableEvent = tableProp.mock.calls[0][0];
        await expect(inputEvent).toBe(tableEvent);
      });
    });
  });
});

type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

const renderStudioInputTable = (props: StudioInputTableProps = {}): RenderResult =>
  render(<TestTable {...defaultProps} {...props} />);

const renderSingleTextfieldCell = (
  props: CellTextfieldProps,
  ref?: ForwardedRef<HTMLInputElement>,
): RenderResult =>
  render(
    <SingleRow>
      <StudioInputTable.Cell.Textfield {...props} ref={ref} />
    </SingleRow>,
  );

const renderSingleTextareaCell = (
  props: CellTextareaProps,
  ref?: ForwardedRef<HTMLTextAreaElement>,
): RenderResult =>
  render(
    <SingleRow>
      <StudioInputTable.Cell.Textarea {...props} ref={ref} />
    </SingleRow>,
  );

const renderSingleButtonCell = (
  props: CellButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>,
): RenderResult =>
  render(
    <SingleRow>
      <StudioInputTable.Cell.Button {...props} ref={ref} />
    </SingleRow>,
  );

const renderSingleCheckboxCell = (
  props: CellCheckboxProps,
  ref?: ForwardedRef<HTMLInputElement>,
): RenderResult =>
  render(
    <SingleRow>
      <StudioInputTable.Cell.Checkbox {...props} ref={ref} />
    </SingleRow>,
  );

const getTable = (): HTMLTableElement => screen.getByRole('table');
const getCheckbox = (name: string): HTMLInputElement =>
  screen.getByRole('checkbox', { name }) as HTMLInputElement;
const getCheckboxInRow = (rowNumber: number): HTMLInputElement =>
  getCheckbox(checkboxLabel(rowNumber));
const getTextbox = (name: string) => screen.getByRole('textbox', { name });
const getTextfieldInRow = (rowNumber: number): HTMLInputElement =>
  getTextbox(textfieldLabel(rowNumber)) as HTMLInputElement;
const getTextareaInRow = (rowNumber: number): HTMLTextAreaElement =>
  getTextbox(textareaLabel(rowNumber)) as HTMLTextAreaElement;
const getButton = (name: string): HTMLButtonElement =>
  screen.getByRole('button', { name }) as HTMLButtonElement;
const getButtonInRow = (rowNumber: number): HTMLButtonElement =>
  getButton(buttonLabel(rowNumber)) as HTMLButtonElement;

const expectCaretPosition = (
  element: HTMLInputElement | HTMLTextAreaElement,
  position: number,
): void => {
  expect(element.selectionStart).toBe(position);
  expect(element.selectionEnd).toBe(position);
};

const selectAllText = (element: HTMLInputElement | HTMLTextAreaElement): void =>
  element.setSelectionRange(0, element.value.length);

const placeCaretAtStart = (element: HTMLInputElement | HTMLTextAreaElement): void =>
  placeCaretAtPosition(element, 0);

const placeCaretAtEnd = (element: HTMLInputElement | HTMLTextAreaElement): void =>
  placeCaretAtPosition(element, element.value.length);

const placeCaretAtPosition = (
  element: HTMLInputElement | HTMLTextAreaElement,
  position: number,
): void => element.setSelectionRange(position, position);

const expectedNumberOfColumns = 5;
const expectedNumberOfHeaderRows = 1;
const expectedNumberOfBodyRows = 3;
const expectedNumberOfRows = expectedNumberOfBodyRows + expectedNumberOfHeaderRows;

function SingleRow({ children }: { children: ReactNode }) {
  return (
    <StudioInputTable {...defaultProps}>
      <StudioInputTable.Body>
        <StudioInputTable.Row>{children}</StudioInputTable.Row>
      </StudioInputTable.Body>
    </StudioInputTable>
  );
}
