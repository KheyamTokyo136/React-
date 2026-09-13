import Section1 from './components/section1/Section1'


const App = () => {

  const user=[
      {
        img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
        color:"royalblue",
        tag:'Satisfied'
      },
      {
        img:'https://media.istockphoto.com/id/2232482080/photo/young-asian-businesswoman-walking-near-office-building-holding-tablet-and-smiling.jpg?s=612x612&w=0&k=20&c=ng1v1a-6kNVUxCgkj0xww4Vg1Fm3_8Vykt3ntFaYCOY=',
        intro:'',
        color:"orange",
        tag:'Underserved'
      },
      {
        img:'https://media.istockphoto.com/id/2256421277/photo/young-professional-busy-business-man-thinking-looking-at-computer-at-work.jpg?s=612x612&w=0&k=20&c=MbOriS_gAtA_FpJ2BTsi9VTTNTEcyxc9FvdMlyvwaUo=',
        intro:'',
        color:"lightgreen",
        tag:'Underbanked'
      },
      {
        img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
        intro:'',
        color:"red",
        tag:'Underbanked'
      }
    ]
  return (
    <div>
      <Section1 user={user}/>
    </div>
  )
}

export default App
