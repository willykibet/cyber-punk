//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.
//   NB: Use KRA, NHIF, and NSSF values provided in the link below.

//   https://www.aren.co.ke/payroll/taxrates.htm

//   Links to an external site.

//   https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

//  tax rates and thresholds


const salary = 50000;
const personalRelief = 2400;
// nssf rate
const nssfRate = 0.06;

const taxableIncome = salary + personalRelief;

const payeAmount = calculatePaye(salary) * taxableIncome;

const nhifAmount = calculatenhif(salary);

const nssfAmount = salary * nssfRate;

const netSalary =
  salary + personalRelief - (payeAmount + nhifAmount + nssfAmount);
// nhif rates

console.log(`Gross Salary: ${salary}`);
console.log(`Reliefs: ${personalRelief}`);
console.log(`PAYE Deduction: ${payeAmount}`);
console.log(`NHIF Deduction: ${nhifAmount}`);
console.log(`NSSF Deduction: ${nssfAmount}`);
console.log(`Net salary: ${netSalary}`);

function calculatenhif(salary) {
  let tax;
  if (salary <= 5999) {
    tax = 150;
  } else if (salary >= 6000 && salary <= 7999) {
    tax = 300;
  } else if (salary >= 8000 && salary <= 11999) {
    tax = 400;
  } else if (salary >= 12000 && salary <= 14999) {
    tax = 500;
  } else if (salary >= 15000 && salary <= 19999) {
    tax = 600;
  } else if (salary >= 20000 && salary <= 24999) {
    tax = 750;
  } else if (salary >= 25000 && salary <= 29999) {
    tax = 850;
  } else if (salary >= 30000 && salary <= 34999) {
    tax = 900;
  } else if (salary >= 35000 && salary <= 39999) {
    tax = 950;
  } else if (salary >= 40000 && salary <= 44999) {
    tax = 1000;
  } else if (salary >= 45000 && salary <= 49999) {
    tax = 1100;
  } else if (salary >= 50000 && salary <= 59999) {
    tax = 1200;
  } else if (salary >= 60000 && salary <= 69999) {
    tax = 1300;
  } else if (salary >= 70000 && salary <= 79999) {
    tax = 1400;
  } else if (salary >= 80000 && salary <= 89999) {
    tax = 1500;
  } else if (salary >= 90000 && salary <= 99999) {
    tax = 1600;
  } else {
    tax = 1700;
  }
  return tax;
}

//PAYE
function calculatePaye(salary) {
  let rate;
  if (salary <= 24000) {
    rate = 0.1;
  } else if (salary >= 24001 && salary <= 32333) {
    rate = 0.25;
  } else if (salary >= 32334) {
    rate = 0.3;
  }
  return rate;
}