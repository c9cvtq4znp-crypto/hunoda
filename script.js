async function setBackgroundByTime() {
  const orange = '#FF4500';
  const black = '#000000';
  let color = orange;

  try {
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=22.302711&lng=114.177216&date=today&formatted=0');
    const data = await response.json();

    if (data.status === 'OK') {
      const sunriseUTC = new Date(data.results.sunrise);
      const sunsetUTC = new Date(data.results.sunset);
      const nowUTC = new Date();

      if (nowUTC > sunriseUTC && nowUTC < sunsetUTC) {
        color = orange;
      } else {
        color = black;
      }
    }
  } catch (error) {
    console.error('Failed to fetch sunrise/sunset:', error);
  }

  document.body.style.backgroundColor = color;
}

setBackgroundByTime();
