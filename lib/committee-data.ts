export interface Member {
  name: string
  position: string
  phone?: string
  photo: string
}

export const workingCommittee: Member[] = [
  { name: "Mr. Saroj Ale", position: "President", phone: "9851170835", photo: "/members/sarojale.jpeg" },
  { name: "Mr.  Salman Thaling", position: "First Vice President", phone: "9851123304", photo: "/members/salmanthaling.png" },
  { name: "Mr. Tilak Prasad Chapagain", position: "Second Vice President", phone: "9851129377", photo: "/members/tilakpsd.png" },
  { name: "Mr. Prasbhu Prasad Chaudary", position: "Third Vice President", phone: "9841237699", photo: "/members/prabupsd.png" },
  { name: "Mr. Prajwal Shrestha", position: "General Secretary", phone: "9811857457", photo: "/members/prajwalshrestha.png" },
  { name: "Mr. Anish Baniya", position: "Secretary", phone: "9851108710", photo: "/members/anishbaniya.png" },
  { name: "Mr. Kushal Shrestha", position: "Treasurer", phone: "9841185745", photo: "/members/kushalshrestha.png" },
  { name: "Mr. Dhani Jung Rai", position: "Assistant Treasurer", phone: "9866445495", photo: "/members/dhanijungrai.png" },
  { name: "Mr. Gopal Koirla", position: "Member", phone: "9818448547", photo: "/members/gopalkoirala.png" },
  { name: "Mr. Anjani Koirala", position: "Member", phone: "9851056032", photo: "/members/anjanikoirala.png" },
  { name: "Ms. Junu Subba", position: "Member", phone: "9862715688", photo: "/members/junusubba.png" },
  { name: "Ms. Goma Limbu", position: "Member", phone: "9843957290", photo: "/members/gomalimbu.png" },
  { name: "Mr. Ishwor Prasad Paudel", position: "Member", phone: "9841277529", photo: "/members/ishorprasadpaudel.png" },
  { name: "Mr. Chudaeshor Shrestha", position: "Member", phone: "9849799717", photo: "/members/chudeshorshrestha.png" },
  { name: "Mr. Yeakdev Pandey (Sandip)", position: "Member", phone: "9851105659", photo: "/members/yeakdevpandey.png" },
  { name: "Mr. Dhrub Kumar Shrestha", position: "Coordinator<br/>Accounts Committee", photo: "/members/dhrubkumarshrestha.png" },
  { name: "Mr. Yadab Prasad Subedi", position: "Accounts<br/>Committee Member", photo: "/members/yadabprasadsubedi.png" },
  { name: "Mr. Dipendra Yadab", position: "Account<br/>Committee Member", photo: "/members/dipendrayadab.png" },
]

export const advisors: Member[] = [
  { name: "Mr. Rishi Kumar Chaulagain", position: "Former Chairman<br/>Chief Advisor", photo: "/members/rishikumar.png" },
  { name: "Mr. Mohan Thebe", position: "Advisor", photo: "/members/mohanthebe.png" },
  { name: "Mr. Damodar Nepal", position: "Advisor", photo: "/members/damodarnepal.png" },
  { name: "Mr. Suresh Baral", position: "Advisor", photo: "/members/sureshbaral.png" },
  { name: "Mr. Khem Raj Upreti", position: "Advisor", photo: "/members/khemrajupreti.png" },
  { name: "Ms. Ratna Jyoti Subba", position: "Advisor", photo: "/members/ratnajyotisubba.png" },
  { name: "Mr. Sanjeeb Shrestha", position: "Advisor", photo: "/members/sanjeebshrestha.png" },
]

export const employees: Member[] = [
  { name: "Ms. Manisha Chalulagain", position: "Employee", photo: "/members/manishachalulagain.png" },
]
