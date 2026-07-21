import React from "react";

function FlowDiagram({ steps }) {
  return (
    <div>
      <div className="flow-strip" role="img" aria-label={`Flow diagram: ${steps.map((s) => s.title).join(" → ")}`}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flow-strip-node">
              <span className="flow-strip-number">{index + 1}</span>
              <span className="flow-strip-title">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <span className="flow-strip-arrow" aria-hidden="true">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flow-diagram">
        {steps.map((step, index) => (
          <div className="flow-step" key={index}>
            <div className="flow-step-marker">
              <span className="flow-step-number">{index + 1}</span>
              {index < steps.length - 1 && <span className="flow-step-connector" />}
            </div>
            <div className="flow-step-body">
              <h4 className="flow-step-title">{step.title}</h4>
              <p className="flow-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowDiagram;
