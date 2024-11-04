import React, { useContext } from 'react';
import DeploymentContext from '../context/DeploymentContext';
import UnitStatus from './UnitStatus';
import styles from '../styles/UnitList.module.css';

const UnitList: React.FC = () => {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("UnitList must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;

    return (
        <div className={styles.unitListContainer}>
            <h2 className={styles.unitTitle}>Unit List</h2>
            {Object.keys(units).map(unit => (
                <UnitStatus key={unit} unitName={unit} />
            ))}
        </div>
    );
};

export default UnitList;
