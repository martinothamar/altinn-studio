import type { CodeList } from './types/CodeList';
import type { ReactElement } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { StudioInputTable } from '../StudioInputTable';
import type { CodeListItem } from './types/CodeListItem';
import { StudioButton } from '../StudioButton';
import {
  removeCodeListItem,
  addEmptyCodeListItem,
  changeCodeListItem,
  isCodeListEmpty,
} from './utils';
import { StudioCodeListEditorRow } from './StudioCodeListEditorRow/StudioCodeListEditorRow';
import type { CodeListEditorTexts } from './types/CodeListEditorTexts';
import {
  StudioCodeListEditorContext,
  useStudioCodeListEditorContext,
} from './StudioCodeListEditorContext';
import classes from './StudioCodeListEditor.module.css';
import { PlusIcon } from '@studio/icons';
import { StudioParagraph } from '../StudioParagraph';

export type StudioCodeListEditorProps = {
  codeList: CodeList;
  onChange: (codeList: CodeList) => void;
  texts: CodeListEditorTexts;
};

export function StudioCodeListEditor({
  codeList,
  onChange,
  texts,
}: StudioCodeListEditorProps): ReactElement {
  return (
    <StudioCodeListEditorContext.Provider value={{ texts }}>
      <StatefulCodeListEditor codeList={codeList} onChange={onChange} />
    </StudioCodeListEditorContext.Provider>
  );
}

type InternalCodeListEditorProps = Omit<StudioCodeListEditorProps, 'texts'>;

function StatefulCodeListEditor({
  codeList: defaultCodeList,
  onChange,
}: InternalCodeListEditorProps): ReactElement {
  const [codeList, setCodeList] = useState<CodeList>(defaultCodeList);

  useEffect(() => {
    setCodeList(defaultCodeList);
  }, [defaultCodeList]);

  const handleChange = useCallback(
    (newCodeList: CodeList) => {
      setCodeList(newCodeList);
      onChange(newCodeList);
    },
    [onChange],
  );

  return <ControlledCodeListEditor codeList={codeList} onChange={handleChange} />;
}

function ControlledCodeListEditor({
  codeList,
  onChange,
}: InternalCodeListEditorProps): ReactElement {
  const { texts } = useStudioCodeListEditorContext();

  const handleAddButtonClick = useCallback(() => {
    const updatedCodeList = addEmptyCodeListItem(codeList);
    onChange(updatedCodeList);
  }, [codeList, onChange]);

  return (
    <fieldset className={classes.codeListEditor}>
      <legend>{texts.codeList}</legend>
      <CodeListTable codeList={codeList} onChange={onChange} />
      <AddButton onClick={handleAddButtonClick} />
    </fieldset>
  );
}

function CodeListTable({ codeList, onChange }: InternalCodeListEditorProps): ReactElement {
  return isCodeListEmpty(codeList) ? (
    <EmptyCodeListTable />
  ) : (
    <CodeListTableWithContent codeList={codeList} onChange={onChange} />
  );
}

function EmptyCodeListTable(): ReactElement {
  const { texts } = useStudioCodeListEditorContext();
  return <StudioParagraph>{texts.emptyCodeList}</StudioParagraph>;
}

function CodeListTableWithContent(props: InternalCodeListEditorProps): ReactElement {
  return (
    <StudioInputTable>
      <Headings />
      <CodeLists {...props} />
    </StudioInputTable>
  );
}

function Headings(): ReactElement {
  const { texts } = useStudioCodeListEditorContext();

  return (
    <StudioInputTable.Head>
      <StudioInputTable.Row>
        <StudioInputTable.HeaderCell>{texts.label}</StudioInputTable.HeaderCell>
        <StudioInputTable.HeaderCell>{texts.description}</StudioInputTable.HeaderCell>
        <StudioInputTable.HeaderCell>{texts.value}</StudioInputTable.HeaderCell>
        <StudioInputTable.HeaderCell>{texts.delete}</StudioInputTable.HeaderCell>
      </StudioInputTable.Row>
    </StudioInputTable.Head>
  );
}

function CodeLists({ codeList, onChange }: InternalCodeListEditorProps): ReactElement {
  const handleDeleteButtonClick = useCallback(
    (index: number) => {
      const updatedCodeList = removeCodeListItem(codeList, index);
      onChange(updatedCodeList);
    },
    [codeList, onChange],
  );

  const handleChange = useCallback(
    (index: number, newItem: CodeListItem) => {
      const updatedCodeList = changeCodeListItem(codeList, index, newItem);
      onChange(updatedCodeList);
    },
    [codeList, onChange],
  );

  return (
    <StudioInputTable.Body>
      {codeList.map((item, index) => (
        <StudioCodeListEditorRow
          item={item}
          key={index}
          number={index + 1}
          onChange={(newItem) => handleChange(index, newItem)}
          onDeleteButtonClick={() => handleDeleteButtonClick(index)}
        />
      ))}
    </StudioInputTable.Body>
  );
}

type AddButtonProps = {
  onClick: () => void;
};

function AddButton({ onClick }: AddButtonProps): ReactElement {
  const { texts } = useStudioCodeListEditorContext();
  return (
    <StudioButton onClick={onClick} variant='secondary' icon={<PlusIcon />}>
      {texts.add}
    </StudioButton>
  );
}