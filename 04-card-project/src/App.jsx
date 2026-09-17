import Card from './components/card';



const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tMdfSrgsO63wakpLT2kvAyjtvHHlDVbIWxoe9-mdjg&s",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "85",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "70",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "90",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd37QFyv4GzzqxSw5Otx1AI_OUJPOVoiaW3zZv2RMMBg&s=10",
    name: "Apple",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "60",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0h7DdvnqRWhALmlCUpw0pdGEv7b11a0yhxlUz9WIEiw&s=10",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "95",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFxfgtmC43i_LmI_cLo9Mb4rFbtSFGdUGS8lXA9OAeQ&s=10",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "75",
    location: "Karachi, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4GXr_6LOXhrqu_ydfQcYa4Qnpa5OcvO5EcJK9chmvg&s=10",
    name: "Tesla",
    datePosted: "6 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "100",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuSb1asI5aTr7NOszh66cf0sqJRgp96qHhnH6WyczhA&s=10",
    name: "Adobe",
    datePosted: "8 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "55",
    location: "Islamabad, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cb8n9hsctVPYKc4XLa75FejzA4hXP_tAm3bBICi7jA&s",
    name: "Spotify",
    datePosted: "12 weeks ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "80",
    location: "Peshawar, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNfgOvg8Di1P0GgbuHVhMol3NQniDakRWmn5uuhU8kg&s",
    name: "LinkedIn",
    datePosted: "9 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "65",
    location: "Swabi, Pakistan"
  }
];

  return (
    <div className='parent'>
    {
      jobOpenings.map(function(elem){
        
        return <Card brandLogo={elem.brandLogo} name={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}  location={elem.location}/>
      })
    }
    </div>
  )
}

export default App
