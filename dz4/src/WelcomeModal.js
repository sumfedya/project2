import React from 'react';
import ReactDOM from 'react-dom'

const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    padding: "5px",
    marginRight: "10px"    
};

class WelcomeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };        
    };
    
    componentDidMount(){
        this.setState({modal: true});                
    };   
        
    render(){
        return( <>
            <div id="myModal2" className={`modal ${this.state.modal?"show":"hide"}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Lorem ipsum dolor sit.</h3>
                        </div>
                        <p className="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi libero explicabo placeat sapiente vel quam at, a optio nihil obcaecati quos assumenda dolor, laborum totam asperiores doloremque corporis repellendus id temporibus rem ipsa autem laboriosam. Iure ipsam aut voluptas corporis error cum aspernatur nisi voluptatum, cupiditate quos. Dolor, delectus, itaque.
                        </p>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" style={buttonStyle} onClick={()=>{this.setState({modal: false});}}>Закрыть</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
};

export default WelcomeModal;
