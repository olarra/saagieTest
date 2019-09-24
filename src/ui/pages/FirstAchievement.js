import React from "react";

export default ({unlockAchievement, response, resetResponse}) => { 
  return (
  <div className="sui-m-card">
    <div className="sui-m-card__content">
      <div className="sui-m-card__title">Unlock First Achievement</div>
      <div className="sui-m-card__details">
        <React.Fragment>
          <span className="sui-a-badge as--xl as--primary">POST</span>
          <pre style={styles.pre}>http://localhost:4000/api/achievement/{"{id}"}/unlock</pre>
          <button className="sui-a-button as--success" onClick={() => unlockAchievement()}>
            Try it out
          </button>
          <button className="sui-a-button as--danger-secondary" onClick={() => resetResponse()} style={{marginLeft:20}}>
            Clear Data
          </button>
          {(response) && <pre style={styles.pre}>{JSON.stringify(response,null,2)}</pre>}
        </React.Fragment>
      </div>
    </div>
  </div>
)};

const styles = {
  pre: {
    background: "#1e272e",
    color: "#f5f6fa",
    padding: "10px",
    borderRadius: "7px"
  }
};
