import React from 'react';
import Select from 'react-select';

import mouth1 from '../mouth/mouth1.png';
import mouth2 from '../mouth/mouth2.png';
import mouth3 from '../mouth/mouth3.png';
import mouth4 from '../mouth/mouth4.png';
import mouth5 from '../mouth/mouth5.png';
import mouth6 from '../mouth/mouth6.png';

const options = [
  {
    value: 'mouth 1',
    label: (
      <div>
        <img src={mouth1} height="30px" width="30px" />
        Mouth 1{' '}
      </div>
    ),
  },
  {
    value: 'mouth 2',
    label: (
      <div>
        <img src={mouth2} height="30px" width="30px" />
        Mouth 1{' '}
      </div>
    ),
  },
  {
    value: 'mouth3 ',
    label: (
      <div>
        <img src={mouth3} height="30px" width="30px" />
        Mouth 1{' '}
      </div>
    ),
  },
];

export default function ImgSelector() {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} />
    </div>
  );
}
