import React, { Fragment, Component } from "react";
import "./FAB.css";

const FB = window.FB;
class App extends Component {
  state = {
    isFABClicked: false,
    isFABActionClicked: false
  };
  componentDidMount() {
    // fabButtons.addEventListener("click", () => {
    //   if (fabButtons.classList.contains("fab-action-button"))
    //     fabButtons.classList.remove("fab-action-button");
    //   else fabButtons.classList.add("fab-action-button");
    // });
  }

  onClickFAB = () => {
    const { isFABClicked } = this.state;
    this.setState({
      isFABClicked: !isFABClicked
    });
    if (!isFABClicked && FB !== undefined) FB.CustomerChat.hideDialog();
  };

  onClickFABAction = () => {
    const { isFABActionClicked } = this.state;
    this.setState({
      isFABActionClicked: !isFABActionClicked
    });
  };

  render() {
    const { isFABClicked, isFABActionClicked } = this.state;
    return (
      <Fragment>
        <div
          id="fab"
          className={`fab ${isFABClicked ? "fab-clicked" : ""}`}
          onClick={this.onClickFAB}
        >
          <span
            id="fab-action-button"
            className={`fab-action-button ${
              isFABActionClicked ? "fab-action-button-hover" : ""
            }`}
            onClick={this.onClickFABAction}
          >
            <i className="fab-action-button__icon"></i>
          </span>
          <ul id="fab-buttons" className="fab-buttons">
            <li className="fab-buttons__item">
              <a href="#" className="fab-buttons__link">
                <i className="icon-material icon-material_fb"></i>
              </a>
            </li>
            <li className="fab-buttons__item">
              <a href="#" className="fab-buttons__link">
                <i className="icon-material icon-material_tw"></i>
              </a>
            </li>
            <li className="fab-buttons__item">
              <a href="#" className="fab-buttons__link">
                <i className="icon-material icon-material_li"></i>
              </a>
            </li>
            <li className="fab-buttons__item">
              {/* <div id="fb-root"></div> */}
              <div
                className="fb-customerchat fab-buttons__link"
                attribution="setup_tool"
                page_id="107251307457228"
                theme_color="#0084ff"
              ></div>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default App;
