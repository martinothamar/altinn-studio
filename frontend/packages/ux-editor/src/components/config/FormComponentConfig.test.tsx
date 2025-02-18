import React from 'react';
import type { FormComponentConfigProps } from './FormComponentConfig';
import { FormComponentConfig } from './FormComponentConfig';
import { renderWithProviders } from '../../testing/mocks';
import { componentMocks } from '../../testing/componentMocks';
import InputSchema from '../../testing/schemas/json/component/Input.schema.v1.json';
import DatepickerSchema from '../../testing/schemas/json/component/Datepicker.schema.v1.json';
import type { ServicesContextProps } from 'app-shared/contexts/ServicesContext';
import { screen } from '@testing-library/react';
import { textMock } from '@studio/testing/mocks/i18nMock';
import type { KeyValuePairs } from 'app-shared/types/KeyValuePairs';
import userEvent from '@testing-library/user-event';
import { ComponentType } from 'app-shared/types/ComponentType';

const somePropertyName = 'somePropertyName';
const customTextMockToHandleUndefined = (
  keys: string | string[],
  variables?: KeyValuePairs<string>,
) => {
  const key = Array.isArray(keys) ? keys[0] : keys;
  if (key === `ux_editor.component_properties_description.${somePropertyName}`) return key;
  return variables
    ? '[mockedText(' + key + ', ' + JSON.stringify(variables) + ')]'
    : '[mockedText(' + key + ')]';
};

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: customTextMockToHandleUndefined,
  }),
}));

describe('FormComponentConfig', () => {
  it('should render expected components', async () => {
    render({});

    const properties = [
      'grid',
      'readOnly',
      'required',
      'hidden',
      'renderAsSummary',
      'variant',
      'autocomplete',
      'maxLength',
      'labelSettings',
      'pageBreak',
      'formatting',
    ];

    for (const property of properties) {
      expect(
        await screen.findByText(textMock(`ux_editor.component_properties.${property}`)),
      ).toBeInTheDocument();
    }
  });

  it('should render "RedirectToLayoutSet"', () => {
    render({
      props: {
        component: {
          id: 'subform-unit-test-id',
          layoutSet: 'subform-unit-test-layout-set',
          itemType: 'COMPONENT',
          type: ComponentType.Subform,
        },
        schema: {
          properties: {
            layoutSet: 'subform-unit-test-layout-set',
          },
        },
      },
    });

    expect(screen.getByText(textMock('ux_editor.component_properties.subform.go_to_layout_set')));
  });

  it('should render list of unsupported properties', () => {
    render({
      props: {
        hideUnsupported: false,
        schema: {
          ...InputSchema,
          properties: {
            ...InputSchema.properties,
            unsupportedProperty: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
        },
      },
    });
    expect(
      screen.getByText(textMock('ux_editor.edit_component.unsupported_properties_message')),
    ).toBeInTheDocument();
    expect(screen.getByText('unsupportedProperty')).toBeInTheDocument();
  });

  it('should not render list of unsupported properties if hideUnsupported is true', () => {
    render({
      props: {
        hideUnsupported: true,
        schema: {
          ...InputSchema,
          properties: {
            ...InputSchema.properties,
            unsupportedProperty: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
        },
      },
    });
    expect(
      screen.queryByText(textMock('ux_editor.edit_component.unsupported_properties_message')),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('unsupportedProperty')).not.toBeInTheDocument();
  });

  it('should not render property if it is null', () => {
    render({
      props: {
        hideUnsupported: true,
        schema: {
          ...InputSchema,
          properties: {
            ...InputSchema.properties,
            nullProperty: null,
          },
        },
      },
    });
    expect(screen.queryByText('nullProperty')).not.toBeInTheDocument();
  });

  it('should render nothing if schema is undefined', () => {
    render({
      props: {
        schema: undefined,
      },
    });
    expect(
      screen.queryByText(textMock('ux_editor.component_properties.grid')),
    ).not.toBeInTheDocument();
  });

  it('should render nothing if schema properties are undefined', () => {
    render({
      props: {
        schema: {
          properties: undefined,
        },
      },
    });
    expect(
      screen.queryByText(textMock('ux_editor.component_properties.grid')),
    ).not.toBeInTheDocument();
  });

  it('should show description text for objects if key is defined', () => {
    render({
      props: {
        schema: InputSchema,
      },
    });
    expect(
      screen.getByText(textMock('ux_editor.component_properties_description.pageBreak')),
    ).toBeInTheDocument();
  });

  it('should render default boolean values if defined', () => {
    render({
      props: {
        schema: DatepickerSchema,
      },
    });
    const timeStampSwitch = screen.getByRole('checkbox', {
      name: textMock('ux_editor.component_properties.timeStamp'),
    });
    expect(timeStampSwitch).toBeChecked();
  });

  it('should call updateComponent with false value when checking a default true property switch', async () => {
    const user = userEvent.setup();
    const handleComponentUpdateMock = jest.fn();
    //const { component: datePickerComponent } = componentMocks;
    render({
      props: {
        schema: DatepickerSchema,
        handleComponentUpdate: handleComponentUpdateMock,
      },
    });
    const timeStampSwitch = screen.getByRole('checkbox', {
      name: textMock('ux_editor.component_properties.timeStamp'),
    });
    await user.click(timeStampSwitch);
    expect(handleComponentUpdateMock).toHaveBeenCalledWith(
      expect.objectContaining({ timeStamp: false }),
    );
  });

  it('should show description from schema for objects if key is not defined', () => {
    const descriptionFromSchema = 'Some description for some object property';
    render({
      props: {
        schema: {
          ...InputSchema,
          properties: {
            ...InputSchema.properties,
            somePropertyName: {
              type: 'object',
              properties: {},
              description: descriptionFromSchema,
            },
          },
        },
      },
    });
    expect(screen.getByText(descriptionFromSchema)).toBeInTheDocument();
  });

  it('should not render property if it is unsupported', () => {
    render({
      props: {
        schema: {
          ...InputSchema,
          properties: {
            ...InputSchema.properties,
            unsupportedProperty: {
              type: 'object',
              properties: {},
              additionalProperties: {
                type: 'string',
              },
            },
          },
        },
      },
    });
    expect(
      screen.queryByText(textMock(`ux_editor.component_properties.unsupportedProperty`)),
    ).not.toBeInTheDocument();
  });

  it('should only render array properties with items of type string AND enum values', () => {
    render({
      props: {
        schema: {
          ...InputSchema,
          properties: {
            ...InputSchema.properties,
            supportedArrayProperty: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['option1', 'option2'],
              },
            },
            unsupportedArrayProperty: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    });
    expect(
      screen.getByRole('combobox', {
        name: textMock('ux_editor.component_properties.supportedArrayProperty'),
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText(textMock('ux_editor.component_properties.unsupportedArrayProperty')),
    ).not.toBeInTheDocument();
  });

  const render = ({
    props = {},
    queries = {},
  }: {
    props?: Partial<FormComponentConfigProps>;
    queries?: Partial<ServicesContextProps>;
  }) => {
    const { Input: inputComponent } = componentMocks;
    const defaultProps: FormComponentConfigProps = {
      schema: InputSchema,
      editFormId: '',
      component: inputComponent,
      handleComponentUpdate: jest.fn(),
      hideUnsupported: false,
    };
    return renderWithProviders(<FormComponentConfig {...defaultProps} {...props} />, { queries });
  };
});
