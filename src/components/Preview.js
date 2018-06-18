import React from 'react';

const Preview = (props) => (
  <div className="app-preview h-100" style={{ backgroundColor: props.content.backgroundColor }}>
    <div className="app-preview-slide h-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div>
          <h2 className="app-preview-slide-title text-center">{props.content.title}</h2>
          <h3 className="app-preview-slide-info text-center">{props.content.subTitle}</h3>
        </div>
      </div>
    </div>
  </div>
)

export default Preview;
