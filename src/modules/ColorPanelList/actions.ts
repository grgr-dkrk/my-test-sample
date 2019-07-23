import { ColorPanelType } from '@/modules/ColorPanelList/types';

export const addColor = (payload: ColorPanelType) =>
  ({
    type: 'addColorPanel',
    payload,
  } as const);

export const removeColor = (payload: ColorPanelType['id']) =>
  ({
    type: 'removeColorPanel',
    payload,
  } as const);

export const fetchLuckyColorData = () =>
  ({
    type: 'fetchLuckyColorPanel',
  } as const);

export const failureFetchLuckyColor = () =>
  ({
    type: 'failueFetchLuckyColor',
  } as const);
