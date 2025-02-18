import type { ReactElement } from 'react';
import React, { forwardRef, useCallback } from 'react';
import type { TextResource } from '../../types/TextResource';
import type { StudioComboboxProps } from '../StudioCombobox';
import { StudioCombobox } from '../StudioCombobox';

export type StudioTextResourcePickerProps = Omit<StudioComboboxProps, keyof OverriddenProps> &
  OverriddenProps &
  AdditionalProps;

type OverriddenProps = {
  onValueChange: (id: string) => void;
  value?: string;
};

type AdditionalProps = {
  emptyListText: string;
  textResources: TextResource[];
};

export const StudioTextResourcePicker = forwardRef<HTMLInputElement, StudioTextResourcePickerProps>(
  ({ textResources, onSelect, onValueChange, emptyListText, value, ...rest }, ref) => {
    const handleValueChange = useCallback(([id]: string[]) => onValueChange(id), [onValueChange]);

    return (
      <StudioCombobox
        hideLabel
        onValueChange={handleValueChange}
        value={value ? [value] : []}
        {...rest}
        ref={ref}
      >
        <StudioCombobox.Empty>{emptyListText}</StudioCombobox.Empty>
        {renderTextResourceOptions(textResources)}
      </StudioCombobox>
    );
  },
);

function renderTextResourceOptions(textResources: TextResource[]): ReactElement[] {
  // This cannot be a component function since the option components must be direct children of the combobox component.
  return textResources.map(renderTextResourceOption);
}

function renderTextResourceOption(textResource: TextResource): ReactElement {
  return (
    <StudioCombobox.Option
      description={textResource.id}
      key={textResource.id}
      value={textResource.id}
    >
      {textResource.value}
    </StudioCombobox.Option>
  );
}

StudioTextResourcePicker.displayName = 'StudioTextResourcePicker';
