import { AnimatePresence } from 'framer-motion';
import React from 'react';

const Voyance = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="component-container voyance-container">
                PAGE Voyance
            </div>
        </AnimatePresence>
    );
};

export default Voyance;