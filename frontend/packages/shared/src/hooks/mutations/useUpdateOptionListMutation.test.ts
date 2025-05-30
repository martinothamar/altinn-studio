import { app, org } from '@studio/testing/testids';
import { queriesMock } from '../../mocks/queriesMock';
import { renderHookWithProviders } from '../../mocks/renderHookWithProviders';
import {
  type UpdateOptionListMutationArgs,
  useUpdateOptionListMutation,
} from './useUpdateOptionListMutation';
import type { Option } from '../../types/Option';
import { createQueryClientMock } from '../../mocks/queryClientMock';
import { QueryKey } from 'app-shared/types/QueryKey';

// Test data:
const optionListId = 'test';
const option1: Option = { value: 'test', label: 'test' };
const optionsList: Option[] = [option1];
const updatedOptionsList: Option[] = [{ ...option1, description: 'description' }];
const args: UpdateOptionListMutationArgs = { optionListId, optionsList };
const updateOptionList = jest.fn().mockImplementation(() => Promise.resolve(updatedOptionsList));

describe('useUpdateOptionListMutation', () => {
  test('Calls useUpdateOptionList with correct parameters', async () => {
    const renderUpdateOptionListMutationResult = renderHookWithProviders(() =>
      useUpdateOptionListMutation(org, app),
    ).result;
    await renderUpdateOptionListMutationResult.current.mutateAsync(args);
    expect(queriesMock.updateOptionList).toHaveBeenCalledTimes(1);
    expect(queriesMock.updateOptionList).toHaveBeenCalledWith(org, app, optionListId, optionsList);
  });

  test('Sets the updated option list on the cache', async () => {
    const queryClient = createQueryClientMock();
    const renderUpdateOptionListMutationResult = renderHookWithProviders(
      () => useUpdateOptionListMutation(org, app),
      { queries: { updateOptionList }, queryClient },
    ).result;
    await renderUpdateOptionListMutationResult.current.mutateAsync(args);
    expect(queryClient.getQueryData([QueryKey.OptionLists, org, app])).toEqual({
      test: updatedOptionsList,
    });
  });
});
