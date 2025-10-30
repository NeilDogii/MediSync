"use client";

import React, { useState, useEffect } from "react";
import {
  formatDate,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import Sidebar from "@/components/DoctorComponents/Sidebar";

const Calendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newEventTitle, setNewEventTitle] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("events");
      if (savedEvents) {
        setCurrentEvents(JSON.parse(savedEvents));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("events", JSON.stringify(currentEvents));
    }
  }, [currentEvents]);

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  const handleDeleteEvent = (eventId: string) => {
    const calendarEl = document.querySelector(".fc"); // FullCalendar DOM element
    const calendarApi = (calendarEl as any)?._fullCalendar?.getApi?.();

    if (calendarApi) {
      const event = calendarApi.getEventById(eventId);
      if (event) {
        event.remove();
      }
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewEventTitle("");
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEventTitle && selectedDate) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();

      const newEvent = {
        id: `${selectedDate.start.toISOString()}-${newEventTitle}`,
        title: newEventTitle,
        start: selectedDate.start,
        end: selectedDate.end,
        allDay: selectedDate.allDay,
      };

      calendarApi.addEvent(newEvent);
      handleCloseDialog();
    }
  };

  return (
    <div>

      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        <Sidebar />

        <div className="flex flex-col md:flex-row w-full px-4 md:px-10 gap-6 md:gap-8 py-6">
          {/* Left Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-2xl shadow-md border border-[#0093D6]/30">
            <div className="py-6 text-xl md:text-2xl font-extrabold px-5 text-[#005FA3] border-b-2 border-[#0093D6]">
              Calendar Events
            </div>
            <ul className="space-y-3 p-4 overflow-y-auto max-h-[70vh]">
              {currentEvents.length <= 0 && (
                <div className="italic text-center text-gray-400">
                  No Events Present
                </div>
              )}

              {currentEvents.length > 0 &&
                currentEvents.map((event: EventApi) => (
                  <li
                    key={event.id}
                    className="flex justify-between items-center border border-[#0093D6]/50 shadow-sm px-3 py-2 rounded-md text-[#005FA3] font-semibold hover:bg-[#0093D6]/10 transition"
                  >
                    <div className="text-sm md:text-base">
                      {event.title}
                      <br />
                      <label className="text-[#005FA3]/80 font-medium text-xs md:text-sm">
                        {formatDate(event.start!, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </label>
                    </div>

                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="text-[#0093D6] hover:text-red-500 transition"
                      title="Delete Event"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 lg:w-3/4 border-2 rounded-2xl shadow-lg bg-white p-3 md:p-5">
            <FullCalendar
              height={"80vh"}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={
                typeof window !== "undefined"
                  ? JSON.parse(localStorage.getItem("events") || "[]")
                  : []
              }
              eventColor="#005FA3"
              eventTextColor="#ffffff"
            />
          </div>
        </div>
      </div>

      {/* Dialog for adding new events */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent >
          <DialogHeader>
            <DialogTitle className="text-[#005FA3] font-bold">
              Add New Event Details
            </DialogTitle>
          </DialogHeader>
          <form className="space-x-5 mb-4" onSubmit={handleAddEvent}>
            <input
              type="text"
              placeholder="Event Title"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              required
              className="border border-[#0093D6] p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#005FA3]"
            />
            <button
              className="bg-[#005FA3] hover:bg-[#0093D6] text-white p-3 mt-5 rounded-md font-semibold transition"
              type="submit"
            >
              Add
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calendar;
