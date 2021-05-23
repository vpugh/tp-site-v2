import React from 'react';
import PomodoroTimer from '../../images/pomodoro@2x.jpg';
import HiitTimer from '../../images/hiit-timer@2x.jpg';

const WorkPreview = () => {
  return (
    <>
      {/* <h2 style={{ fontSize: 39, marginBottom: 120 }}>Work</h2> */}
      <div
        style={{
          display: 'grid',
          gridTemplate: 'auto/repeat(2, 1fr)',
          gap: 100,
          marginTop: 80,
        }}
      >
        <div>
          {/* <div style={{ backgroundColor: '#000', width: 600, height: 600 }} /> */}
          <img
            style={{
              backgroundColor: '#000',
              maxWidth: 600,
              height: 'auto',
              color: '#fff',
              width: '100%',
            }}
            src={HiitTimer}
            alt='HIIT Timer Screenshot'
          />
          <div>
            <h4 style={{ marginBottom: 0, fontSize: 39, lineHeight: '48px' }}>
              HIIT Timer
            </h4>
            <p style={{ fontSize: 20, lineHeight: '32px' }}>
              Pushing my skills to make something I wanted to use at the time. I
              started to create this timer for myself and then realized there
              might be others who could use this. It's currently a
              work-in-progress.
            </p>
          </div>
        </div>
        <div>
          {/* <div style={{ backgroundColor: '#000', width: 600, height: 600 }} /> */}
          <img
            style={{
              backgroundColor: '#000',
              maxWidth: 600,
              height: 'auto',
              color: '#fff',
              width: '100%',
            }}
            src={PomodoroTimer}
            alt='Pomodoro Timer Screenshot'
          />
          <div>
            <h4 style={{ marginBottom: 0, fontSize: 39, lineHeight: '48px' }}>
              Pomodoro Timer
            </h4>
            <p style={{ fontSize: 20, lineHeight: '32px' }}>
              A Github Pages hosted app that will replicate a pomodoro timer, in
              a more playful manner. Started off as a code challenge and then
              took some design liberties and used Vue to bring it to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPreview;
