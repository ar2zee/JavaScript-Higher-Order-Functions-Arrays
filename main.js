const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i< companies.length; i++) {
// 	// console.log(companies[i]);
// }

// //foreach

// companies.forEach(function(company, index, ) {
// 	//console.log(company);
// })

// //filter

// // Get 21 and older
// let canDrink1 = [];
// for(let i = 0; i < ages.length; i++) {
// 	if(ages[i] >= 21) {
// 		canDrink1.push(ages[i]);
// 	}
// }
// // console.log(canDrink1);

// const canDrink2 = ages.filter(function(age) {
// 	if(age >= 21) {
// 		return true;
// 	}
// })

// //console.log(canDrink2);

// const canDrink3 = ages.filter(age => age >= 21);

// //console.log(canDrink3);

// //filter retail companies
// const retailCompanies1 = companies.filter(function(company) {
// 	if(company.category === 'Retail') {
// 		return true
// 	}
// })
// //console.log(retailCompanies1)

// const retailCompanies2 = companies.filter((company) =>  company.category === 'Retail');
// //console.log(retailCompanies2)

// // Get 80s companies
// const eightyCompanies3 = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// //console.log(eightyCompanies3)

// // Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(company =>  (company.end = company.start >= 10));
// //console.log(lastedTenYears)

// //map

// //Create array of company names 
// const companyNames1 = companies.map(company => company.name);
// // console.log(companyNames1)

// const companyNames2 = companies.map(company => `${company.name} [${company.start} – ${company.end}]`);
//  console.log(companyNames2)

// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare)

// const ageMap = ages
// 	.map(age => Math.sqrt(age))
// 	.map(age => age * 2);

// console.log(ageMap)



//sort

//sort companies by start year
// const sorterdCompanies = companies.sort((c1,c2) => {
// 	if(c1.start > c2.start) {
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// })
// console.log(sorterdCompanies)

// const sorterdCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1))
// console.log(sorterdCompanies)

//sort ages

// const sortAges = ages.sort((a,b) => a-b);
// console.log(sortAges)


//reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
// 	ageSum += ages[i];
// }
// console.log(ageSum)


// const ageSum = ages.reduce((total,age) => (total+age),0);
// console.log(ageSum)

// Get total years for all companies

// const totalYears = companies.reduce((total,company) => (total + (company.end - company.start) ), 0);
// console.log(totalYears)


//COmbine methods

const combined = ages
	.map(age => age*2)
	.filter(age => age >= 40)
	.sort((a,b) => a-b)
	.reduce((a,b) => a+b,0);

console.log(combined);






