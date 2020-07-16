import React from 'react';
import Select from 'react-select';

import leftEyeBrow1 from '../leftEyeBrow/leftEyebrow1.png';
import leftEyeBrow2 from '../leftEyeBrow/leftEyebrow2.png';
import leftEyeBrow3 from '../leftEyeBrow/leftEyebrow3.png';
import leftEyeBrow4 from '../leftEyeBrow/leftEyebrow4.png';
import leftEyeBrow5 from '../leftEyeBrow/leftEyebrow5.png';

const options = [
  {
    value: 'leftEyeBrow1',
    label: (
      <div>
        <img src={leftEyeBrow1} height="30px" width="30px" alt="leftEyeBrow" />
      </div>
    ),
  },
  {
    value: 'leftEyeBrow2',
    label: (
      <div>
        <img src={leftEyeBrow2} height="30px" width="30px" alt="leftEyeBrow" />
      </div>
    ),
  },
  {
    value: 'leftEyeBrow3',
    label: (
      <div>
        <img src={leftEyeBrow3} height="30px" width="30px" alt="leftEyeBrow" />
      </div>
    ),
  },
  {
    value: 'leftEyeBrow4',
    label: (
      <div>
        <img src={leftEyeBrow4} height="30px" width="30px" alt="leftEyeBrow" />
      </div>
    ),
  },
  {
    value: 'leftEyeBrow5',
    label: (
      <div>
        <img src={leftEyeBrow5} height="30px" width="30px" alt="leftEyeBrow" />
      </div>
    ),
  },
];

export default function leftEyeBrowBrowSelector(props) {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} onChange={props.onChange} />
    </div>
  );
}
