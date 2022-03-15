const CtoF = (degC) => {
  return Math.round(degC * (9/5) + 32)
}

export const fetchCities = async (query, matchPrefixOnly) => {
  query = query.toLowerCase();
  const res = await fetch('location/search/?query='+query)
  var data = await res.json()
  if (matchPrefixOnly) {
    data = data.filter(item => item['title'].substring(0, query.length).toLowerCase() === query)
  }
  const woeids = await data.map(item => item['woeid'])
  return woeids
}

export const fetchCityData = async (woeids) => {
  const result = []
  for (var i = 0; i < woeids.length && i < 20; i++) {
    const cityRes = await fetch('location/'+woeids[i]+'/')
    const cityData= await cityRes.json()
    const cityInfo = {
      woeid:woeids[i],
      city:cityData['title'],
      state:cityData['parent']['title'],
      weather:cityData['consolidated_weather'][0]['weather_state_name'],
      icon:cityData['consolidated_weather'][0]['weather_state_abbr'],
      wind_speed:cityData['consolidated_weather'][0]['wind_speed'],
      wind_dir:cityData['consolidated_weather'][0]['wind_direction_compass'],
      temp_min:CtoF(cityData['consolidated_weather'][0]['min_temp']),
      temp_max:CtoF(cityData['consolidated_weather'][0]['max_temp']),
      temp_cur:CtoF(cityData['consolidated_weather'][0]['the_temp']),
      humidity:cityData['consolidated_weather'][0]['humidity'],
      visibility:cityData['consolidated_weather'][0]['visibility'],
      active:false
    }
    result.push(cityInfo);
  }
  return result;
}