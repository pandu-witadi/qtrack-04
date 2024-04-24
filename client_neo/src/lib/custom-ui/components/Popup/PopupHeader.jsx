import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popup as SemanticUIPopup } from 'semantic-ui-react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import styles from './PopupHeader.module.css';

const PopupHeader = React.memo(({ children, onBack }) => (
    <SemanticUIPopup.Header className={styles.wrapper}>
        {onBack && <Button onClick={onBack} className={styles.backButton}><ArrowBackIcon size='small'/></Button>}
        <div className={styles.content}>{children}</div>
    </SemanticUIPopup.Header>
));

PopupHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onBack: PropTypes.func,
};

PopupHeader.defaultProps = {
  onBack: undefined,
};

export default PopupHeader;
