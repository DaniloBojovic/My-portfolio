import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, ProgressBar } from "react-mdl";

let defaultStyle = {
  color: '#fff',
  fontSize: '20px',
  width: '100%'
};
let color = 'white';
let bar = <ProgressBar className="progress-bar" progress={44}/>
let content = {
  0: {bar: <ProgressBar className="progress-bar" progress={70}/>, value: '70%'},
  1: {bar: <ProgressBar className="progress-bar" progress={55}/>, value: '55%'},
  2: {bar: <ProgressBar className="progress-bar" progress={50}/>, value: '50%'},
  3: {bar: <ProgressBar className="progress-bar" progress={30}/>, value: '30%'},
  4: {bar: <ProgressBar className="progress-bar" progress={60}/>, value: '60%'},
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img src="file:///C:/_dbojovic/git/portfolio-react/src/img/portfolio.JPG" alt="me" className="my-img" />
            <div className="job-description">
              <h2>Software Developer</h2>
              <div className="demo-tabs">
                <Tabs
                  activeTab={this.state.activeTab}
                  onChange={(e) => this.setState({ activeTab: e })}
                  ripple
                >
                  <Tab style={{...defaultStyle}}>C#</Tab>
                  <Tab style={{...defaultStyle}}>HTML/CSS</Tab>
                  <Tab style={{...defaultStyle}}>JAVASCRIPT</Tab>
                  <Tab style={{...defaultStyle}}>REACT</Tab>
                  <Tab style={{...defaultStyle}}>MSSQL</Tab>
                </Tabs>
                <section>
                    <p className="percent-bar">{content[this.state.activeTab].value}</p>
                    <div className="content">{content[this.state.activeTab].bar}</div>
                </section>
              </div>
            </div>
          </Cell>
          <Cell col={12}>
            <div className="links">
              <a href="https://www.linkedin.com/in/danilo-bojovic-9a08b3108/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://github.com/DaniloBojovic?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square" />
              </a>
              <a href="https://codepen.io/DaniloBojovic/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-codepen" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
