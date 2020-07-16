import React from 'react';
import Select from 'react-select';

import nose1 from '../nose/nose1.png';
import nose2 from '../nose/nose2.png';
import nose3 from '../nose/nose3.png';
import nose4 from '../nose/nose4.png';

const options = [
  {
    value: 'nose1',
    label: (
      <div>
        <img src={nose1} height="30px" width="30px" alt="nose" />
      </div>
    ),
  },
  {
    value: 'nose2',
    label: (
      <div>
        <img src={nose2} height="30px" width="30px" alt="nose" />
      </div>
    ),
  },
  {
    value: 'nose3',
    label: (
      <div>
        <img src={nose3} height="30px" width="30px" alt="nose" />
      </div>
    ),
  },
  {
    value: 'nose4',
    label: (
      <div>
        <img src={nose4} height="30px" width="30px" alt="nose" />
      </div>
    ),
  },
];

export default function NoseSelector(props) {
  return (
    <div style={{ width: '100px' }}>
      <Select options={options} autosize={true} onChange={props.onChange} />
    </div>
  );
}
