import React, { Component } from 'react';
import { Button } from "react-mdl";
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "../../src/App.css";
import * as jsPDF from 'jspdf';

class Resume extends Component {
    state = {
        isDisabled: false,
        isHidden: true
    }
    downloadPdf = () => {
        console.log('dajdoasndas');
        let doc = new jsPDF();
        doc.text(20,20, 'DANILO BOJOVIC');

        doc.save('resume.pdf');

        this.setState({
            isDisabled: true,
            isHidden: false
        })
    }
    render() {
        const center = {
            marginTop: '150px',
            textAlign: 'center'
        }
        const styleBtn = {
            backgroundColor: '#6b9658',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            fontSize: '125%',
            fontWeight: 'bold'
        }
        return (
            <div>
                <div style={center}>
                    <button 
                    onClick={this.downloadPdf} 
                    style={styleBtn} 
                    disabled={this.state.isDisabled}
                    hidden={!this.state.isHidden}>
                        Download PDF 
                    </button>
                </div>
                <h2 style={center} hidden={this.state.isHidden}>Successfully downloaded!</h2>
            </div>
        );
    }
}

export default Resume;