import React, { Component } from "react";
class Card3 extends Component {
  renderSize() {
    const { size } = this.props.card;
    return (
      <h3 className="text-end mb-n3" style={{ margin: "-3rem -0.5rem 0 0" }}>
        <span className="badge rounded-pill bg-white text-dark border">
          {size}
        </span>
      </h3>
    );
  }
  renderFooter() {
    const { dependsOn } = this.props.card;
    return (
      <div className="card-footer">
        <small className="fw-light text-muted card-header-pills">
          Depends On:
        </small>
        <p className="lh-sm text-muted">{dependsOn}</p>
        {this.renderSize()}
      </div>
    );
  }

  dragStart = (e) => {
    const target = e.target;
    const cardId = target.id;
    e.dataTransfer.setData("cardId", cardId);
    target.classList.add("dragging");
  };

  dragOver = (e) => {
    e.stopPropagation();
    // console.log("Card");
  };

  dragEnd = (e) => {
    const target = e.target;
    target.classList.remove("dragging");
  };

  render() {
    const { epic, feature, story, id, dependsOn } = this.props.card;
    const { draggable, epicColor } = this.props;
    return (
      <div
        id={id}
        draggable={draggable}
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        onDragEnd={this.dragEnd}
        className="card mb-3"
      >
        <div className={"card-header " + epicColor}>
          <small className="card-subtitle fw-bold">{epic}</small>
          <h5 style={{ marginBottom: "0.25rem" }}>
            {feature} <span className="badge bg-light text-dark">{id}</span>
          </h5>
        </div>
        <div className="card-body text-dark">
          <p className="card-text">{story}</p>
          {!dependsOn ? this.renderSize() : ""}
        </div>
        {dependsOn ? this.renderFooter() : ""}
      </div>
    );
  }
}

export default Card3;
