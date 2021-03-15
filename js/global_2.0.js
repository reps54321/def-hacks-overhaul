  function toggleSidebar(ref){
  document.getElementById("sidebar").classList.toggle('active')
  }
  const main = document.querySelector('#More')
  const topOfSidebar = main.offsetTop

  const aboutSec = document.querySelector('#About')
  const speakersSec = document.querySelector('#Speakers')
  const sponsorsSec = document.querySelector('#Sponsors')
  const scheduleSec = document.querySelector('#Schedule')
  const FAQSec = document.querySelector('#FAQ')
  const topOfAbout = aboutSec.offsetTop  + 706
  const topOfSponsors = sponsorsSec.offsetTop + 706
  const topOfSpeakers = speakersSec.offsetTop + 706
  const topOfSchedule = scheduleSec.offsetTop + 706
  const topOfFAQ = FAQSec.offsetTop + 706

  function fixNav() {
    sec()
    if(window.scrollY >= topOfSidebar) {
      document.querySelector('.sidebar').classList.add('fixed')
      document.querySelector('#Navbar').classList.remove('fixed')
    } else {
      document.querySelector('#Navbar').classList.add('fixed')
      document.querySelector('.sidebar').classList.remove('fixed')
    }
  }
  function sec() {
    switch(true) {
      case (window.scrollY >= topOfAbout && window.scrollY <= topOfSpeakers) :
        document.querySelector('#Abt').classList.add('selected')
        document.querySelector('#Spk').classList.remove('selected')
        document.querySelector('#Spo').classList.remove('selected')
        document.querySelector('#Fq').classList.remove('selected')
        document.querySelector('#Sch').classList.remove('selected')
        break;
      case (window.scrollY > topOfSpeakers && window.scrollY <= topOfSponsors):
        document.querySelector('#Spk').classList.add('selected')
        document.querySelector('#Sch').classList.remove('selected')
        document.querySelector('#Abt').classList.remove('selected')
        document.querySelector('#Spo').classList.remove('selected')
        document.querySelector('#Fq').classList.remove('selected')
        break;
      case (window.scrollY > topOfSponsors && window.scrollY <= topOfSchedule):
        document.querySelector('#Spo').classList.add('selected')
        document.querySelector('#Sch').classList.remove('selected')
        document.querySelector('#Spk').classList.remove('selected')
        document.querySelector('#Abt').classList.remove('selected')
        document.querySelector('#Fq').classList.remove('selected')
        break;
      case (window.scrollY > topOfSchedule && window.scrollY <= topOfFAQ):
        document.querySelector('#Sch').classList.add('selected')
        document.querySelector('#Fq').classList.remove('selected')
        document.querySelector('#Spo').classList.remove('selected')
        document.querySelector('#Spk').classList.remove('selected')
        document.querySelector('#Abt').classList.remove('selected')
        break;
      case (window.scrollY > topOfFAQ):
        document.querySelector('#Fq').classList.add('selected')
        document.querySelector('#Sch').classList.remove('selected')
        document.querySelector('#Spo').classList.remove('selected')
        document.querySelector('#Spk').classList.remove('selected')
        document.querySelector('#Abt').classList.remove('selected')
        break;
      default:
        document.querySelector('#Sch').classList.remove('selected')
        document.querySelector('#Sch').classList.remove('selected')
        document.querySelector('#Fq').classList.remove('selected')
        document.querySelector('#Spo').classList.remove('selected')
        document.querySelector('#Spk').classList.remove('selected')
        document.querySelector('#Abt').classList.remove('selected')
    }
  }
  window.addEventListener('scroll', fixNav)