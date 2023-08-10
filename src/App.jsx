import { useState } from "react"

function App(){
  const [data,setdata] = useState([
    {
      title  : "XII RPL BAHASA INDONESIA",
      color  : "#3680ef",
      date   : "TH 2023-2024",
      teach  : "Titik Karyati",
      image  : "https://lh3.googleusercontent.com/a/default-user=s75-c",
      onclick : () => {}
    },
    {
      title : "Ekskul Wajib PRAMUKA",
      color : "#009788",
      date  : "kelas XI-SMK Negeri 10 Jakarta",
      teach : "Indra Bahrum",
      image : "https://lh3.googleusercontent.com/a-/AD_cMMRqIqYlMrUuPZdk0R3SuXWEES3vdtP46WQDA6IbxKSjhY8=s75-c",
      onclick : () => {}
    },
    {
      title : "KIMIA 10 RPL 55",
      color : "#32ac71",
      date  : "Tahun 2021_2022",
      teach : "Ichsan Alnursan",
      image : "https://lh3.googleusercontent.com/a-/AD_cMMSZLbjArjSXSGZGiPPqQKF_F4YA-gplLUz4iXTQ9JMKlw=s75-c",
      onclick : () => {}
    },
    {
      title : "X RPL (2021-2022)",
      color : "#3680f1",
      date  : "TH 2021-2022",
      teach : "Sudewo Pranowo",
      image : "https://lh3.googleusercontent.com/a-/AD_cMMQmy2G42ou4jtYTszbyMsrgE8f3FlZwKOjDwzOkOSq-yHE=s75-c",
      onclick : () => {}
    },
    {
      title : "XII RPL",
      color : "#626365",
      date  : "SMK Negeri 10 Jakarta",
      teach : "Kelas Virtual SMK Negeri 10 Jakarta",
      image : "https://lh3.googleusercontent.com/a-/AD_cMMQDpsNEqAguZbo27xbCPQW2OalJ7ABukG2ll7pi5b7x7g=s75-c",
      onclick : () => {}
    },
    {
      title : "Belajar Jadi Raja",
      color : "#ff8b66",
      date  : "Albedo",
      teach : "Menjadi Raja dari Para Tuhan",
      image : "https://images.pexels.com/photos/17686105/pexels-photo-17686105/free-photo-of-animal-cute-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      onclick : () => {}
    },
  ])
  return(
    <>
    <div classNameName="row">
      <div classNameName="col">
        <Navbar/>
      </div>
    </div>
    <div className="row">
      <div className="col-3" style={{marginTop: 52}}>
        <Sidebar data = {data}/>
      </div>
      <div className="col" style={{marginTop: 60}}>
        <Main data = {data}/>
      </div>
      <div className="col-3">
        <div className="d-flex fixed-bottom ">
          <Nanya/>
        </div>
      </div>
    </div>
    </>
  )
}

function Nanya()
{
  return(
    <div className="row" style={{position: 'absolute', bottom: 5, right: 15,}}>
      <div className="rounded-circle">
         <button className="btn rounded-circle"><i className="bi bi-question-circle" style={{fontSize: 20}}></i></button>
      </div>
    </div>
  )
}
function Main(props){
  return(
    <>
    <Section data={props.data}/>
    
    </>
  )
}

function Navbar(){
  const [toggle, toggleState] = useState(false);

  return(
    <div className="fixed-top">
  <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-secondary-subtle">
  <div className="container-fluid">
    <button style={{borderRadius:50, backgroundColor: 'white', borderColor: 'transparent', marginLeft: 10}}>
      <i className="navbar-toggler-icon"></i>
    </button>
  <a className="navbar-brand d-flex" href="#" onMouseOver={() => toggleState(true)} onMouseOut={() => toggleState(false)} style={{textDecorationLine : toggle ? 'underline' : 'none', color : toggle ? 'green' : 'black'}}>
      <img style={{width: '9%', marginRight: 10, marginLeft: 20}} src="data:image/jpeg;base64,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"></img>
      <span >Classroom</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <div className="col d-flex justify-content-end">
        <div className="row">
          <div className="col-2">
          <Menu icon="bi bi-plus-lg"  onClick={() => {}}></Menu>
          </div>
          <div className="col-2">
           <Menu icon="bi bi-grid-3x3-gap-fill" onClick={() => {}}></Menu>
          </div>
          <div className="col">
          <Menu icon="bi bi-person-fill" onClick={() => {}}></Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

function Sidebar(props){
    const [toggle, toggleState] = useState(false);
    const [toggle2, toggleState2] = useState(false);
  return(
    <div style={{overflowY: 'scroll', height: '100vh', position:'sticky',top:'50px' }}>
    <div className="card">
      <div className="card-body">
        <button className="btn" onMouseOver={() => toggleState(true)} onMouseOut={() => toggleState(false)} style={{backgroundColor : toggle ? '#f6f6f6' : 'white', width: '100%'}}>
          <Menu icon="bi bi-house-door" label="Beranda" onClick={() => {}}></Menu>
        </button>
        <button className="btn" onMouseOver={() => toggleState2(true)} onMouseOut={() => toggleState2(false)} style={{backgroundColor : toggle2 ? '#f6f6f6' : 'white', width: '100%'}}>
          <Menu icon="bi bi-calendar4" label="Kalender" onClick={() => {}}></Menu>
        </button>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
      <div className="row">
        <div className="col">
          <button className="btn" style={{width: '100%'}}>
            <Menu icon="bi bi-mortarboard" label="Terdaftar" onClick={() => {}}></Menu>
          </button>
          <button className="btn" style={{width: '100%'}}>
            <Menu icon="bi bi-card-checklist" label="Daftar tugas" onClick={() => {}}></Menu>
          </button>
        </div>
      </div>
        <Sidemapel data={props.data}/>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <button className="btn" style={{width: '100%'}}>
          <Menu icon="bi bi-save" label="Kelas yang diarsipkan" onClick={() => {}}></Menu>
        </button>
        <button className="btn" style={{width: '100%'}}>
          <Menu icon="bi bi-gear" label="Setelan" onClick={() => {}}></Menu>
        </button>
      </div>
    </div>
    </div>
  )
}

function Sidemapel(props){
  return(
    <div>
      {
        props.data?.map((item, key) =>  {
          console.log(props.data)
        return(
        <>
        <div key={props.key} className="row">
          <div className="col d-flex" style={{marginTop: 12}}>
           <div className="col-3 d-flex">
            <div className="d-flex align-items-center" style={{position: 'absolute', width: '35px', height:'35px',overflow: 'hidden', marginLeft: 10}}>
              <img className="rounded-circle" src={item.image} style={{width: '100%',height: '100%', objectFit: 'cover'}}></img>
            </div>
          </div>
        <div>
          <div className="row">
            <span className=" d-inline-block text-truncate" style={{fontSize: 15,maxWidth: '255px', fontWeight: ''}}>{item.title}</span><br/>
          </div>
          <div className="row">
            <span style={{fontSize: 12}}>{item.date}</span>
          </div>
          </div>
          </div>
        </div>     
        </>
        )
        })  
        }
    </div>
  )
}


function Gcrcard(props){
  return(
    <div key={props.keys} className="col-6 pe-2 mt-4">
      <div className="card">
      <div className="card-header d-flex" style={{background: props.item.color? props.item.color : 'blue' }}>
          <div className="row">
            <div className="col d-flex justify-content-between">
              <span className="h4 text-white pe-2 d-inline-block text-truncate" style={{maxWidth: '255px'}}>{props.item.title}</span>
               <div className="d-flex justify-content-end text-white">
                 <Menucard icon="bi bi-three-dots-vertical" onClick={() => {}}></Menucard>
               </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="text-white" style={{fontSize: 13}}>{props.item.date}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="text-white d-inline-block text-truncate" style={{fontSize: 13, maxWidth: '170px'}}>{props.item.teach}</span>
              </div>
            </div>
        </div>     
      </div>
      <div className="card-body d-flex justify-content-end align-item-top" style={{height: '150px'}}>
       <div className="col rounded-circle" style={{position: 'absolute', top:60, width: '72px' , height: '72px', overflow: 'hidden' , backgroundColor: '#A0C3FF'}}>
          <img className="col rounded-circle" style={{width: '100%', height: '100%', objectFit:'cover'}} src={props.item.image}></img>
       </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <Menucard icon="bi bi-person-video"></Menucard>
            <Menucard icon="bi bi-folder"></Menucard>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

function Section(props){
    return(
      <div>
        <div className="row mb-4">
          {
            props.data?.map((item, key) =>  {
              return(
                <>
                <Gcrcard key={key} item={item}/>
                {/* <Sidemapel key={key} data={props.item} /> */}
                </>
              )
            })  
          }
        </div>
      </div>
    )
}

function Menucard(props){
  return(
    <div className="d-flex justify-content-end align-item-end" onClick={props.onClick}>
      <div className="pe-4">
        <i style={{fontSize: 20}} className={props.icon}></i>
     </div>
    </div>
  )
}
 
function Menu(props)
{
  return(
    <div className="d-flex justify-content-start align-item-center" onClick={props.onClick} style={{objectFit: 'cover'}}>
      <div className="pe-4">
        <i style={{fontSize: 20, marginLeft: 5,}} className={props.icon}></i>
      </div>
      <div>
        <span style={{fontSize: 15}} className="">{props.label}</span>
      </div>
    </div>
  )
}

export default App