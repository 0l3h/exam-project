import ACTION from './../actions/actionTypes'

const initialState = {
  events: [],
  outdatedEvents: []
}

export default function eventsReducer (state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case ACTION.ADD_NEW_EVENT: {
      const { id, eventName, eventDate, timeAmount } = data

      const sortingFunction = (eventLeft, eventRight) => {
        if (eventLeft.eventDate < eventRight.eventDate) {
          return -1
        }
        if (eventLeft.eventDate > eventRight.eventDate) {
          return 1
        }
        return 0
      }

      return {
        ...state,
        events: [
          ...state.events,
          {
            id,
            eventName,
            eventDate,
            timeAmount
          }
        ].sort(sortingFunction)
      }
    }

    case ACTION.ADD_OUTDATED_EVENT: {
      const { id, eventName } = data
      return {
        ...state,
        outdatedEvents: [...state.outdatedEvents, { id, eventName }]
      }
    }

    case ACTION.DELETE_EVENT: {
      const { id } = data

      return {
        ...state,
        events: state.events.filter(event => event.id !== id)
      }
    }

    default:
      return state
  }
}
