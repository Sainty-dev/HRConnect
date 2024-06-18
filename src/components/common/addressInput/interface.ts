export interface AddressDetails {
  city: string;
  country: string;
  postalCode: string;
}

export interface AddressSearchInputProps {
  apiKey: string;
  onSelectAddress: (details: AddressDetails) => void;
}
