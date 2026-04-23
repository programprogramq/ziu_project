export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  categories: string[];
  notifications: {
    email: boolean;
    push: boolean;
  };
  newsletter?: boolean;

  rodo: boolean;
}