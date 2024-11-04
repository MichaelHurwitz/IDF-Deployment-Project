import React, { useContext } from 'react';
import DeploymentContext from '../context/DeploymentContext';
import styles from '../styles/UnitStatus.module.css';

type UnitStatusProps = {
    unitName: string;
};

const UnitStatus: React.FC<UnitStatusProps> = ({ unitName }) => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("UnitStatus must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;
    const status = units[unitName];
    const statusStyle = status === 'Idle' ? styles.idleStatus : styles.deployedStatus;

    return (
        <p className={`${styles.unitStatus} ${statusStyle}`}>
            {unitName}: {status}
        </p>
    );
};

export default UnitStatus;
