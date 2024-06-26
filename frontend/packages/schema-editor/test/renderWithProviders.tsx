import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { SchemaEditorAppContext, SchemaEditorAppContextProps } from '@altinn/schema-editor/contexts/SchemaEditorAppContext';
import { uiSchemaNodesMock } from './mocks/uiSchemaMock';
import { SchemaModel } from '../../schema-model';

export interface RenderWithProvidersData {
  appContextProps?: Partial<SchemaEditorAppContextProps>,
}

export const renderWithProviders = ({
  appContextProps = {},
}: RenderWithProvidersData = {
  appContextProps: {},
}) => (element: ReactNode) => {

  const allSelectedSchemaContextProps: SchemaEditorAppContextProps = {
    schemaModel: SchemaModel.fromArray(uiSchemaNodesMock),
    save: jest.fn(),
    selectedNodePointer: null,
    setSelectedNodePointer: jest.fn(),
    selectedTypePointer: null,
    setSelectedTypePointer: jest.fn(),
    ...appContextProps,
  };

  const result = render(
    <SchemaEditorAppContext.Provider value={allSelectedSchemaContextProps}>
      {element}
    </SchemaEditorAppContext.Provider>
  );

  const rerender = ({
    appContextProps: rerenderAppContextProps = {},
  }: RenderWithProvidersData = {
    appContextProps: {},
  }) => {
    const newAppContextProps: SchemaEditorAppContextProps = {
      schemaModel: SchemaModel.fromArray(uiSchemaNodesMock),
      save: jest.fn(),
      selectedNodePointer: null,
      setSelectedNodePointer: jest.fn(),
      selectedTypePointer: null,
      setSelectedTypePointer: jest.fn(),
      ...rerenderAppContextProps,
    };

    return (rerenderElement: ReactNode) => result.rerender(
      <SchemaEditorAppContext.Provider value={newAppContextProps}>
        {rerenderElement}
      </SchemaEditorAppContext.Provider>
    );
  };

  return { ...result, rerender };
};
