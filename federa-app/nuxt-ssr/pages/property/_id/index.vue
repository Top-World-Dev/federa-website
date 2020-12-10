<script>
import axios from 'axios'
export default {
  async asyncData(context) {
    const { params, $config: { baseURLAPI, basicAuthUsername, basicAuthPassword } } = context
    const { id } = params
    if (id && id.length > 0) {
      const response = await axios({
        url: `${baseURLAPI}/property/${encodeURIComponent(id)}`,
        method: 'GET',
        timeout: 300 * 1000,
        auth: {
          username: basicAuthUsername,
          password: basicAuthPassword
        },
      })
      if (response.data.error) {
        return context.redirect(301, '/')
      }
      const propertyData = response.data.property
      const parsedData = propertyData.rawData
      let pathPrefix = '';
      if (
        parsedData.LocationAddress.StateOrProvince &&
        parsedData.LocationAddress.City
      ) {
        pathPrefix = `/properties/${propertyData.type
          .replace(/\s+/, '-')
          .toLowerCase()}/${parsedData.LocationAddress.StateOrProvince.toLowerCase()}/${parsedData.LocationAddress.City.toString().replace(
          /(\s+|\/)/,
          '-'
        ).toLowerCase()}`
      }
      if(!propertyData.slug){
        context.redirect(301, '/')
      }
      return context.redirect(301, `${pathPrefix}/${propertyData.slug}`)
    }
    return {}
  },
  loading: true
}
</script>
