import briefcase from '@/app/assets/briefcase.png';
import dropdown from '@/app/assets/dropdown.png';
import dashboard from '@/app/assets/home.png';
import users from '@/app/assets/users.png';
import guarantors from '@/app/assets/guarantors.png';
import loans from '@/app/assets/loans.png';
import models from '@/app/assets/models.png';
import savings from '@/app/assets/savings.png';
import whitelist from '@/app/assets/whitelist.png';
import karma from '@/app/assets/karma.png';
import loanProducts from '@/app/assets/loanProducts.png';
import savingsProducts from '@/app/assets/savingsProducts.png';
import fees from '@/app/assets/fees.png';
import transactions from '@/app/assets/transactions.png';
import services from '@/app/assets/services.png';
import serviceAccount from '@/app/assets/serviceAccounts.png';
import settlements from '@/app/assets/settlements.png';
import reports from '@/app/assets/reports.png';
import prefrences from '@/app/assets/prefrences.png';
import pricing from '@/app/assets/pricing.png';
import audit from '@/app/assets/audit.png';
import usersIcon from '@/app/assets/users-icon.png';
import activeUsers from '@/app/assets/active-users.png';
import loanUsers from '@/app/assets/loan-users.png';
import savingsUsers from '@/app/assets/savings-users.png';
import filter from '@/app/assets/filter.png';
import ellipsis from '@/app/assets/ellipsis.png';
import leftbtn from '@/app/assets/leftbtn.png';
import rightbtn from '@/app/assets/rightbtn.png';
import view from '@/app/assets/view.png';
import blacklist from '@/app/assets/blacklist.png';
import activate from '@/app/assets/activate.png';

const customers = [
  { link: 'users', icon: users },
  { link: 'guarantors', icon: guarantors },
  { link: 'loans', icon: loans },
  { link: 'decision models', icon: models },
  { link: 'savings', icon: savings },
  { link: 'loan requests', icon: loanProducts },
  { link: 'whitelist', icon: whitelist },
  { link: 'karma', icon: karma },
];

const businesses = [
  { link: 'organization', icon: briefcase },
  { link: 'loan products', icon: loanProducts },
  { link: 'savings products', icon: savingsProducts },
  { link: 'fees and charges', icon: fees },
  { link: 'transactions', icon: transactions },
  { link: 'services', icon: services },
  { link: 'service account', icon: serviceAccount },
  { link: 'settlements', icon: settlements },
  { link: 'reports', icon: reports },
];

const settings = [
  { link: 'prefrences', icon: prefrences },
  { link: 'fees and pricing', icon: pricing },
  { link: 'audit logs', icon: audit },
];

export {
  briefcase,
  dropdown,
  dashboard,
  customers,
  businesses,
  settings,
  usersIcon,
  activeUsers,
  loanUsers,
  savingsUsers,
  filter,
  ellipsis,
  leftbtn,
  rightbtn,
  view,
  blacklist,
  activate
};
