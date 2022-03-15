// This file is for making the calls to the MetaWeather API
// This file also will filer out and only select the data that the
// program uses to simplify code elsewhere.

// Celsius to fahrenheit function
const CtoF = (degC) => {
  return Math.round(degC * (9/5) + 32)
}

// Get from the API all cites that match the query.
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

// Get from the api details on all woeids in the given list.
// More detail is necessary to show the data in the search results 
// since state/parent location is not available in the initial
// query result.
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
      predictability:cityData['consolidated_weather'][0]['predictability'],
    }
    result.push(cityInfo);
  }
  return result;
}