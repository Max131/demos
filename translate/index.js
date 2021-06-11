'use strict';
document.addEventListener('DOMContentLoaded', () => {

  const jobsContainer = document.querySelector('#jobs');
  const defaultLang = 'en';
  const secondLang = 'es';
  const $toggleButton = document.querySelector("button");
  let currentLang = defaultLang;

  const getJobs = async () => {
    const data = await fetch('common.json')
    .then( response => response.json(response))
    .catch( err => console.log(err));
    paintJobs(data.jobs.reverse());
  };

  const paintJobs = jobs =>{
    const fragment = document.createDocumentFragment();
      jobs.forEach(element => {
        const job = document.createElement('article');
        const enterprise = document.createElement('h2');
        const title = document.createElement('h3');
        const dateStart = document.createElement('time');
        const dateEnd = document.createElement('time');
        const description = document.createElement('p');
        job.setAttribute('data-id', element.id);
        enterprise.textContent = element.enterprise;
        dateStart.textContent = element["date-start"];
        dateStart.setAttribute('datetime', element["date-start"]);
        dateEnd.textContent = element["date-end"];
        dateEnd.setAttribute('datetime', element["date-end"]);
        fragment.appendChild(job);
        job.appendChild(enterprise);
        job.appendChild(title);
        job.appendChild(dateStart);
        job.appendChild(dateEnd);
        job.appendChild(description);
        const text = document.createTextNode(" - ");
        job.insertBefore(text, dateStart.nextSibling);
    });
    jobsContainer.appendChild(fragment);
    loadLanguage(defaultLang);
  }

  const loadLanguage = async (lang = defaultLang) => {
    const data = await fetch(`lang-${lang}.json`)
    .then( response => response.json(response))
    .catch( err => console.log(err));
    data.jobs.forEach( job => {
      const selector = `[data-id="${job.id}"]`;
      const $article = document.querySelector( selector);
      $article.querySelector("h3").textContent = job.title;
      $article.querySelector("p").textContent = job.description;
    });
  }

  getJobs();

  $toggleButton.addEventListener('click', e => {
    if( currentLang == defaultLang){
      currentLang = secondLang;
      $toggleButton.textContent = `Toggle to ${defaultLang.toUpperCase()}`;
    }
    else{
      currentLang = defaultLang;
      $toggleButton.textContent = `Cambiar a ${secondLang.toUpperCase()}`;
    }
    loadLanguage(currentLang);
  });

});