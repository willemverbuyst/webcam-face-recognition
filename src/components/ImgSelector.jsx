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
    value: 'mouth1',
    label: (
      <div>
        <img src={mouth1} height="30px" width="30px" alt="mouth" />
      </div>
    ),
  },
  {
    value: 'mouth2',
    label: (
      <div>
        <img src={mouth2} height="30px" width="30px" alt="mouth" />
      </div>
    ),
  },
  {
    value: 'mouth3 ',
    label: (
      <div>
        <img src={mouth3} height="30px" width="30px" alt="mouth" />
      </div>
    ),
  },
  {
    value: 'mouth4 ',
    label: (
      <div>
        <img src={mouth4} height="30px" width="30px" alt="mouth" />
      </div>
    ),
  },
  {
    value: 'mouth5 ',
    label: (
      <div>
        <img src={mouth5} height="30px" width="30px" alt="mouth" />
      </div>
    ),
  },
  {
    value: 'mouth6 ',
    label: (
      <div>
        <img src={mouth6} height="30px" width="30px" alt="mouth" />
      </div>
    ),
  },
];

export default function ImgSelector(props) {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} onChange={props.onChange} />
    </div>
  );
}
