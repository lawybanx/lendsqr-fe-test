import logo from '@/app/assets/logo.png';
import briefcase from '@/app/assets/briefcase.png';
import dropdown from '@/app/assets/dropdown.png';
import home from '@/app/assets/home.png';
import users from '@/app/assets/users.png';
import guarantors from '@/app/assets/guarantors.png';
import loans from '@/app/assets/loans.png';
import models from '@/app/assets/models.png';
import savings from '@/app/assets/savings.png';
import loanRequests from '@/app/assets/loanProducts.png';
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

export { briefcase, dropdown, home, customers, businesses, settings };
