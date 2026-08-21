function addparagraph(){
  const para=document.createElement("p")
  para.innerText="This is new para"
  para.style.color="blue"
  const parent=document.getElementById("root")
  parent.appendChild(para)
}
const removeparagraph=()=>{
  const para=document.querySelector("p")
  const parent=document.getElementById("root")
  para.onbeforematch((i)=>{
    parent.removeChild(i)
  })
  parent.removeChild(para)
}