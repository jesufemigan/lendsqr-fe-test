import user from "../../public/assets/icons/user-friends 1.svg";
import guarantor from "../../public/assets/icons/guarantors.svg";
import loan from "../../public/assets/icons/sack 1.svg";
import decision from "../../public/assets/icons/handshake-regular 1.svg";
import savings from "../../public/assets/icons/piggy-bank 1.svg";
import loanRequest from "../../public/assets/icons/handshake-regular 1.svg";
import whiteList from "../../public/assets/icons/user-check 1.svg";
import karma from "../../public/assets/icons/user-times 1.svg";
import organisation from "../../public/assets/icons/briefcase 1.svg";
import savingProducts from "../../public/assets/icons/saving-product.svg";
import feeAndCharges from "../../public/assets/icons/fees-and-charges.svg";
import transaction from "../../public/assets/icons/transactions.svg";
import services from "../../public/assets/icons/galaxy 1.svg";
import serviceAccount from "../../public/assets/icons/service-account.svg";
import settlements from "../../public/assets/icons/settlements.svg";
import reports from "../../public/assets/icons/reports.svg";
import preferences from "../../public/assets/icons/preferences.svg";
import feeAndPricing from "../../public/assets/icons/fees-and-pricing.svg";
import audit from "../../public/assets/icons/audit-logs.svg";

export const sidebarLinkData = [
  {
    id: 10,
    content: {
      name: "Customers",
      subContent: [
        {
          id: 1,
          icon: user,
          name: "Users",
        },
        {
          id: 2,
          icon: guarantor,
          name: "Guarantors",
        },
        {
          id: 3,
          icon: loan,
          name: "Loans",
        },
        {
          id: 4,
          icon: decision,
          name: "Decision Models",
        },
        {
          id: 5,
          icon: savings,
          name: "Savings",
        },
        {
          id: 6,
          icon: loanRequest,
          name: "Loan Requests",
        },
        {
          id: 7,
          icon: whiteList,
          name: "Whitelist",
        },
        {
          id: 8,
          icon: karma,
          name: "Karma",
        },
      ],
    },
  },

  {
    id: 20,
    content: {
      name: "Businesses",
      subContent: [
        {
          id: 1,
          icon: organisation,
          name: "Organization",
        },
        {
          id: 2,
          icon: loanRequest,
          name: "Loan Products",
        },
        {
          id: 3,
          icon: savingProducts,
          name: "Saving Products",
        },
        {
          id: 4,
          icon: feeAndCharges,
          name: "Fees and Charges",
        },
        {
          id: 5,
          icon: transaction,
          name: "Transactions",
        },
        {
          id: 6,
          icon: services,
          name: "Services",
        },
        {
          id: 7,
          icon: serviceAccount,
          name: "Service Account",
        },
        {
          id: 8,
          icon: settlements,
          name: "Settlements",
        },
        {
          id: 9,
          icon: reports,
          name: "Reports",
        },
      ],
    },
  },
  {
    id: 30,
    content: {
      name: "Settings",
      subContent: [
        {
          id: 1,
          icon: preferences,
          name: "Preferences",
        },
        {
          id: 2,
          icon: feeAndPricing,
          name: "Fees and Pricing",
        },
        {
          id: 2,
          icon: audit,
          name: "Audit Logs",
        },
      ],
    },
  },
];
