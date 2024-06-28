function CalendarControl() {
    const calendar = new Date();
    const calendarControl = {
        localDate: new Date(),
        prevMonthLastDate: null,
        calWeekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        calMonthName: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        selectedDates: [],
        daysInMonth: function (month, year) {
            return new Date(year, month, 0).getDate();
        },
        firstDay: function () {
            return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
        },
        lastDay: function () { //?
            console.log(new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0));
            return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
        },
        firstDayNumber: function () {
            return calendarControl.firstDay().getDay();
        },
        lastDayNumber: function () {
            console.log(calendarControl.lastDay().getDay() + 1);
            return calendarControl.lastDay().getDay() + 1;
        },
        getPreviousMonthLastDate: function () {
            let lastDate = new Date(
                calendar.getFullYear(),
                calendar.getMonth(),
                0
            ).getDate();
            return lastDate;
        },
        navigateToPreviousMonth: function () {
            calendar.setMonth(calendar.getMonth() - 1);
            calendarControl.attachEventsOnNextPrev();
        },
        navigateToNextMonth: function () {
            calendar.setMonth(calendar.getMonth() + 1);
            calendarControl.attachEventsOnNextPrev();
        },
        navigateToCurrentMonth: function () {
            let currentMonth = calendarControl.localDate.getMonth();
            let currentYear = calendarControl.localDate.getFullYear();
            calendar.setMonth(currentMonth);
            calendar.setYear(currentYear);
            calendarControl.plotDates();
            calendarControl.highlightToday();
            calendarControl.attachEvents();
        },
        displayYear: function () {
            let yearLabel = document.querySelector(".calendar .calendar-year-label");
            yearLabel.innerHTML = calendar.getFullYear();
        },
        displayMonth: function () {
            let monthLabel = document.querySelector(
              ".calendar .calendar-month-label"
            );
            monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
        },
        selectDate: function (e) {
            let date = new Date(calendar.getFullYear(), calendar.getMonth(), e.target.textContent).getTime();
            
            if (!calendarControl.selectedDates.includes(date)) {

                if (!(calendarControl.selectedDates.length < 5)) {
                    let start_date = (new Date(calendarControl.selectedDates[0])).getDate();
                    document.querySelectorAll(".number-item")[start_date - 1].classList.remove("calendar-active");
                    calendarControl.selectedDates.shift();
                }

                calendarControl.selectedDates.push(date);
                document.querySelectorAll(".number-item")[e.target.textContent - 1].classList.add("calendar-active");
            } else {
                calendarControl.selectedDates = calendarControl.selectedDates.filter(element => element !== date);
                document.querySelectorAll(".number-item")[e.target.textContent - 1].classList.remove("calendar-active");
            }
        },
        plotSelectors: function () {
            document.querySelector(".calendar").innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
              <button class="calendar-prev" type="button"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16905 2L1.83093 9.33811M9.16905 17L1.83093 9.66189" stroke="#B3B3B3" stroke-width="3" stroke-linecap="round"/></svg></button>
              <div class="calendar-year-month">
              <div class="calendar-month-label"></div>
              <div class="calendar-year-label"></div>
              </div>
              <button class="calendar-next" type="button"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.83095 2L9.16907 9.33811M1.83095 17L9.16907 9.66189" stroke="#B3B3B3" stroke-width="3" stroke-linecap="round"/></svg></button>
              </div>
              <div class="calendar-today-date">Сегодня: 
                ${calendarControl.calWeekDays.slice(calendarControl.localDate.getDay() - 1)[0]}, 
                ${calendarControl.localDate.getDate()}, 
                ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
                ${calendarControl.localDate.getFullYear()}
              </div>
              <div class="calendar-weekday"></div>
              <div class="calendar-body"></div></div>`;
        },
        plotDayNames: function () {
            for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
                document.querySelector(
                    ".calendar .calendar-weekday"
                ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
            }
        },
        plotDates: function () {
            document.querySelector(".calendar .calendar-body").innerHTML = "";
            document.querySelector(".calendar .calendar-weekday").innerHTML = "";
            calendarControl.plotDayNames();
            calendarControl.displayMonth();
            calendarControl.displayYear();
            let count = 1;
            let prevDateCount = 0;
      
            calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
            let prevMonthDatesArray = [];
            let calendarDays = calendarControl.daysInMonth(
                calendar.getMonth() + 1,
                calendar.getFullYear()
            );
            // dates of current month
            for (let i = 1; i < calendarDays; i++) {
                let date = new Date(calendar.getFullYear(), calendar.getMonth(), count).getTime();
                if (i < calendarControl.firstDayNumber()) {
                    prevDateCount += 1;
                    document.querySelector(
                    ".calendar .calendar-body"
                    ).innerHTML += `<div class="prev-dates"></div>`;
                    prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
                } else {
                    document.querySelector(
                    ".calendar .calendar-body"
                    ).innerHTML += `<div class="dateNumber number-item ${calendarControl.selectedDates.includes(date) ? 'calendar-active' : ''}" data-num=${count}>${count++}</div>`;
                }
            }
            //remaining dates after month dates
            for (let j = 0; j < prevDateCount + 1; j++) {
                document.querySelector(
                    ".calendar .calendar-body"
                ).innerHTML += `<div class="dateNumber number-item" data-num=${count}>${count++}</div>`;
            }
            calendarControl.plotPrevMonthDates(prevMonthDatesArray);
            calendarControl.plotNextMonthDates();
        },
        attachEvents: function () {
            let prevBtn = document.querySelector(".calendar .calendar-prev");
            let nextBtn = document.querySelector(".calendar .calendar-next");
            let todayDate = document.querySelector(".calendar .calendar-today-date");
            let dateNumber = document.querySelectorAll(".calendar .dateNumber");
            prevBtn.addEventListener("click", calendarControl.navigateToPreviousMonth);
            nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
            todayDate.addEventListener("click", calendarControl.navigateToCurrentMonth);
            for (var i = 0; i < dateNumber.length; i++) {
                dateNumber[i].addEventListener("click", calendarControl.selectDate,);
            }
        },
        highlightToday: function () {
            let currentMonth = calendarControl.localDate.getMonth() + 1;
            let changedMonth = calendar.getMonth() + 1;
            let currentYear = calendarControl.localDate.getFullYear();
            let changedYear = calendar.getFullYear();
            if (
                currentYear === changedYear &&
                currentMonth === changedMonth &&
                document.querySelectorAll(".number-item")
            ) {
                let date = new Date(calendarControl.localDate.getFullYear(), calendarControl.localDate.getMonth(), calendarControl.localDate.getDate()).getTime();
            
                if (!calendarControl.selectedDates.includes(date)) {
                    if (!(calendarControl.selectedDates.length < 5)) {
                        let start_date = (new Date(calendarControl.selectedDates[0])).getDate();
                        document.querySelectorAll(".number-item")[start_date - 1].classList.remove("calendar-active");
                        calendarControl.selectedDates.shift();
                    }

                    calendarControl.selectedDates.push(date);
                }

                document.querySelectorAll(".number-item")[calendarControl.localDate.getDate() - 1].classList.add("calendar-active");
            }
        },
        plotPrevMonthDates: function(dates){
            dates.reverse();
            for(let i=0;i<dates.length;i++) {
                if(document.querySelectorAll(".prev-dates")) {
                    document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
                }
            }
        },
        plotNextMonthDates: function(){
            let childElemCount = document.querySelector('.calendar-body').childElementCount;
            //7 lines
            if(childElemCount > 35) {
               let diff = 42 - childElemCount;
               calendarControl.loopThroughNextDays(diff);
            }
    
            //6 lines
            if(childElemCount > 28 && childElemCount <= 35) {
                let diff = 35 - childElemCount;
                calendarControl.loopThroughNextDays(diff);
            }
    
        },
        loopThroughNextDays: function(count) {
            if(count > 0) {
                for(let i=1;i<=count;i++) {
                    document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
                }
            }
        },
        attachEventsOnNextPrev: function () {
            calendarControl.plotDates();
            calendarControl.attachEvents();
        },
        init: function () {
            calendarControl.plotSelectors();
            calendarControl.plotDates();
            calendarControl.highlightToday();
            calendarControl.attachEvents();
        }
    };

    if (document.querySelector('.calendar')) {
        calendarControl.init();
    }
};
      
const calendarControl = new CalendarControl();