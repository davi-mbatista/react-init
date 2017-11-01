import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render, createPortal } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Welcome } from 'components';
import { keyframes } from 'emotion';
import styled from 'react-emotion';

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const BangModal = styled('div')`
  position: absolute;
  z-index: 99;

  display: flex;

  justify-content: center;
  align-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: black;
  color: white;

  font-size: 3em;

  animation: ${fadeIn} .3s ease alternate;
`;

class Modal extends Component {
  static propTypes = { children: PropTypes.any }

  modalRoot = document.querySelector('#modal-root')

  DOMfragment = document.createElement('div')

  componentDidMount = () => this.modalRoot.appendChild(this.DOMfragment)

  componentWillUnmount = () => this.modalRoot.removeChild(this.DOMfragment)

  render = () => createPortal(this.props.children, this.DOMfragment)
}

class App extends Component {
    state = {
      open: false
    }

    handleOpening = () => this.setState({ open: !this.state.open })

    render() {
        return(
        <div>
            <Welcome onClick={this.handleOpening} />
            <Modal>
              {this.state.open && <BangModal onClick={this.handleOpening}>SUP DOG!</BangModal>}
            </Modal>
        </div>
      );
    }
}

render(<App />, document.querySelector('#root'));

registerServiceWorker();
