import {ControllerProps} from 'react-hook-form';
import {emailRegex, phoneNumberRegex} from '../regex';

// ================== COMMON RULES ==============================
export const presenceRule = (fieldName: string): ControllerProps['rules'] => {
  return {
    required: `${fieldName} is required`,
  };
};

// =================== EMAIL VALIDATION ===========================
export const emailCreationRules: ControllerProps['rules'] = {
  ...presenceRule('Email'),
  pattern: {
    value: emailRegex,
    message: 'Invalid email',
  },
};

// ====================== PHONE NUMBER VALIDATION ====================
export const phoneNumberValidationRules: ControllerProps['rules'] = {
  pattern: {
    value: phoneNumberRegex,
    message: 'Phone number can only consist of numbers',
  },
};
