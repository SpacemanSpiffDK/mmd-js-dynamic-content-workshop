// JS by Dan Høegh
// UCN MMD 2021

let key = "pEefEwyv0maeCjy7bccHgzgQZNfSSunMOcFqhdrq"; // Replace this with your own key, get one here: https://api.nasa.gov/
let url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

getDataNASA();

function getDataNASA() {
  fetch(url) // fetch returns a promise containing the response as a response object. 
    .then(response => response.json()) // take the response and return is as in JSON format
    .then(data => {
      showAPOD(data);
    });
}

function showAPOD(data){
  let mediaContent;
  // switch-case with the different possible types of APOD content (image/video)
  switch (data.media_type.toLowerCase()) {
    case "image":
      // If it is an image, then add an img tag to the content string
      mediaContent = `<img src="${data.url}" alt="${data.title}">`;      
      break;
      case "video":
        // If it is a video, then add a standard Youtube embed iframe-tag to the content string
        mediaContent = `<iframe width="960" height="540" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;
        break;
        default:
          // unknow media type, so let's tell the user that
          mediaContent  `<p>ERROR: Unknown media type</p>`;      
        }
  // new string that contains the HTML that needs to go into our page
  let content = `
    <h1>${data.title}</h1>
    <h2>
      <date>${data.date}</date>
    </h2>
    ${mediaContent}
    <p>${data.explanation}</p>
  `;
  
  // document.querySelector('#root').innerHTML = content; // output the string in the #root element
  h.setInner('#root', content);
  
  // h.delElm('h1, h2');
  h.class.add('h1,h2', 'test2');
  h.class.toggle('h1', 'test2');
  h.class.remove('h2', 'test2');
  // h.delElm('h1, h2');
}