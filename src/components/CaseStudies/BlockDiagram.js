import React from "react";

function BlockDiagram({ blocks, pipeline }) {
  return (
    <div className={pipeline ? "block-diagram block-diagram-pipeline" : "block-diagram"}>
      {blocks.map((block, index) => (
        <React.Fragment key={index}>
          <div className="block-node">
            <div className="block-node-title">{block.title}</div>
            <p className="block-node-description">{block.description}</p>
          </div>
          {pipeline && index < blocks.length - 1 && (
            <div className="block-arrow" aria-hidden="true">→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BlockDiagram;
