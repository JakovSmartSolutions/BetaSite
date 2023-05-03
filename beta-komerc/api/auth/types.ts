export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface UpdateUserPayload {
  id: number;
  name: string;
  email: string;
}

export interface UpdateUserPasswordPayload {
  id: number;
  old_password: string;
  password: string;
  password_confirmation: string;
}
