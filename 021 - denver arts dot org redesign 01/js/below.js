// console.log("below.js is working and loaded at the bottom of <body>");

const current = document.querySelector('#current')

const createEvent = function (data) {
    // article wrapper
    const eventArticle = document.createElement('article');
    current.appendChild(eventArticle);

    // figure
    const eventFigure = document.createElement('figure');
    // image
    const eventImage = document.createElement('img');
    eventImage.src = data.image;
    // Add image inside of figure
    eventFigure.appendChild(eventImage);

    // title
    const eventTitle = document.createElement('p');
    const eventTitleText = document.createTextNode(data.title);
    eventTitle.appendChild(eventTitleText);
    // location
    const eventLocation = document.createElement('small');
    const eventLocationText = document.createTextNode(data.location);
    eventLocation.appendChild(eventLocationText);
    // event-info wrapper
    const eventInfo = document.createElement('div');
    eventInfo.classList.add('event-info');
    
    // Add title & location to event-info
    eventInfo.appendChild(eventTitle); 
    eventInfo.appendChild(eventLocation);

    // Add everything to article
    eventArticle.appendChild(eventFigure);
    eventArticle.appendChild(eventInfo);
}

axios.get('./js/current-and-upcoming.json')
  .then(function (response) {
    // handle success
    //   console.log(response);
      const data = response.data;
      data.forEach(data => {
          createEvent(data);
      });
      
    //   
      
  })
  .catch(function (error) {
    // handle error
      console.log(error);
      
  })
  .then(function () {
    // always executed
  });
