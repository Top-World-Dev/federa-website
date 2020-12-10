<template>
  <div>
    <el-button type="info" @click="toggleWeekends">Toggle Weekends</el-button>
    <full-calendar ref="fullCalendar" :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '@/plugins/event-utils'

export default {
  layout: 'admin',
  components: {
    FullCalendar
  },
  methods: {
    toggleWeekends: function() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (
        confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    }
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        nowIndicator: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        editable: true,
        events: [
          {
            title: 'Multi day event 1',
            start: '2020-08-09',
            end: '2020-08-16'
          },
          {
            title: '1 Day event 1',
            allDay: true,
            start: '2020-08-26'
          },
          {
            title: '1 Day Event 2',
            allDay: true,
            start: '2020-08-31'
          },
          {
            title: '1 Day event 1 with specified length',
            start: '2020-08-12T12:00:00',
            end: '2020-08-12T16:00:00'
          },
          {
            title: '1 Day Event 2 with specified length',
            start: '2020-08-12T18:00:00',
            end: '2020-08-12T20:00:00'
          },
          {
            title: '2 Day event',
            start: '2020-08-18',
            end: '2020-08-21'
          },
          {
            title: 'Team Chating',
            start: '2020-08-03',
            end: '2020-08-04'
          },
          {
            title: 'Team Meeting',
            start: '2020-08-05',
            end: '2020-08-08'
          },
          {
            title: 'Happy Birthday',
            start: '2020-08-29'
          }
        ],
        initialEvents: [{ title: 'nice event', start: new Date() }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-button {
  margin-bottom: 10px;
}
</style>
