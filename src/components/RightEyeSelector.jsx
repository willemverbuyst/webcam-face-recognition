import React from 'react';
import Select from 'react-select';

import rightEye1 from '../rightEye/rightEye1.png';
import rightEye2 from '../rightEye/rightEye2.png';
import rightEye3 from '../rightEye/rightEye3.png';
import rightEye4 from '../rightEye/rightEye4.png';
import rightEye5 from '../rightEye/rightEye5.png';

const options = [
  {
    value: 'rightEye1',
    label: (
      <div>
        <img src={rightEye1} height="30px" width="30px" alt="rightEye" />
      </div>
    ),
  },
  {
    value: 'rightEye2',
    label: (
      <div>
        <img src={rightEye2} height="30px" width="30px" alt="rightEye" />
      </div>
    ),
  },
  {
    value: 'rightEye3',
    label: (
      <div>
        <img src={rightEye3} height="30px" width="30px" alt="rightEye" />
      </div>
    ),
  },
  {
    value: 'rightEye4',
    label: (
      <div>
        <img src={rightEye4} height="30px" width="30px" alt="rightEye" />
      </div>
    ),
  },
  {
    value: 'rightEye5',
    label: (
      <div>
        <img src={rightEye5} height="30px" width="30px" alt="rightEye" />
      </div>
    ),
  },
];

export default function RightEyeSelector(props) {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} onChange={props.onChange} />
    </div>
  );
}
