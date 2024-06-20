export interface Skill {
  skill: string;
  yearExp: number;
  seniorityRating: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  dob: string;
  skills: Skill[];
  address: string;
  city: string;
  country: string;
  postalCode: string;
  email: string;
}

export interface EditEmployeeHandlerArgs {
  email: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  dob: string;
  skills: Skill[];
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
