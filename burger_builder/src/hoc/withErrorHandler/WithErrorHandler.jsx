import React from 'react';
import Modal from '../../components/UI/Modal/Modal.jsx';
import Aux from '../Aux.jsx';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
      state = {
        error: null
      };

      componentWillMount() {
          this.requestInterceptor = axios.interceptors.request.use(request => {
              this.setState({error: null});
              return request;
          });
          this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
              this.setState({error});
          })
      }

      errorConfirmedHandler = () => {
          this.setState({error: null});
      };

      // remove interceptors when component unmount to prevent memory leak
      componentWillUnmount() {
          console.log('Will unmount(show interceptor id): ', this.requestInterceptor, this.responseInterceptor);
          axios.interceptors.request.eject(this.requestInterceptor);
          axios.interceptors.response.eject(this.responseInterceptor);
      }

      render() {
          return (
              <Aux>
                  <Modal
                      modalClosed={this.errorConfirmedHandler}
                      show={this.state.error}>
                      {this.state.error ? this.state.error.message : null}
                  </Modal>
                  <WrappedComponent {...this.props}/>
              </Aux>
          )
      }
  }
};

export default withErrorHandler;