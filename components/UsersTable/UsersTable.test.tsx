import { render, screen } from "@testing-library/react";
import UsersTable from "./UsersTable";

const mockData = [
  {
    id: 1,
    organizationName: "Lendsqr",
    profile: {
      firstName: "Bola",
      lastName: "Jack",
    },
    email: "bola@me.com",
    phoneNumber: "(233) 0923 10392 201",
    dateJoined: "2022123920",
    lastActiveDate: "202034349393",
  },
];

describe("UsersTable Test", () => {
  it("renders all user details", () => {
    render(<UsersTable users={mockData} />);
  });
});
