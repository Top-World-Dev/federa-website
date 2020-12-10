export default function getStatus(propertyType, propertyStatus) {
  const statusList = [
    {
      type: 'For Sale',
      color: 'green',
      data: ['active', 'pending', 'active under contact', 'Commercial site']
    },
    {
      type: 'For Rent',
      color: 'blue',
      data: ['residential lease', 'commercial lease']
    },
    {
      type: 'Sold',
      color: 'red',
      data: ['closed']
    },
    {
      type: 'Coming Soon',
      color: 'yellow',
      data: []
    },
    {
      type: 'Off Market',
      color: 'black',
      data: ['expired', 'hold', 'cancelled', 'withdrawn', 'delete']
    },
    {
      type: 'Temporary Off Market',
      color: 'purple',
      data: []
    }
  ]

  const defaultStatus = {
    type: 'Off Market',
    color: 'black',
    data: ['expired', 'hold', 'cancelled', 'withdrawn', 'delete']
  }

  if (!propertyStatus) {
    return defaultStatus
  }

  const status = statusList.find(
    s => s.data.indexOf(propertyStatus.toLowerCase()) > -1
  )
  if (!status) {
    return defaultStatus
  }
  if (propertyStatus.toLowerCase() === 'closed' && propertyType.toLowerCase() === 'residential lease')
  {
    const rentStatus = {
      type: 'Rented',
      color: 'cyan',
      data: ['residential lease', 'closed']

    }
    return rentStatus
  }
  return status
}
