import { DataType } from '@/modules/ColorPanelList/types';

export const FetchLuckyColor = (token: string | null): Promise<DataType> => {
  return new Promise((resolve, reject) => {
    if (!token) reject(new Error('invalid token'));
    setTimeout(() => {
      resolve({
        label: '情熱の赤',
        colorCode: 'red',
      });
    }, 1000);
  });
};
