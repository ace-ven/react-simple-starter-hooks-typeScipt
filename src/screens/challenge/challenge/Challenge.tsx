import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getChallenge,
  clearChallenge
} from "../../../store/actions/battle.action";
import BattleIDE from "../../../components/IDE/battleIDE";
import "./Challenge.scss";
import Box from "../../../components/box/Box";
import Timer from "../../../components/Timer/Timer";
import { parseSecondToMin } from "../../../helpers/time.helper";
import Button from "../../../components/buttons/Button";
import TerminalIDE from "../../../components/IDE/Termial";
import { validateUserCode, validateV2 } from "../../../helpers/striper";
import { addToasterAlert } from "../../../store/actions/UI.actions";

class Challenge extends React.Component<any, any> {
  state = {
    codeStr: "",
    initialCode: ""
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.dispatch(getChallenge(id));
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (nextProps !== this.props) {
      if (!this.props.challenge.name && nextProps.challenge.name) {
        this.createIntialFunctionCode(nextProps.challenge);
        return true;
      }
      return true;
    }
    if (nextState !== this.state) {
      return true;
    }
    return false;
  }

  updateUserAnswer = (userAnswer: string) => {
    const codeStripped = validateV2(userAnswer, this.state.initialCode);
    if (codeStripped.status) {
      const newState = { ...this.state };
      newState.codeStr = userAnswer;
      this.setState(() => ({ codeStr: userAnswer }));
    } else {
      this.props.dispatch(
        addToasterAlert({ msg: codeStripped.msg, status: "error" })
      );
    }
  };

  createIntialFunctionCode = (challenge: challenge) => {
    const {
      name,
      description,
      desire,
      difficulty,
      duration,
      paramsNames,
      inputs
    } = challenge;
    const formatedCode = `\t // ${description}
   // You got ${parseSecondToMin(parseInt(duration as string))} \n
   function ${name} (${paramsNames && paramsNames.join(", ")}) {\n\n
   }
    `;
    const newState = { ...this.state };
    newState.codeStr = formatedCode;
    newState.initialCode = formatedCode;
    this.setState(() => ({ ...newState }));
  };

  componentWillUnmount() {
    this.props.dispatch(clearChallenge());
  }
  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-title">
          Challenge - {this.props.challenge.name || ""}
        </div>

        <div className="challenge-interface">
          <div className="right-section">
            <div className="challenge-boxes">
              <Box height={"100%"} width={"25%"}>
                <div>TIME</div>
                <Timer duration={this.props.challenge.duration || 0} />
              </Box>
              <Box height={"100%"} width={"25%"}>
                <div>Char Length</div>
                <div style={{ fontSize: "45px" }}>
                  {this.state.codeStr.length}
                </div>
              </Box>
              <Box height={"100%"} width={"25%"} />
            </div>
            <div className="ide-container">
              <BattleIDE
                challengeStr={this.state.codeStr}
                onUpdate={this.updateUserAnswer}
              />
            </div>
            <div className="actions-btn">
              <Button
                title="test"
                shape={"rounded"}
                btnStyle={"empty"}
                fn={() => {}}
                color={"primary"}
              />
              <Button
                title="submit"
                shape={"rounded"}
                btnStyle={"empty"}
                fn={() => {
                  console.log(this.props.challenge);
                  console.log(this.state);
                }}
                color={"primary"}
              />
            </div>
          </div>
          <div className="left-section">
            <Box height={"55%"} width={"600px"}></Box>
            <div className="challenge-terminal">
              <TerminalIDE ideKind={"terminal"} outputObj={""} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    challenge: state.battle.currentChallenge || {},
    timer: state.Timer
  };
};

export default connect(mapStateToProps)(Challenge);
