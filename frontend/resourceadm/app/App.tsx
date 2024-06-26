import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SearchField } from '@altinn/altinn-design-system';
import classes from './App.module.css';
import './App.css';
import { useUserQuery } from 'app-shared/hooks/queries';
import { useOrganizationsQuery } from '../hooks/queries';
import { StudioPageSpinner } from '@studio/components';
import { ErrorMessage } from '../components/ErrorMessage';
import { ScreenReaderSpan } from '../components/ScreenReaderSpan';
import { PageLayout } from '../pages/PageLayout';
import { ResourcePage } from '../pages/ResourcePage';
import { ResourceDashboardPage } from '../pages/ResourceDashboardPage';
import { ErrorPage } from '../pages/ErrorPage';
import { RedirectPage } from '../pages/RedirectPage';
import { ListAdminPage } from '../pages/ListAdminPage';
import { AccessListPage } from '../pages/AccessListPage';

export const App = (): React.JSX.Element => {
  const { data: user, isError: isUserError } = useUserQuery();
  const { data: organizations, isError: isOrganizationsError } = useOrganizationsQuery();

  const { t } = useTranslation();
  const componentIsReady = user && organizations;

  if (isUserError || isOrganizationsError) {
    return (
      <div>
        {isUserError && (
          <ErrorMessage
            title={t('resourceadm.dashboard_userdata_error_header')}
            message={t('resourceadm.dashboard_userdata_error_body')}
          />
        )}
        {isOrganizationsError && (
          <ErrorMessage
            title={t('resourceadm.dashboard_organizationdata_error_header')}
            message={t('resourceadm.dashboard_organizationdata_error_body')}
          />
        )}
      </div>
    );
  }

  // PageLayout banner uses organization, named as selectedContext
  const basePath = '/:selectedContext/:app';

  if (componentIsReady) {
    return (
      <div className={classes.root}>
        {/*
            This is a "hack" to make sure that the resourceadm doesnt break. We do not
            use any other dependencies to the old altin-design-system (which for some reason
            is needed). By hiding the component it can not be seen by the user in the browser.
        */}
        <div style={{ display: 'none' }}>
          <SearchField id='hack' aria-labelledby='hack' />
          <ScreenReaderSpan id='hack' label='hack' />
        </div>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path={basePath} element={<ResourceDashboardPage />} />
            <Route path={`${basePath}/accesslists/:env?`} element={<ListAdminPage />} />
            <Route
              path={`${basePath}/accesslists/:env/:accessListId`}
              element={<AccessListPage />}
            />
            <Route
              path={`${basePath}/resource/:resourceId/:pageType/:env?/:accessListId?`}
              element={<ResourcePage />}
            />
            <Route path='/' element={<ErrorPage />} />
            <Route path='/:selectedContext' element={<RedirectPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
  return <StudioPageSpinner />;
};
