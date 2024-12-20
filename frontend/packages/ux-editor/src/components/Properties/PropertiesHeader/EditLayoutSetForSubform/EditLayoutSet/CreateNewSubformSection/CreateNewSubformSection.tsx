import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StudioCard,
  StudioParagraph,
  StudioRecommendedNextAction,
  StudioTextfield,
} from '@studio/components';
import { useValidateLayoutSetName } from 'app-shared/hooks/useValidateLayoutSetName';
import type { LayoutSets } from 'app-shared/types/api/LayoutSetsResponse';
import { SubformDataModel } from './SubformDataModel';
import { CreateNewSubformButtons } from './CreateNewSubformButtons';
import { SubformInstructions } from './SubformInstructions';
import { useCreateSubform } from '@altinn/ux-editor/hooks/useCreateSubform';

type CreateNewSubformSectionProps = {
  layoutSets: LayoutSets;
  setShowCreateSubformCard: (showCreateSubform: boolean) => void;
  hasSubforms: boolean;
  recommendedNextActionText: {
    title: string;
    description: string;
  };
  onComponentUpdate: (subform: string) => void;
};

export const CreateNewSubformSection = ({
  layoutSets,
  setShowCreateSubformCard,
  hasSubforms,
  recommendedNextActionText: { title, description },
  onComponentUpdate,
}: CreateNewSubformSectionProps): React.ReactElement => {
  const { t } = useTranslation();
  const { validateLayoutSetName } = useValidateLayoutSetName();
  const [nameError, setNameError] = useState<string>();
  const [newDataModel, setNewDataModel] = useState<string>('');
  const [selectedDataModel, setSelectedDataModel] = useState<string>('');
  const [displayDataModelInput, setDisplayDataModelInput] = useState(false);
  const { createSubform, isPendingNewSubformMutation } = useCreateSubform();

  const handleSubformName = (subformName: string) => {
    const subformNameValidation = validateLayoutSetName(subformName, layoutSets);
    setNameError(subformNameValidation);
  };

  const handleCloseButton = () => {
    if (displayDataModelInput) {
      setNewDataModel('');
      setDisplayDataModelInput(false);
    } else {
      setShowCreateSubformCard(false);
    }
  };

  const handleCreateSubformSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData: FormData = new FormData(e.currentTarget);
    const newSubformName = formData.get('subform') as string;
    const subformDataType = formData.get('subformDataModel') as string;
    const newSubformDataType = formData.get('newSubformDataModel') as string;

    createSubform({
      layoutSetName: newSubformName,
      onSubformCreated: onComponentUpdate,
      dataType: subformDataType || newSubformDataType,
      newDataModel: !!newSubformDataType,
    });
  };

  const hasInvalidSubformName = nameError === undefined || Boolean(nameError);
  const hasInvalidDataModel = displayDataModelInput ? !newDataModel : !selectedDataModel;

  return (
    <StudioRecommendedNextAction
      title={t(title)}
      description={t(description)}
      hideSaveButton={true}
      hideSkipButton={true}
      onSave={handleCreateSubformSubmit}
    >
      {!hasSubforms && (
        <>
          <StudioParagraph size='sm'>
            {t('ux_editor.component_properties.subform.no_existing_layout_set_empty_subform')}
          </StudioParagraph>
          <SubformInstructions />
        </>
      )}
      <StudioCard>
        <StudioCard.Content>
          <StudioTextfield
            name='subform'
            label={t('ux_editor.component_properties.subform.created_layout_set_name')}
            size='sm'
            disabled={isPendingNewSubformMutation}
            onChange={(e) => handleSubformName(e.target.value)}
            error={nameError}
          />
          <SubformDataModel
            setDisplayDataModelInput={setDisplayDataModelInput}
            setNewDataModel={setNewDataModel}
            displayDataModelInput={displayDataModelInput}
            setSelectedDataModel={setSelectedDataModel}
          />
          <CreateNewSubformButtons
            isPendingNewSubformMutation={isPendingNewSubformMutation}
            disableSaveButton={hasInvalidSubformName || hasInvalidDataModel}
            displayCloseButton={hasSubforms || displayDataModelInput}
            handleCloseButton={handleCloseButton}
          />
        </StudioCard.Content>
      </StudioCard>
    </StudioRecommendedNextAction>
  );
};
