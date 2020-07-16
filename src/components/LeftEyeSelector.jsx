import React from 'react';
import Select from 'react-select';

import leftEye1 from '../leftEye/leftEye1.png';
import leftEye2 from '../leftEye/leftEye2.png';
import leftEye3 from '../leftEye/leftEye3.png';
import leftEye4 from '../leftEye/leftEye4.png';
import leftEye5 from '../leftEye/leftEye5.png';

const options = [
  {
    value: 'leftEye1',
    label: (
      <div>
        <img src={leftEye1} height="30px" width="30px" alt="leftEye" />
      </div>
    ),
  },
  {
    value: 'leftEye2',
    label: (
      <div>
        <img src={leftEye2} height="30px" width="30px" alt="leftEye" />
      </div>
    ),
  },
  {
    value: 'leftEye3',
    label: (
      <div>
        <img src={leftEye3} height="30px" width="30px" alt="leftEye" />
      </div>
    ),
  },
  {
    value: 'leftEye4',
    label: (
      <div>
        <img src={leftEye4} height="30px" width="30px" alt="leftEye" />
      </div>
    ),
  },
  {
    value: 'leftEye5',
    label: (
      <div>
        <img src={leftEye5} height="30px" width="30px" alt="leftEye" />
      </div>
    ),
  },
];

export default function LeftEyeSelector(props) {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} onChange={props.onChange} />
    </div>
  );
}
