import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
const Wrapper = (props) => {
  const { className, children } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Wrapper;