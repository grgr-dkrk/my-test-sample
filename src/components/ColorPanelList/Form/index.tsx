import * as React from 'react';
import Input from './Input';
import SubmitButton from './Button';
import { ColorPanelType } from '@/modules/ColorPanelList/types';

type FormProps = {
  handleSubmit: (data: ColorPanelType) => void;
  handleFetchData: () => void;
  itemCount: number;
};

const Form: React.FC<FormProps> = props => {
  const [label, setLabel] = React.useState('');
  const [colorCode, setColorCode] = React.useState('#000');

  const changeLabel = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLabel(e.target.value);
    },
    []
  );
  const changeColorCode = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColorCode(e.target.value);
    },
    []
  );
  const submit = React.useCallback(() => {
    props.handleSubmit({ id: props.itemCount, label, colorCode });
  }, [label, colorCode]);

  const fetchData = React.useCallback(() => {
    props.handleFetchData();
  }, []);

  return (
    <form>
      <Input inputId="title" label="名前" handleChange={changeLabel} />
      <Input
        inputId="colorCode"
        label="色"
        type="color"
        handleChange={changeColorCode}
      />
      <SubmitButton handleClick={submit}>追加する</SubmitButton>
      <SubmitButton handleClick={fetchData}>
        本日のラッキーカラーを追加
      </SubmitButton>
    </form>
  );
};

export default Form;
