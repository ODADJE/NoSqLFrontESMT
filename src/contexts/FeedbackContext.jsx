import { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

const FeedbackContext = createContext();

function FeedbackProvider({ children }) {
  const showToast = ({ type, message }) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast(message);
        break;
    }
  };

  return (
    <FeedbackContext.Provider value={{ showToast }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

export default FeedbackProvider;
