import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='whatgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature 
          title={'What is GPT-3'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean et. Eleifend donec pretium vulputate sapien. Condimentum lacinia quis vel eros. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.'}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={'Chatbots'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna. Viverra aliquet eget sit amet tellus. Sed id semper risus in hendrerit gravida rutrum. Non diam phasellus vestibulum lorem sed risus ultricies.'}
        />
        <Feature
          title={'Knowledge'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque purus semper. Sed cras ornare arcu dui vivamus arcu. Amet purus gravida quis blandit turpis cursus in. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.'}
        />
        <Feature
          title={'Education'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Suscipit adipiscing bibendum est ultricies. Lectus nulla at volutpat diam ut venenatis. Ac tincidunt vitae semper quis lectus nulla at.'}
        />
      </div>
    </div>
  )
}

export default WhatGPT3