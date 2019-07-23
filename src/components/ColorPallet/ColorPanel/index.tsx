import * as React from 'react';
import { ColorPanelType } from '@/modules/ColorPanelList/types';

type ColorPanelProps = ColorPanelType;

const ColorPanel = (props: ColorPanelProps) => {
  return (
    <li>
      {props.colorCode}
      <span
        role="presentation"
        style={{
          display: 'block',
          backgroundColor: props.colorCode,
          height: 60,
          width: 60,
        }}
      ></span>
    </li>
  );
};

export default ColorPanel;
