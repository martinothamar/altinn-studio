import type { ReactNode } from 'react';
import React from 'react';
import classes from './GoBackButton.module.css';
import cn from 'classnames';
import { ArrowLeftIcon } from '@studio/icons';
import { Paragraph } from '@digdir/designsystemet-react';
import { NavLink } from 'react-router-dom';

export type GoBackButtonProps = {
  /**
   * Classname for navigation element
   */
  className?: string;
  /**
   * Text on the back button
   */
  text: string;
  /**
   * Where to navigate to
   */
  to: string;
};

/**
 * @component
 *    Displays the back button on top of the LeftNavigationBar
 *
 * @example
 *      <GoBackButton
 *        className={classes.navigationElement}
 *        text={backButtonText}
 *        to={someUrl}
 *      />
 *
 * @property {string}[className] - Classname for navigation element
 * @property {string}[text] - Text on the back button
 * @property {string}[to] - Where to navigate to
 *
 * @returns {ReactNode} - The rendered component
 */
export const GoBackButton = ({ className, text, to }: GoBackButtonProps): ReactNode => {
  return (
    <NavLink className={cn(className, classes.backButton)} to={to}>
      <ArrowLeftIcon className={classes.icon} />
      <Paragraph size='small' variant='short' className={classes.buttonText}>
        {text}
      </Paragraph>
    </NavLink>
  );
};
