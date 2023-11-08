import { RootState, useAppSelector } from "store";

const Alert = () => {
  const alerts = useAppSelector((state: RootState) => state.alert);

  return alerts.length > 0 ? (
    <>
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          {alert.message}
        </div>
      ))}
    </>
  ) : null;
};

export default Alert;
