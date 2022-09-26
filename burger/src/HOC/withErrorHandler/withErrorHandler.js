import React, { Component } from 'react';
import Model from '../../components/UI/Modal/Modal';
import Auxiliary from '../auxiliary';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component  { 
        state = {
            error: null,
        };
    componentDidMount() {
        axios.interceptors.request.use((req) => {
            this.setState({ error: null });
            return req;
        });
        axios.interceptors.response.use(
            (res) => res,
            (error) => {
                this.setState({ error: error });
            }
        )
        };
        errorConfirmedHandler() {
            this.setState({ error: null });
        }
        render() { 
            return (
            <Auxiliary>
                    <Model show={this.state.error} clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        SomeThing didn't work 🙂 !
                </Model>
                <WrappedComponent  {...this.props}/>
            </Auxiliary>
        )
        }
    }
}
export default withErrorHandler