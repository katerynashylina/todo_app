/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';

type Props = {
  message: string;
};

export const Notification: React.FC<Props> = ({ message }) => {
  const [isShowNotification, setIsShowNotification] = useState(false);

  useEffect(() => {
    setIsShowNotification(true);

    const timer = setTimeout(() => {
      setIsShowNotification(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  const handleClose = () => {
    setIsShowNotification(false);
  };

  return (
    <>
      {isShowNotification && (
        <div className="notification is-danger is-light has-text-weight-normal">
          {/* eslint-disable jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            className="delete"
            onClick={handleClose}
          />

          {message}
        </div>
      )}
    </>
  );
};
