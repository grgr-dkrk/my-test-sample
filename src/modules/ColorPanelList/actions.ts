import { ColorPanelType } from '@/modules/ColorPanelList/types';

export const addColorPanel = (payload: ColorPanelType) =>
  ({
    type: 'addColorPanel',
    payload,
  } as const);

export const removeColorPanel = (payload: ColorPanelType['id']) =>
  ({
    type: 'removeColorPanel',
    payload,
  } as const);

export const fetchLuckyColorData = () =>
  ({
    type: 'fetchLuckyColorData',
  } as const);

export const failureFetchLuckyColorData = () =>
  ({
    type: 'failureFetchLuckyColorData',
  } as const);
