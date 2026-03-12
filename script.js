async function setBackgroundByTime() {
  const orange = '#FF4500';
  const black = '#000000';
  let color = orange;

  try {
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=22.302711&lng=114.177216&date=today&formatted=0');
    const data = await response.json();

    console.log('API Response:', data); // Debug API data

    if (data.status === 'OK') {
      const sunriseUTC = new Date(data.results.sunrise);
      const sunsetUTC = new Date(data.results.sunset);
      const nowUTC = new Date();

      console.log('Sunrise:', sunriseUTC, 'Sunset:', sunsetUTC, 'Now:', nowUTC); // Debug times

      if (nowUTC > sunriseUTC && nowUTC < sunsetUTC) {
        color = orange;
        console.log('Day mode - orange background');
      } else {
        color = black;
        console.log('Night mode - black background');
      }
    } else {
      console.log('API status not OK');
    }
  } catch (error) {
    console.error('Failed to fetch sunrise/sunset:', error);
  }

  document.body.style.backgroundColor = color;
}

setBackgroundByTime();
