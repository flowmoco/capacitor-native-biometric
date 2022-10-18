export enum BiometryType {
  NONE,
  TOUCH_ID,
  FACE_ID,
  FINGERPRINT,
  FACE_AUTHENTICATION,
  IRIS_AUTHENTICATION,
  MULTIPLE,
}

export interface Credentials {
  username: string;
  password: string;
}

export interface IsAvailableOptions {
  /**
   * Specifies if should fallback to passcode authentication if biometric authentication is not available.
   */
  useFallback: boolean;
}

export interface AvailableResult {
  isAvailable: boolean;
  biometryType: BiometryType;
  errorCode?: number;
}

export interface BiometricOptions {
  reason?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  negativeButtonText?: string;
  useFallback?: boolean;
  /**
   * Only for Android.
   * Set a maximum number of attempts for biometric authentication. The maximum allowed by android is 5.
   * @default 1
   */
  maxAttempts?: number;
}

export interface GetCredentialOptions {
  server: string;
}

export interface SetCredentialOptions {
  username: string;
  password: string;
  server: string;
  /**
   * Sets access controls on keychain key to only allow access to the item after using biometric authentication
   * @default false
   */
  biometricLocked: boolean;
}

export interface DeleteCredentialOptions {
  server: string;
}

export interface NativeBiometricPlugin {
  isAvailable(options?: IsAvailableOptions): Promise<AvailableResult>;

  verifyIdentity(options?: BiometricOptions): Promise<any>;

  getCredentials(options: GetCredentialOptions): Promise<Credentials>;

  setCredentials({ username, password, server, biometricLocked = false }: SetCredentialOptions): Promise<any>;

  deleteCredentials(options: DeleteCredentialOptions): Promise<any>;
}
