import type { ReactNode } from 'react';
import React from 'react';
import classes from './LocalChanges.module.css';
import { useTranslation } from 'react-i18next';
import { Paragraph } from '@digdir/designsystemet-react';
import { DownloadIcon, TrashIcon } from '@studio/icons';
import { LocalChangesActionButton } from '../LocalChangesActionButton';
import { DeleteModal } from '../DeleteModal';
import { repoDownloadPath } from 'app-shared/api/paths';
import { useStudioEnvironmentParams } from 'app-shared/hooks/useStudioEnvironmentParams';

export type LocalChangesProps = {
  onDelete: () => void;
};

export const LocalChanges = ({ onDelete }: LocalChangesProps): ReactNode => {
  const { t } = useTranslation();
  const { app, org } = useStudioEnvironmentParams();
  const deleteDialogRef = React.useRef<HTMLDialogElement>(null);

  const openDeleteDialog = () => {
    deleteDialogRef.current?.showModal();
  };

  return (
    <div className={classes.contentWrapper}>
      <Paragraph size='small'>{t('local_changes.modal_info_text')}</Paragraph>
      <LocalChangesActionButton
        label={t('local_changes.modal_download_your_files_label')}
        description={t('local_changes.modal_download_your_files_description')}
        icon={<DownloadIcon />}
        text={t('local_changes.modal_download_only_changed_button')}
        action={{ type: 'link', href: repoDownloadPath(org, app) }}
      />
      <LocalChangesActionButton
        label={t('local_changes.modal_download_all_files_label')}
        description={t('local_changes_modal.download_all_files_description')}
        icon={<DownloadIcon />}
        text={t('local_changes_modal.download_all_button')}
        action={{ type: 'link', href: repoDownloadPath(org, app, true) }}
      />
      <LocalChangesActionButton
        label={t('local_changes.modal_delete_label')}
        description={t('local_changes.modal_delete_description')}
        color='danger'
        icon={<TrashIcon />}
        text={t('local_changes.modal_delete_button')}
        action={{ type: 'button', onClick: openDeleteDialog }}
      />
      <DeleteModal app={app} org={org} onDelete={onDelete} ref={deleteDialogRef} />
    </div>
  );
};
