import React, { type ChangeEvent } from 'react';
import { StudioNativeSelect } from '../../../../../../StudioNativeSelect';
import type { Props } from './Props';
import { GatewayActionContext } from '../../../../../enums/GatewayActionContext';
import { useStudioExpressionContext } from '../../../../../StudioExpressionContext';
import type { SimpleSubexpressionValueType } from '../../../../../enums/SimpleSubexpressionValueType';

export const GatewayActionSelector = ({
  value,
  onChange,
}: Props<SimpleSubexpressionValueType.GatewayActionContext>) => {
  const { texts } = useStudioExpressionContext();
  const options = Object.values(GatewayActionContext);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChange({ ...value, key: event.target.value as GatewayActionContext });

  return (
    <StudioNativeSelect
      size='small'
      onChange={handleChange}
      label={texts.gatewayActionKey}
      defaultValue={value.key}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {texts.gatewayActionContext[option]}
        </option>
      ))}
    </StudioNativeSelect>
  );
};
