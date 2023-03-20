export type User = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  date_of_birth: string;
  address: {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
  };
  employment: {
    title: string;
    key_skill: string;
  };
};

export type Fact = {
  fact: 'string';
  length: number;
};
