import React from 'react';
import { dataMock } from '../../mockData';
import { screen } from '@testing-library/react';

import { TypesPanel, TypesPanelProps } from './TypesPanel';
import { buildUiSchema, FieldType, ObjectKind, ROOT_POINTER, SchemaModel } from '@altinn/schema-model';
import { mockUseTranslation } from '../../../../../testing/mocks/i18nMock';
import { renderWithProviders } from '../../../test/renderWithProviders';
import { DragAndDropTree } from 'app-shared/components/DragAndDropTree';

const typesText = 'Typer';
const texts = {
  'schema_editor.add': 'Legg til',
  'schema_editor.add_element': 'Add Element',
  'schema_editor.add_property': 'Legg til felt',
  'schema_editor.add_reference': 'Legg til referanse',
  'schema_editor.delete': 'Slett',
  'schema_editor.field': 'Felt',
  'schema_editor.reference': 'Referanse',
  'schema_editor.types': typesText,
};

// Mocks:
jest.mock('react-i18next', () => ({ useTranslation: () => mockUseTranslation(texts) }));

const render = (props?: Partial<TypesPanelProps>) => {
  const defaultProps: TypesPanelProps = {
    uiSchemaNode: {
      children: [],
      custom: {},
      fieldType: FieldType.Object,
      implicitType: false,
      isArray: false,
      isNillable: false,
      isRequired: false,
      objectKind: ObjectKind.Field,
      pointer: '#/$defs/Test',
      restrictions: {},
    },
  };
  const schemaNodes = buildUiSchema(dataMock);
  const schemaModel = SchemaModel.fromArray(schemaNodes);
  return renderWithProviders({
    appContextProps: { schemaModel },
  })(
    <DragAndDropTree.Provider onAdd={jest.fn()} onMove={jest.fn()} rootId={ROOT_POINTER}>
      <TypesPanel {...defaultProps} {...props} />
    </DragAndDropTree.Provider>
  );
};

describe('TypesPanel', () => {
  it('should render the tree view for the supplied type', () => {
    render();
    expect(screen.getByRole('button', { name: 'Legg til' })).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
