const upper=(nav1,nav2,nav3,Title, Paragraph,Cbtn)=>{
  let div= document.createElement("div")
  div.className="up"
  div.innerHTML=`
      <nav class="navi">
      <ul>
        <li><a href="/index.html">${nav1}<a></li>
        <li><a href="/What/what.html">${nav2}</a></li>
        <li><a href="/Activity1/act1.html">${nav3}</a></li>
      </ul>
      </nav>
                  <h1>${Title}</h1>
                  <p>${Paragraph}</p>
                  <button>${Cbtn}</button>
  `
  return div
}
export{upper}