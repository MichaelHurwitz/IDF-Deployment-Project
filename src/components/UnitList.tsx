import React, { useContext } from 'react';
import DeploymentContext from '../context/DeploymentContext';
import UnitStatus from './UnitStatus';
import styles from '../styles/UnitList.module.css';
import ChangeStatus from './ChangeStatus';

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
                <div key={unit}>
                <UnitStatus unitName={unit} />
                <ChangeStatus unitName={unit} />
            </div>
            ))}
        </div>
    );
};

export default UnitList;
