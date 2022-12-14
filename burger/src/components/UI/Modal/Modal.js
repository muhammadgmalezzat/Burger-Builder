import React from 'react'
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../HOC/auxiliary';

const Modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliary>
    )
};
export default Modal