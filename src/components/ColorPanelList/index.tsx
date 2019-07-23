import * as React from 'react';
import { ColorPanelType } from '@/modules/ColorPanelList/types';
import { MapDispatchTypes } from '@/containers/ColorPanelList';
import ColorPanel from './ColorPanel';
import Form from './Form';
type ColorPanelListProps = {
  items: ColorPanelType[];
} & MapDispatchTypes;

const ColorPanelList: React.FC<ColorPanelListProps> = props => {
  return (
    <div>
      <Form
        handleSubmit={props.add}
        handleFetchData={props.fetch}
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

export default ColorPanelList;
