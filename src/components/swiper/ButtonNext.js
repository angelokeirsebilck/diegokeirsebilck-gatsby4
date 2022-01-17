import React from 'react';
import { MdChevronRight } from 'react-icons/md';

const ButtonNext = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className='bg-primary cursor-pointer hover:bg-body hover:text-white transition-colors h-12 w-12 flex justify-center items-center'
  >
    <MdChevronRight style={{ fontSize: '40px' }} />
  </div>
));

export default ButtonNext;
