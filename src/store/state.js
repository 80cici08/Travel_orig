let cityDefault = '北京'
try {
  if (localStorage.city) {
    cityDefault = localStorage.city
  }
} catch (e) {}

export default {
  city: cityDefault
}
