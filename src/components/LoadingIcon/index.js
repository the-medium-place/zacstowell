import React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import faceIcon from '../../assets/images/faceIcon.png';

export default function index() {
    return (
        <motion.img
            className="loading"
            alt=""
            src={faceIcon}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: false }}>
        </motion.img>
    )
}
