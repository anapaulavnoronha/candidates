const candidates = [
  {
    id: 1,
    name: "Ramsey Webb",
    email: "ramseywebb@comdom.com",
    birth_date: "07-02-1992",
    year_of_experience: 3,
    position_applied: "Software Engineer",
    application_date: "01-28-2020",
    status: "waiting"
  },
  {
    id: 2,
    name: "Shelby Barron",
    email: "shelbybarron@comdom.com",
    birth_date: "06-12-1975",
    year_of_experience: 10,
    position_applied: "Software Engineer",
    application_date: "12-06-2020",
    status: "rejected"
  },
  {
    id: 3,
    name: "Oneill Nelson",
    email: "oneillnelson@comdom.com",
    birth_date: "03-04-1981",
    year_of_experience: 6,
    position_applied: "Software Engineer",
    application_date: "09-02-2020",
    status: "approved"
  },
  {
    id: 4,
    name: "Good Flowers",
    email: "goodflowers@comdom.com",
    birth_date: "04-10-1992",
    year_of_experience: 2,
    position_applied: "Business Analyst",
    application_date: "03-05-2020",
    status: "rejected"
  },
  {
    id: 5,
    name: "Keisha Nieves",
    email: "keishanieves@comdom.com",
    birth_date: "08-05-1989",
    year_of_experience: 3,
    position_applied: "UX Designer",
    application_date: "12-01-2020",
    status: "approved"
  },
  {
    id: 6,
    name: "Collier Maddox",
    email: "colliermaddox@comdom.com",
    birth_date: "03-08-1994",
    year_of_experience: 1,
    position_applied: "UI Designer",
    application_date: "08-06-2020",
    status: "rejected"
  },
  {
    id: 7,
    name: "Sheppard York",
    email: "sheppardyork@comdom.com",
    birth_date: "08-08-1987",
    year_of_experience: 7,
    position_applied: "Business Analyst",
    application_date: "10-04-2020",
    status: "rejected"
  },
  {
    id: 8,
    name: "Best Cash",
    email: "bestcash@comdom.com",
    birth_date: "04-08-1990",
    year_of_experience: 10,
    position_applied: "Manager",
    application_date: "08-09-2020",
    status: "rejected"
  },
  {
    id: 9,
    name: "Rose Mccoy",
    email: "rosemccoy@comdom.com",
    birth_date: "06-01-1980",
    year_of_experience: 15,
    position_applied: "UX Designer",
    application_date: "04-04-2020",
    status: "waiting"
  },
  {
    id: 10,
    name: "Dena Bradley",
    email: "denabradley@comdom.com",
    birth_date: "09-09-1981",
    year_of_experience: 10,
    position_applied: "Software Architect",
    application_date: "07-12-2019",
    status: "waiting"
  },
  {
    id: 11,
    name: "Whitney Swanson",
    email: "whitneyswanson@comdom.com",
    birth_date: "07-12-1994",
    year_of_experience: 5,
    position_applied: "Frontend Engineer",
    application_date: "01-02-2020",
    status: "rejected"
  },
  {
    id: 12,
    name: "Sally Anderson",
    email: "sallyanderson@comdom.com",
    birth_date: "07-08-1993",
    year_of_experience: 3,
    position_applied: "UI Designer",
    application_date: "09-10-2019",
    status: "approved"
  },
  {
    id: 13,
    name: "Tasha Mcleod",
    email: "tashamcleod@comdom.com",
    birth_date: "01-06-1978",
    year_of_experience: 6,
    position_applied: "Software Engineer",
    application_date: "02-04-2019",
    status: "approved"
  },
  {
    id: 14,
    name: "Wolfe Phillips",
    email: "wolfephillips@comdom.com",
    birth_date: "01-01-1991",
    year_of_experience: 4,
    position_applied: "Business Analyst",
    application_date: "05-02-2019",
    status: "waiting"
  },
  {
    id: 15,
    name: "Serena Gill",
    email: "serenagill@comdom.com",
    birth_date: "05-07-1978",
    year_of_experience: 12,
    position_applied: "Manager",
    application_date: "03-06-2019",
    status: "waiting"
  },
  {
    id: 16,
    name: "Greta Slater",
    email: "gretaslater@comdom.com",
    birth_date: "09-01-1980",
    year_of_experience: 4,
    position_applied: "Software Engineer",
    application_date: "04-01-2019",
    status: "rejected"
  },
  {
    id: 17,
    name: "Snider Bender",
    email: "sniderbender@comdom.com",
    birth_date: "07-03-1993",
    year_of_experience: 5,
    position_applied: "Software Engineer",
    application_date: "08-04-2020",
    status: "rejected"
  },
  {
    id: 18,
    name: "Nora Blackwell",
    email: "norablackwell@comdom.com",
    birth_date: "01-06-1975",
    year_of_experience: 10,
    position_applied: "Backend Engineer",
    application_date: "06-06-2019",
    status: "rejected"
  },
  {
    id: 19,
    name: "Beatriz Dickerson",
    email: "beatrizdickerson@comdom.com",
    birth_date: "02-07-1980",
    year_of_experience: 7,
    position_applied: "Software Engineer",
    application_date: "06-05-2020",
    status: "rejected"
  },
  {
    id: 20,
    name: "Nona Estrada",
    email: "nonaestrada@comdom.com",
    birth_date: "09-02-1992",
    year_of_experience: 2,
    position_applied: "Frontend Engineer",
    application_date: "03-01-2019",
    status: "approved"
  },
  {
    id: 21,
    name: "Kasey Melendez",
    email: "kaseymelendez@comdom.com",
    birth_date: "04-03-1985",
    year_of_experience: 6,
    position_applied: "UX Designer",
    application_date: "07-06-2019",
    status: "waiting"
  },
  {
    id: 22,
    name: "Velma Snow",
    email: "velmasnow@comdom.com",
    birth_date: "08-06-1978",
    year_of_experience: 8,
    position_applied: "Scrum Master",
    application_date: "09-04-2020",
    status: "rejected"
  },
  {
    id: 23,
    name: "Sharon Bruce",
    email: "sharonbruce@comdom.com",
    birth_date: "05-02-1994",
    year_of_experience: 3,
    position_applied: "Software Engineer",
    application_date: "09-07-2019",
    status: "waiting"
  },
  {
    id: 24,
    name: "Beck Browning",
    email: "beckbrowning@comdom.com",
    birth_date: "05-12-1978",
    year_of_experience: 15,
    position_applied: "Scrum Master",
    application_date: "01-08-2019",
    status: "approved"
  },
  {
    id: 25,
    name: "Terri Gregory",
    email: "terrigregory@comdom.com",
    birth_date: "09-12-1993",
    year_of_experience: 1,
    position_applied: "Software Engineer",
    application_date: "09-03-2019",
    status: "rejected"
  },
  {
    id: 26,
    name: "Parrish Cherry",
    email: "parrishcherry@comdom.com",
    birth_date: "03-02-1977",
    year_of_experience: 11,
    position_applied: "Manager",
    application_date: "06-01-2019",
    status: "approved"
  },
  {
    id: 27,
    name: "Hodge Salinas",
    email: "hodgesalinas@comdom.com",
    birth_date: "07-07-1994",
    year_of_experience: 3,
    position_applied: "Software Engineer",
    application_date: "04-08-2020",
    status: "approved"
  },
  {
    id: 28,
    name: "Romero Ruiz",
    email: "romeroruiz@comdom.com",
    birth_date: "06-02-1990",
    year_of_experience: 2,
    position_applied: "Business Analyst",
    application_date: "09-10-2020",
    status: "waiting"
  },
  {
    id: 29,
    name: "Pittman Simpson",
    email: "pittmansimpson@comdom.com",
    birth_date: "10-04-1980",
    year_of_experience: 8,
    position_applied: "Recruiter",
    application_date: "05-09-2019",
    status: "rejected"
  },
  {
    id: 30,
    name: "Gould Armstrong",
    email: "gouldarmstrong@comdom.com",
    birth_date: "03-02-1987",
    year_of_experience: 4,
    position_applied: "UX Designer",
    application_date: "01-08-2019",
    status: "rejected"
  }
];

module.exports = (request, response) => {
  response.send(candidates);
};
