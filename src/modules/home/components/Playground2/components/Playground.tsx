'use client';

import { useState } from 'react';

import { Separator } from '@/common/components/ui/separator';

import Input from './Input';
import Output from './Output';

const Playground: React.FC = () => {
  const [value, setValue] = useState(0);
  const changeValue = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <div className="flex">
      <Input changeValue={changeValue}></Input>
      <Separator orientation="vertical" className="ml-12 mr-12 h-[110vh]" />
      <Output value={value}></Output>
    </div>
  );
};

export default Playground;
