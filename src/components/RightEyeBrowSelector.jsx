import React from 'react';
import Select from 'react-select';

import rightEyeBrow1 from '../rightEyeBrow/rightEyebrow1.png';
import rightEyeBrow2 from '../rightEyeBrow/rightEyebrow2.png';
import rightEyeBrow3 from '../rightEyeBrow/rightEyebrow3.png';
import rightEyeBrow4 from '../rightEyeBrow/rightEyebrow4.png';
import rightEyeBrow5 from '../rightEyeBrow/rightEyebrow5.png';

const options = [
  {
    value: 'rightEyeBrow1',
    label: (
      <div>
        <img
          src={rightEyeBrow1}
          height="30px"
          width="30px"
          alt="rightEyeBrow"
        />
      </div>
    ),
  },
  {
    value: 'rightEyeBrow2',
    label: (
      <div>
        <img
          src={rightEyeBrow2}
          height="30px"
          width="30px"
          alt="rightEyeBrow"
        />
      </div>
    ),
  },
  {
    value: 'rightEyeBrow3',
    label: (
      <div>
        <img
          src={rightEyeBrow3}
          height="30px"
          width="30px"
          alt="rightEyeBrow"
        />
      </div>
    ),
  },
  {
    value: 'rightEyeBrow4',
    label: (
      <div>
        <img
          src={rightEyeBrow4}
          height="30px"
          width="30px"
          alt="rightEyeBrow"
        />
      </div>
    ),
  },
  {
    value: 'rightEyeBrow5',
    label: (
      <div>
        <img
          src={rightEyeBrow5}
          height="30px"
          width="30px"
          alt="rightEyeBrow"
        />
      </div>
    ),
  },
];

export default function rightEyeBrowBrowSelector(props) {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} onChange={props.onChange} />
    </div>
  );
}
