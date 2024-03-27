import React from 'react';
import './style.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
  type: 'button' | 'submit'
}

const Button: React.FC<ButtonProps> = ({ variant, size, onClick, children }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'success':
        return 'btn-success';
      case 'danger':
        return 'btn-danger';
      default:
        return '';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'btn-small';
      case 'medium':
        return 'btn-medium';
      case 'large':
        return 'btn-large';
      default:
        return '';
    }
  };

  return (
    <button className={`btn ${getVariantClass()} ${getSizeClass()} w-100`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
