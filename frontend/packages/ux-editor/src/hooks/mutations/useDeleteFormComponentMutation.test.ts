import {
  component2IdMock,
  layout1NameMock,
  queriesMock,
  renderHookWithMockStore
} from '../../testing/mocks';
import { waitFor } from '@testing-library/react';
import { useDeleteFormComponentMutation } from './useDeleteFormComponentMutation';
import { useFormLayoutsQuery } from '../queries/useFormLayoutsQuery';

// Test data:
const org = 'org';
const app = 'app';

describe('useDeleteFormComponentMutation', () => {
  it('Should save layout without deleted component', async () => {
    const { result } = await renderDeleteFormComponentsMutation();
    await result.current.mutateAsync(component2IdMock);
    expect(queriesMock.saveFormLayout).toHaveBeenCalledTimes(1);
    expect(queriesMock.saveFormLayout).toHaveBeenCalledWith(
      org,
      app,
      layout1NameMock,
      expect.objectContaining({
        data: expect.objectContaining({
          layout: expect.not.arrayContaining([
            expect.objectContaining({ id: component2IdMock })
          ])
        })
      })
    );
  });
});

const renderDeleteFormComponentsMutation = async () => {
  const formLayoutsResult = renderHookWithMockStore()(() => useFormLayoutsQuery(org, app)).renderHookResult.result;
  await waitFor(() => expect(formLayoutsResult.current.isSuccess).toBe(true));
  return renderHookWithMockStore()(() => useDeleteFormComponentMutation(org, app)).renderHookResult;
}