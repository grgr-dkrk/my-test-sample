import * as React from 'react';
import { ColorPalletType } from '@/modules/ColorPanelList/types';
import { MapDispatchTypes } from '@/containers/ColorPallet';
import ColorPanel from './ColorPanel';
import Form from './Form';
type ColorPalletProps = {
  items: ColorPalletType;
} & MapDispatchTypes;

const ColorPallet: React.FC<ColorPalletProps> = props => {
  return (
    <div>
      <Form
        handleSubmit={props.add}
        handleFetchData={props.fetchData}
        itemCount={props.items.length}
      />
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {props.items.map(item => (
          <ColorPanel
            id={item.id}
            label={item.label || ''}
            colorCode={item.colorCode}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ColorPallet;
